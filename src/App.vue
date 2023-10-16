<!--suppress ALL -->
<template>
  <section class="intro">
    <div class="container vh-100 d-flex flex-column justify-content-between pt-3 pb-5">
      <row class="w-100">
        <header class="d-flex justify-content-between align-items-center">
          <button class="button_menu">меню 123</button>
          <img src="@images/logo.svg">
          <div class="phone-icon">
            <a href="tel:+1 234 555-55-55"><img src="@icon/icon_call.svg"></a>
            <span class="phone-number">+1 234 555-55-55</span>
          </div>
        </header>
      </row>
      <row>
        <h1 class="display-1">
          Miami<br>Condo Kings
        </h1>
      </row>
    </div>
  </section>

  <section class="real_estate mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h2 class="display-4">
            Miami best <br>
            Real estate <span>here</span>
          </h2>
        </div>
        <div class="col-12 col-md-6">
          <h3 class="mt-4 mt-md-0">
            Over 50 years experience in love.
          </h3>
          <p>
            Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the music of
            the early twentieth century, microforms, found a distant historical.
            <br><br>
            The market leader in real estate since 2003. Awards Real Estate Company, 2010, 2011, 2013. More than 200
            satisfied customers premium segment. We focus only on new buildings and high-level doskanalno know this area
            better than other specialists.
            Working directly with developers - so have more useful information about the profitable deals.
            <br><br>
            <b>
              We will never be late!<br>
              Guaranteed secure transaction - 100%
            </b>
          </p>
        </div>
      </div>
    </div>
  </section>


  <section class="gallery">
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

  <section class="testimonials">
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

  <section class="contact_us">
    <h2 class="section_headers">Contact us</h2>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12 col-md-6">
              <p><span>Телефон:</span><br><a href="tel:+1 234 5555-55-55">+1 234 5555-55-55</a></p>
              <p><span>Email:</span><br><a href="mailto:hello@miami.com">hello@miami.com</a></p>
            </div>
            <div class="col-12 col-md-6">
              <address>
                <p><span>Адрес:</span><br>400 first ave. n. suite 700 Minneapolis, MN 55401</p>
              </address>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-5">
          <form>
            <input type="text" class="form-control mb-3" v-model="name" placeholder="Name">
            <input type="email" class="form-control mb-3" v-model="email" placeholder="Email">
            <textarea class="form-control mb-3" v-model="message" rows="3" placeholder="Message"></textarea>
            <my-button type="Primary" class="w-100" @click="submitForm">Consultation</my-button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="footer d-flex align-items-end justify-content-center">
    <img src="@images/logo.svg" class="mb-3">
  </section>
</template>

<script>
import MyButton from '@ui/MyButton.vue';

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      const alertMessage = `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`;
      alert(alertMessage);
    }
  }
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

//<-- intro -->

.intro {
  width: 100%;
  height: 100vh;
  background: url("@images/img_pier.jpg") no-repeat center center/cover;

  .phone-icon {
    position: relative;
    display: inline-block;
  }

  .phone-icon .phone-number {
    display: none;
    position: absolute;
    width: 150px;
    right: 30px;
    top: 0;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    .phone-icon .phone-number {
      right: -20px;
      top: 70px;
    }
  }

  .phone-icon:hover .phone-number {
    display: block;
  }

  h1 {
    color: #FFF;
    font-weight: 700;
  }

  h1:before {
    content: "";
    display: block;
    width: 4%;
    border-top: 2px solid #FFF;
    margin-top: 10px;
  }
}

//<-- real_estate -->

.real_estate {
  h2 {
    font-weight: 700;
    letter-spacing: -1.5px;
  }

  span, h3 {
    color: #0075FF
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 27px;

    b {
      font-weight: 700;
    }
  }
}

//<-- gallery -->

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

//<-- testimonials -->

.testimonials {
  font-weight: 400;
  .name {
    color: var(--Blue, #0075FF);
    font-size: 24px;
    font-weight: 700;
    margin-top: 2rem;
  }
  .post{
    color: #9FADC2;
    font-size: 14px;
    font-weight: 400;
  }
  .feedback{
    color:#3E3E3E;
    font-size: 16px;
    font-weight: 400;
  }
}

//<-- Contact us -->

.contact_us {
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
    a {
      text-decoration: none;
      color: #3E3E3E;
      font-weight: 400;
    }
    span {
      color: #9FADC2;
      font-weight: 400;
    }
  }
}

//<-- footer -->

.footer {
  width: 100%;
  height: 44vh;
  background: url("@images/img_city_panorama.jpg") no-repeat center center/cover;
}
</style>
