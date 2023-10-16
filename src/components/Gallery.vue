<template>
  <section class="gallery" id="gallery">
    <div class="container">
      <h2 class="section_headers">Gallery</h2>

      <div class="row">
        <div class="col-6 col-md-8">
          <img src="@images/img_house1.jpg" alt="house1">
        </div>
        <div class="col-6 col-md-4">
          <img src="@images/img_rescue_tower.jpg" alt="rescue_tower">
        </div>
        <p>
          <span>Marina Palms</span> / North Miami Beach, FL 33162
        </p>
      </div>

      <div class="row">
        <div class="col-6">
          <img src="@images/img_flag.jpg" alt="flag">
        </div>
        <div class="col-6">
          <img src="@images/img_house2.jpg" alt="house2">
        </div>
        <p>
          <span>Edition Residens</span> / Miami Beach, FL 33139
        </p>
      </div>

      <div class="row">
        <div class="col-6 col-md-4">
          <img src="@images/img_car.jpg" alt="car">
        </div>
        <div class="col-6 col-md-8">
          <img src="@images/img_beach.jpg" alt="beach">
        </div>
        <p>
          <span>Faena House</span> / Miami Beach, FL 33140
        </p>
      </div>

      <div class="row">
        <div class="col-12 text-center mt-3 mb-5">
          <my-button type="Secondary">
            View all
          </my-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from '@ui/MyButton.vue';
export default {
  components:{
    MyButton,
  }
}
</script>

<style scoped lang="scss">
.gallery {
  .row {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    p {
      font-size: 1.5rem;
      margin: 1rem 0 2rem;;
      font-weight: 400;
      line-height: 27px;

      span {
        color: #0075FF;
      }
    }
  }
}
</style>