<template>
  <section class="contact_us" id="contact_us">
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
</template>

<script>
import MyButton from "@ui/MyButton.vue";
export default {
  components: {
    MyButton
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
    },
  }
}
</script>

<style scoped lang="scss">
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
</style>