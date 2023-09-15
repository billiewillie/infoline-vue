<template>
  <div class="icon-doc">
    <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 665">
        <path id="Vector"
              d="M33 11.3539V37.3976C33 38.2835 32.256 39 31.3361 39H5.66393C4.74402 39 4 38.2835 4 37.3976V2.60241C4 1.71651 4.74402 1 5.66393 1H22.2486L33 11.3539Z"
              fill="white" stroke="#2B365A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M32.5 11H23.7024C22.7612 11 22 10.308 22 9.45235V1" stroke="#2B365A" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M36 18H1V32H36V18Z" fill="white" stroke="#2B365A" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path id="Vector_4" d="M36 18L33 15" stroke="#2B365A" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path id="Vector_5" d="M1 32L4 35" stroke="#2B365A" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </g>
    </svg>
    <span>{{ props.ext }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  ext: {
    type: String,
    default: '',
  }
})
</script>

<style scoped>
.icon-doc {
  position: relative;
}

svg {
  width: 35px;
  height: 38px;
}

span {
  position: absolute;
  width: 100%;
  top: 19px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 9px;
  line-height: 1;
  font-weight: 900;
  color: var(--blue-dark);
}
</style>