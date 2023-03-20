<template>
  <div class="coupons">
    <img class="coupons__bg" :src="orderBg" alt="">
    <div class="coupons__tab">
      <div class="coupons__tab__item" v-for="(item,index) in tabList" :key="index" @click="onChoseTab(item.value)">
        <div :class="{ 'tab-chose': tab === item.value }">{{ zhTransform(item.name) }}</div>
        <img v-if="tab === item.value" :src="tabChose" alt="">
      </div>
    </div>
    <div class="coupons__title">
      <div>
        <img :src="hot" alt="">
        <span>{{ zhTransform(tabList[tab].name) }}</span>
      </div>
      <span>{{ zhTransform(`高价回收${tabList[tab].name}卡`) }}</span>
    </div>
    <div class="coupons__content">
      <div class="coupons__content__item" v-for="(item,index) in cardList" :key="index">
        <img src="" alt="">
        <div>{{ item.title }}</div>
        <div class="coupons__content__item__discount">{{ item.discount }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import orderBg from '@/assets/order-bg.png'
import tabChose from '@/assets/table-chose.png'
import hot from '@/assets/home-hot.png'

const tabList = ref([
  { name: '话费', value: 0 },
  { name: '游戏', value: 1 },
  { name: '加油', value: 2 },
  { name: '电商', value: 3 }
])
const cardList = ref([
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')},
  {imgUrl: '', title: zhTransform('电商卡'), discount: zhTransform('9.5折')}
])
const tab = ref(0)
const onChoseTab = (value: number) => {
  tab.value = value
}
</script>
<style lang="scss" scoped>
.coupons{
  min-height: 100vh;
  .coupons__bg{
    width: 75rem;
    height: 18.2rem;
  }
  .coupons__tab{
    width: 70.2rem;
    height: 11.7rem;
    display: flex;
    justify-content: space-between;
    margin: -7.2rem auto 0;
    background: #fff;
    position: relative;
    z-index: 2;
    padding: 3.4rem 5.9rem 3.2rem;
    box-sizing: border-box;
    border-radius: 1.8rem;
    .coupons__tab__item{
      width: 11rem;
      text-align: center;
      font-size: 2.6rem;
      .tab-chose{
        color: #1B95FD;
      }
      img{
        width: 2.2rem;
        height: 1rem;
        margin-top: 0.8rem;
      }
    }
  }
  .coupons__title{
    width: 70.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem auto 3.9rem;
    div{
      display: flex;
      align-items: center;
      span{
        font-size: 3.2rem;
        color: #233762;
      }
    }
    img{
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 1.2rem;
    }
    span{
      font-size: 2rem;
      color: #7D8899;
    }
  }
  .coupons__content{
    width: 69rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .coupons__content__item{
      width: 21rem;
      height: 27.7rem;
      border-radius: 1.8rem;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
      padding: 3rem;
      box-sizing: border-box;
      margin-right: 3rem;
      margin-bottom: 3rem;
      img{
        width: 10.8rem;
        height: 10.8rem;
        margin-bottom: 2rem;
      }
      div{
        text-align: center;
        font-size: 2.6rem;
      }
      .coupons__content__item__discount{
        margin: 2.6rem auto 0;
        width: 12.8rem;
        height: 3.2rem;
        border-radius: 0.4rem;
        background: #FFD7D7;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .coupons__content__item:nth-child(3n){
      margin-right: 0;
    }
  }
}
</style>
