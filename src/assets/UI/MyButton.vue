<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Primary', // По умолчанию используется Primary стиль
      validator: value => ['Primary', 'Secondary'].includes(value)
    }
  },
  computed: {
    buttonClass() {
      return `button btn_${this.type.toLowerCase()}`;
    }
  }
};
</script>


<style scoped lang="scss">
.button{
  padding: 15px 40px;
  border-radius: 8px;
  border: 2px solid #0075FF;
  transition: .5s;
}
.btn_secondary{
  background-color: #FFFFFF;
  color: #0075FF;
}
.btn_primary{
  background-color: #0075FF;
  color: #FFFFFF;
}
.btn_secondary:hover,
.btn_primary:hover{
  background-color: #005ECC;
  border: 2px solid #005ECC;
  color: #FFFFFF;
  box-shadow: 0px 13px 27px 0px rgba(0, 83, 181, 0.46);
}
</style>