<template>
  <div class="modal pt-3" :class="{ 'open': isOpen }" @click="closeModal">
    <div class="container">
      <div class="row pt-2 align-items-center">
        <button class="close-button col-1" @click="closeModal"></button>
        <div class="col-11 d-flex justify-content-center">
          <img src="@images/logo.svg" alt="logo">
        </div>
      </div>
      <div class="row mt-5">
        <ul class="menu">
          <li class="menu_item mt-4"><a href="#intro">Home</a></li>
          <li class="menu_item mt-4"><a href="#real_estate">About Us</a></li>
          <li class="menu_item mt-4"><a href="#gallery">gallery</a></li>
          <li class="menu_item mt-4"><a href="#testimonials">testimonials</a></li>
          <li class="menu_item mt-4"><a href="#contact_us">Contacts</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0075FF;
  z-index: 9;
  .close-button {
    //noinspection CssUnknownTarget
    background: url('@icon/icon_menu_close.svg') no-repeat center center/cover;
    width: 32px;
    height: 32px;
    border: none;
  }
  .menu_item{
    list-style-type: none;
    a{
      text-transform: uppercase;
      text-decoration: none;
      color: #FFFFFF;
      display: inline-block;
      &:hover::after{
        content: "";
        display: block;
        height: 2px;
        background-color: #FFFFFF;
      }
    }
  }
  &.open {
    display: block;
  }
}
</style>
