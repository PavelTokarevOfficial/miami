<template>
  <section class="intro" id="intro">
    <div class="container vh-100 d-flex flex-column justify-content-between pt-3 pb-5">
      <div class="row w-100">
        <header class="d-flex justify-content-between align-items-center">
          <div>
            <button @click="openModal" class="btn_menu"></button>
            <modal ref="modal"></modal>
          </div>
          <img src="@images/logo.svg" alt="logo">
          <div class="phone-icon">
            <a href="tel:+1 234 555-55-55"><img src="@icon/icon_call.svg" alt="icon_call"></a>
            <span class="phone-number">+1 234 555-55-55</span>
          </div>
        </header>
      </div>
      <div class="row">
        <h1 class="display-1">
          Miami<br>Condo Kings
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from '@components/Menu.vue';
export default {
  components: {
    Modal,
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    }
  }
};
</script>

<style scoped lang="scss">
.intro {
  width: 100%;
  height: 100vh;
  background: url("@images/img_pier.jpg") no-repeat center center/cover;
  .btn_menu{
    background: url("@icon/icon_menu.svg") no-repeat center center/cover;
    width: 32px;
    height: 32px;
    border: none;
    transition: 0.5s;
    &:hover{
      background: url("@icon/icon_menu_hover.svg") no-repeat center center/cover;
    }
  }
  .phone-icon {
    position: relative;
    display: inline-block;
    .phone-number {
      display: none;
      position: absolute;
      width: 150px;
      right: 30px;
      top: 0;
      color: #fff;
      text-decoration: none;
    }
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
    &:before {
      content: "";
      display: block;
      width: 4%;
      border-top: 2px solid #FFF;
      margin-top: 10px;
    }
  }
}
</style>