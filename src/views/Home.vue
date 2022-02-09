<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <h1 class="home-h1">Hey, I'm Anthony-Paul</h1>

        <h2 class="home-body-text">
          I am a recent computer engineering graduate with a passion for coding
        </h2>

        <router-link class="btn-projects" to="/Projects"
          >My Projects</router-link
        >
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="pic-wrapper">
          <img class="img-of-me" src="../assets/picOfMe.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  background-color: #181a1e;
}
</style>