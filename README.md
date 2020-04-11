# covidwatch

## 💻 Project overview

An interactive dashboard for coronavirus updates

## ⚠️ Requirements

1. NPM

## ✨ Quick start

1.  **Clone this repository.**

    ```bash
    git clone https://github.com/agnelnieves/covidwatch.git
    ```

2.  **Start developing.**

    Navigate into the new site’s directory and start it up.

    ```sh
    cd covidwatch/
    npm i
    npm run start
    # Project should start at localhost:3000
    ```

## 🛠 Commands

```bash
# Install dependencies
npm i

# install dependencies
npm install

# Launch a development server on localhost:3000 with hot-reloading.
npm run dev

# Build your application with webpack and minify the JS & CSS (for production).
npm run build

# Start the server in production mode
npm run start

# Build the application and generate every route as a HTML file (used for static hosting).
npm run generate

# Lints & fixes the code
# Also ran automatically in pre-commit hook
npm run lint

# command to run the commit prompt
# this is used to maintain consistent commit messages
npm run commit
```

## 🧐 What's inside?

    .
    ├── README.md
    ├── assets
    ├── components
    ├── jsconfig.json
    ├── layouts
    ├── middleware
    ├── nuxt.config.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── about.vue
    │   ├── index.vue
    │   └── map.vue
    ├── plugins
    ├── static
    ├── store
    └── stylelint.config.js

1. **Assets:** The assets directory contains the un-compiled assets, Sass files, images, or fonts.
2. **Components:** The components directory contains Vue.js Components. Note: We can't use asyncData in these components.
3. **Layouts:** The layouts directory includes the application layouts. Layouts are used to change the look and feel of the page.
4. **Middleware:** The middleware directory contains the Application Middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts).
5. **Pages:** The pages directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and creates the application router.
6. **Plugins:** The plugins directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to register components globally and to inject functions or constants.
7. **Static:** The static directory is directly mapped to the server root (/static/robots.txt is accessible under http://localhost:3000/robots.txt) and contains files that likely won't be changed
8. **Store:** The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store.
9. **nuxt.config.js:** The nuxt.config.js file contains Nuxt.js custom configuration.
10. **package.json:** The package.json file contains your Application dependencies and scripts.

MORE DOCUMENTATION TO ADD 4 sho!

## 🔣 Aliases

Aliases are shorcuts to specific directories

Alias 	Directory
```bash
# srcDir
~ or @
# rootDir
~~ or @@
```

Inside your vue templates, if you need to link to your assets or static directory, use ~/assets/your_image.png and ~/static/your_image.png

By default, srcDir is the same as rootDir.

## 💫 Deployment

1. To generate production ready files, run the following command:

   ```bash
   npm run build
   ```

2. Drag the content inside the `dist/` directory and drop it in the hosting

## 📖 Resources

  - [Nuxt.js docs](https://nuxtjs.org).
  - [GlobeGL](https://github.com/vasturiano/globe.gl) - WebGL Wrapper for earth
  - The dependency tree is generated with `tree` command. Use [homebrew](https://brew.sh/) to install it `brew install tree`
    - To generate it, first run `npm run clean` then generate the dependency tree by running `tree -L 2`
