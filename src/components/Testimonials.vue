<template>
  <section class="testimonials" id="testimonials">
    <h2 class="section_headers">Testimonials</h2>
    <div class="container">
      <div class="row text-center d-flex justify-content-center">
        <div class="col-12 col-md-4 col-lg-3">
          <img src="@images/img_person1.jpg" class="w-50 align-self-center" alt="Employee 1">
          <p class="name">Leslie Mckinney</p>
          <p class="post">CEO</p>
          <p class="feedback ">Nice work, Certificates National Association of Realtors (USA)</p>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <img src="@images/img_person2.jpg" class="w-50 align-self-center" alt="Employee 1">
          <p class="name">Scarlett Hawkins</p>
          <p class="post">Senior Vice President</p>
          <p class="feedback">My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I
            enjoy with all my heart</p>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <img src="@images/img_person3.jpg" class="w-50 align-self-center" alt="Employee 1">
          <p class="name">Max Henry</p>
          <p class="post">Chief Design Officer</p>
          <p class="feedback">When my lovely valley of steam rises and half-day sun is above an impermeable</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
.testimonials {
  font-weight: 400;
  .name {
    color: var(--Blue, #0075FF);
    font-size: 24px;
    font-weight: 700;
    margin-top: 2rem;
  }
  .post {
    color: #9FADC2;
    font-size: 14px;
    font-weight: 400;
  }
  .feedback {
    color: #3E3E3E;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>