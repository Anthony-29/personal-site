<template>
  <h1 class="projects-h1">Projects</h1>
  <ProjectCards />
  <!-- Github -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="github-h3">
          Check out my
          <a
            href="https://github.com/Anthony-29?tab=repositories"
            target="__blank"
            >github</a
          >
          for more projects
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCards from "../components/ProjectCards.vue";

export default {
  name: "Porjects",
  components: {
    ProjectCards,
  },
};
</script>

<style>
</style>