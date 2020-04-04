<template>
  <div class="app-wrapper">
    <nav>
      <nuxt-link aria-label="News" tooltip="News" flow="right" to="/">
        <i class="fas fa-newspaper"></i>
      </nuxt-link>
      <nuxt-link
        aria-label="World Visualizer"
        tooltip="Map Visualizer"
        flow="right"
        to="/map"
      >
        <i class="fas fa-globe-americas"></i>
      </nuxt-link>
      <nuxt-link
        aria-label="About Covid Watch"
        tooltip="About"
        flow="right"
        to="/about"
      >
        <i class="fas fa-info-circle"></i>
      </nuxt-link>
    </nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<style lang="scss">
@import '~assets/variables';
@import '~assets/tooltip';

.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

html {
  background: $dark900;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 40px 40px 40px 20px;
}

.app-wrapper {
  display: flex;
  height: 100%;
}

nav {
  width: 30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    min-width: 42px;
    min-height: 42px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    color: #fff;
    text-decoration: none;
    &:hover {
      background: $dark800;
    }
    margin-bottom: 20px;
  }
}

main {
  border-radius: $containerRadius;
  width: 70vw;
  height: calc(100vh - 80px);
  background: $dark800;
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media screen and (max-width: 425px) {
  html {
    margin: 0 0 20px 0;
    margin-bottom: 0;
  }

  nav {
    width: 30px;
    margin-right: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    a {
      margin-right: 20px;
      margin-bottom: 0;
      margin-top: 10px;
    }
  }
  .app-wrapper {
    flex-direction: column-reverse;
  }

  main {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    align-self: center;
    width: 95%;
    height: calc(100vh - 80px);
  }
}
</style>
