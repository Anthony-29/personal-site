<template>
  <div id="nav">
    <ul>
      <li class="lists nav-name">Anthony-Paul Fontana</li>
      <li class="lists ham-menu" style="float: right">
        <i
          class="fas fa-bars"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        ></i>
      </li>
    </ul>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <router-link to="/">Home</router-link>
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
      </div>
    </div>
  </div>
  <router-view />
  <!-- 
            -->
</template>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);
@import url(https://fonts.googleapis.com/css?family=Oswald:400|Raleway:400,700,400italic,700italic);

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  max-width: 80em;
}

</style>
