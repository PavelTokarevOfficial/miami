<!--suppress ALL -->
<template>
  <section class="intro">
    <div class="content vh-100 d-flex flex-column justify-content-between pt-3">
      <row class="w-100">
        <header class="d-flex justify-content-between align-items-center">
          <p>бургер</p>
          <img src="@images/logo.svg" >
          <img src="@icon/icon_call.svg">
        </header>
      </row>
      <row>
        <h1>
          Miami<br>Condo Kings
        </h1>
      </row>
    </div>
  </section>




  <section class="real_estate">
    <div class="container">
      <div class="row">
        <div class="col-6">
          Miami best <br>
          Real estate <span>here</span>
        </div>
        <div class="col-6">
          Over 50 years experience in love.
          <p>
            Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of
            the early twentieth century, microforms, found a distant historical.
          </p>
          <p>
            The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013. More than 200
            satisfied customers premium segment. We focus only on new buildings and high-level doskanalno know this area
            better than other specialists.
            Working directly with developers - so have more useful information about the profitable deals.
          </p>


          We will never be late!
          Guaranteed secure transaction - 100%

        </div>
      </div>
    </div>
  </section>




  <section class="gallery">
    <div class="container">
      <h1 class="text-center">gallery</h1>

      <div class="row pb-4">
        <div class="col-6 col-md-8">
          <img src="@images/img_house1.jpg" alt="house1" class="gallery_image">
        </div>
        <div class="col-6 col-md-4">
          <img src="@images/img_rescue_tower.jpg" alt="rescue_tower" class="gallery_image">
        </div>
      </div>

      <div class="row pb-4">
        <div class="col-6">
          <img src="@images/img_flag.jpg" alt="flag" class="gallery_image">
        </div>
        <div class="col-6 ">
          <img src="@images/img_house2.jpg" alt="house2" class="gallery_image">
        </div>
      </div>

      <div class="row pb-4">
        <div class="col-6 col-md-4">
          <img src="@images/img_car.jpg" alt="car" class="gallery_image">
        </div>
        <div class="col-6 col-md-8">
          <img src="@images/img_beach.jpg" alt="beach" class="gallery_image">
        </div>
      </div>
    </div>
  </section>
  <section class="testimonials">testimonials</section>
  <section class="contact_us">contact us</section>
  <section class="footer">footer</section>


</template>

<script setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}


.content {
  max-width: 1020px;
  margin: 0 auto;
}

.intro {
  width: 100%;
  height: 100vh;
  background: url("@images/img_pier.jpg") no-repeat center center/cover;

}



.gallery_image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  border-radius: 8px;

}
</style>
