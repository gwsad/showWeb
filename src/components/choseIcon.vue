<template>
  <div class="chose__icon" :class="{ 'chose__icon-chose': value }">
    <img :src="chose" alt="">
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";
import chose from '@/assets/chose-icon.png'
const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.chose__icon{
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #C9CED8;
  border-radius: 50%;
  img{
    width: 2.2rem;
    height: 1.7rem;
  }
}
.chose__icon-chose{
  background: #FB1639;
}
</style>
