<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-lg-6 col-md-12">
        <div class="container-contact">
          <form id="contact">
            <h3 class="contact-h3">Contact Me!</h3>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-lg-6 col-md-12 socials-wrapper">
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
          ><i class="fas fa-file socials" title="Resume"></i
        ></a>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-contact,
.contact-h3,
fieldset {
  background-color: white;
}
</style>