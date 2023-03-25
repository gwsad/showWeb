<template>
  <div class="chose__bank">
    <div class="partner">
      <div class="partner__item" v-for="(item,index) in partnerList" :key="index">{{ zhTransform(item) }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
const partnerList = ref(['1111','2222','3333'])
</script>
<style lang="scss" >
.chose__bank{
  background: #f8fbff;
  padding-top: 3rem;
  .partner{
    padding: 0 3rem;
    margin: 0 auto;
    background: #fff;
  }
  .partner__item{
    color: #233762;
    height: 9.3rem;
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  }
}
</style>
