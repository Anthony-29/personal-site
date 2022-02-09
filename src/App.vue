<template>
  <div class="wrapper">
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
          <h5 id="offcanvasRightLabel">Menu</h5>
          <button
            id="close-btn"
            type="button"
            class="btn"
            data-bs-dismiss="offcanvas"
          >
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/Projects"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/About"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <!-- Adding the routing to the menu -->
              <router-link class="link link--metis" to="/Contact"
                >Contact</router-link
              >
            </li>
          </ul>
          <div class="socials-wrapper nav-socials">
            <a
              href="https://www.linkedin.com/in/anthony-paul-fontana-651873186/"
              target="__blank"
              ><i class="fab fa-linkedin socials" title="LinkedIn"></i
            ></a>
            <a
              href="https://github.com/Anthony-29?tab=repositories"
              target="__blank"
              ><i class="fab fa-github-square socials" title="Github"></i
            ></a>
            <a
              href="https://drive.google.com/file/d/166wv_UE29K7QZYzuKTGeRM7V4uSaIhnF/view?usp=sharing"
              target="__blank"
              ><i class="fas fa-file-pdf socials"  title="Resume"></i></a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
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
