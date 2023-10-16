<!--suppress ALL -->
<template>
  <Intro></Intro>
  <Real_Estate></Real_Estate>
  <Gallery></Gallery>
  <Testimonials></Testimonials>
  <Contact_us></Contact_us>
  <Footer></Footer>
</template>

<script>
import Modal from '@components/Menu.vue';
import Intro from "@components/Intro.vue";
import Real_Estate from "@components/Real_Estate.vue";
import Gallery from "@components/Gallery.vue";
import Testimonials from "@components/Testimonials.vue";
import Contact_us from "@components/Contact_us.vue";
import Footer from "@components/Footer.vue";

export default {
  components: {
    Real_Estate,
    Intro,
    Gallery,
    Testimonials,
    Contact_us,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #000;;
  &::selection {
    background-color: #ffcc00;
    color: #ff0000;
  }
}
.section_headers {
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  margin: 20px 0;
}
.section_headers:after {
  content: url("@icon/icon_corona.svg");
  display: block;
  position: relative;
  top: -10px;
}
</style>
