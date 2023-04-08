<template>
  <div class="coupons">
    <img class="coupons__bg" :src="orderBg" alt="">
    <div class="coupons__tab">
      <div class="coupons__tab__item" v-for="(item,index) in tabList" :key="index" @click="onChoseTab(item.order,item._id)">
        <div :class="{ 'tab-chose': tab === item.order }">{{ zhTransform(item.name) }}</div>
        <img v-if="tab === item.order" :src="tabChose" alt="">
      </div>
    </div>
    <div class="coupons__title">
      <div>
        <img :src="hot" alt="">
        <span>{{ zhTransform(tabList[tab - 1] ? tabList[tab - 1].name + '' : '') }}</span>
      </div>
      <span>{{ zhTransform(`高价回收${tabList[tab - 1] ? tabList[tab - 1].name + '' : ''}卡`) }}</span>
    </div>
    <div class="coupons__content">
      <CardList :list="cardList" @onChoseCard="onChoseCard" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue";
import { useRouter } from "vue-router"
import {zhTransform}  from '@/utils'
import orderBg from '@/assets/order-bg.png'
import tabChose from '@/assets/table-chose.png'
import hot from '@/assets/home-hot.png'
import CardList from '@/components/cardList.vue'
import { getCouponInfo } from '@/api/home'
import { useCouponCatHook } from '@/store/modules/card'
const router = useRouter()
onMounted(async () => {
  tabList.value = useCouponCatHook().couponCat
  getTabData(tabList.value[0]._id)
})
const tabList = ref([])
const cardList = ref([])
const tab = ref(1)
const onChoseTab = (value: number,id) => {
  tab.value = value
  getTabData(id)
}
const onChoseCard = (card: any) => {
  console.log(card)
  router.push({path: '/couponsSell', query: {card:card._id}})
}
const getTabData = async (id: string) => {
  const _list = await getCouponInfo(id)
  cardList.value = _list.data
}

</script>
<style lang="scss" scoped>
.coupons{
  padding-top: 26rem;
  min-height: 100vh;
  box-sizing: border-box;
  .coupons__bg{
    width: 75rem;
    height: 18.2rem;
    position: fixed;
    top: 0;
  }
  .coupons__tab{
    position: fixed;
    top: 12rem;
    left: 0;
    right: 0;
    width: 70.2rem;
    height: 11.7rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background: #fff;
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
    text-align: center;
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
