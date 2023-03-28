<template>
  <div class="chose__bank">
    <div class="partner">
      <div class="partner__item" v-for="(item,index) in partnerList" :key="index">{{ zhTransform(item.nickname) }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue";
import {zhTransform}  from '@/utils'
import { getMyPartner } from '@/api/home'
const partnerList = ref([])
onMounted(() => {
  getMyPartner().then(res => {
    partnerList.value = res.data
  })
})
</script>
<style lang="scss" >
.chose__bank{
  background: #f8fbff;
  padding-top: 3rem;
  min-height: 100vh;
  box-sizing: border-box;
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
  .partner__item:last-child{
    border-bottom: none;
  }
}
</style>
