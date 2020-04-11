import Globe from 'globe.gl';
import { CountUp } from 'countup.js';
import { request } from './utils';
import {
  GEOJSON_URL,
  CASES_API,
  BACKGROUND_COLOR
} from './constants';
import * as d3 from 'd3';

// Globe container
const globeContainer = document.getElementById('globeViz');

const colorScale = d3.scaleSequentialPow(d3.interpolateOrRd).exponent(1 / 4)
const getVal = feat => feat.covid.cases;

let world;

init();

function init() {
  world = Globe()(globeContainer)
    .backgroundColor(BACKGROUND_COLOR)
    .showGraticules(false)
    .polygonAltitude(0.05)
    .polygonCapColor('#ffffaa')
    .polygonSideColor(() => '#061938')
    .polygonStrokeColor(() => '#061938')
    .polygonLabel(
      ({ properties: d, covid: c }) => `
            <div class="card">
              <img class="card-img" src="${c.countryInfo.flag}" alt="flag" />
              <div class="container">
                 <span class="card-title"><b>${d.ADMIN}</b></span> <br />
                 <span class="card-total-cases">${c.cases} total cases</span>
                 <div class="card-spacer"></div>
                 <hr />
                 <div class="card-spacer"></div>
                 <span>${c.active} active</span> <br />
                 <span>${c.deaths} dead</span> <br />
                 <span>${c.recovered} recovered</span>
                 <div class="card-spacer"></div>
                 <hr />
                 <div class="card-spacer"></div>
                 <div class="bottom-info">
                  <span style="color: goldenrod;">Today</span>
                  <span>${c.todayCases} cases</span>
                  <span>${c.todayDeaths} deaths</span>
                 </div>
              </div>
            </div>
          `
    )
    .onPolygonHover(hoverD => world
      .polygonAltitude(d => d === hoverD ? 0.1 : 0.05)
      .polygonCapColor(d => d === hoverD ? colorScale(getVal(d)) : '#172B4D')
    )
    .polygonsTransitionDuration(300);

  getCases();

  // Add auto-rotation
  world.controls().autoRotate = true;
  world.controls().autoRotateSpeed = 0.1;
}

async function getCases() {
  const countries = await request(GEOJSON_URL);
  const data = await request(CASES_API);

  const countriesWithCovid = [];

  data.forEach(item => {
    const countryIdxByISO = countries.features.findIndex(
      i => i.properties.ISO_A2 === item.countryInfo.iso2 && i.properties.ISO_A3 === item.countryInfo.iso3
    );

    if (countryIdxByISO !== -1) {
      countriesWithCovid.push({
        ...countries.features[countryIdxByISO],
        covid: item
      });
    } else {

      // If no country was found using their ISO, try with name
      const countryIdxByName = countries.features.findIndex(
        i => i.properties.ADMIN.toLowerCase() === item.country.toLowerCase()
      );

      if (countryIdxByName !== -1) {
        countriesWithCovid.push({
          ...countries.features[countryIdxByName],
          covid: item
        });
      }
    }

    const maxVal = Math.max(...countriesWithCovid.map(getVal));
    colorScale.domain([0, maxVal]);
  });

  world.polygonsData(countriesWithCovid);
  document.querySelector('.title-desc').innerHTML = 'Hover on a country or territory to see cases, deaths, and recoveries.'

  // Show total counts
  showTotalCounts(data);

  // Get IP Address
  const { latitude, longitude } = await request('https://geolocation-db.com/json/');

  world.pointOfView({
    lat: latitude,
    lng: longitude
  }, 1000);
}

function showTotalCounts(data) {
  const totalInfected = data.reduce((a, b) => a + b.cases, 0);
  const infected = new CountUp('infected', totalInfected);
  infected.start();

  const totalDeaths = data.reduce((a, b) => a + b.deaths, 0);
  const deaths = new CountUp('deaths', totalDeaths);
  deaths.start();

  const totalRecovered = data.reduce((a, b) => a + b.recovered, 0);
  const recovered = new CountUp('recovered', totalRecovered);
  recovered.start();
}

// Responsive globe
window.addEventListener('resize', (event) => {
  world.width([event.target.innerWidth])
  world.height([event.target.innerHeight])
});
