<template>
  <div class="orderList">
    <img class="orderList__bg" :src="orderBg" alt="">
    <div class="orderList__tab">
      <div class="orderList__tab__item" v-for="(item,index) in tabList" :key="index" @click="onChoseTab(item.value)">
        <div :class="{ 'tab-chose': tab === item.value }">{{ zhTransform(item.name) }}</div>
        <img v-if="tab === item.value" :src="tabChose" alt="">
      </div>
    </div>
    <div class="orderList__body" v-if="cardList.length !== 0">
      <div class="orderList__body__item" v-for="(item,index) in cardList" :key="index">
        <div class="orderList__body__item__info">
          <div>{{ zhTransform(item.cardName) }}</div>
          <div>{{ zhTransform(item.updatedAt) }}</div>
        </div>
        <div class="orderList__body__item__desc">
          <div>{{ zhTransform('HK$' + ( item.facevalue * ( item.discount / 100 ) * item.cardInfos.length )) }}</div>
          <div class="orderList__body__item__desc__common" :class="{'orderList__body__item__desc__finished': item.status !== 1}">{{ zhTransform(item.status === 1 ? '处理中' : '已完成') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onBeforeMount} from "vue";
import {zhTransform}  from '@/utils'
import orderBg from '@/assets/order-bg.png'
import tabChose from '@/assets/table-chose.png'
import { getOrderList } from '@/api/home'

const tabList = ref([
  { name: '全部订单', value: 0 },
  { name: '正在处理', value: 1 },
  { name: '处理完成', value: 2 }
])
const cardList = ref([])
const tab = ref(0)
const onChoseTab = (value: number) => {
  tab.value = value
  getOrderListFn()
}

onBeforeMount(()=>{
  getOrderListFn()
})

// 获取订单列表
const getOrderListFn = async () => {
  try {
    const res = await getOrderList(tab.value)
    cardList.value = res.data
  } catch (error) {
    return false
  }
}

</script>
<style lang="scss" scoped>
.orderList{
  padding-top: 26rem;
  min-height: 100vh;
  box-sizing: border-box;
  .orderList__bg{
    width: 75rem;
    height: 18.2rem;
    position: fixed;
    top: 0;
  }
  .orderList__tab{
    width: 70.2rem;
    height: 11.7rem;
    display: flex;
    top: 12rem;
    left: 0;
    right: 0;
    justify-content: space-between;
    margin: 0 auto;
    background: #fff;
    position: fixed;
    z-index: 2;
    padding: 3.4rem 5.9rem 3.2rem;
    box-sizing: border-box;
    border-radius: 1.8rem;
    .orderList__tab__item{
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
  .orderList__body{
    width: 70.2rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 1.8rem;
    padding: 3.4rem 5.9rem 3.2rem;
    box-sizing: border-box;
    .orderList__body__item{
      height: 14.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid rgba(0,0,0,0.1);
      .orderList__body__item__info{
        div:nth-of-type(1){
          font-size: 2.4rem;
          color: #233762;
        }
        div:nth-of-type(2){
          font-size: 2rem;
          color: #7D8899;
          margin-top: 1.2rem;
        }
      }
      .orderList__body__item__desc{
        text-align: center;
        div:nth-of-type(1){
          font-size: 2rem;
          color: #FB1639;
        }
        .orderList__body__item__desc__common{
          font-size: 2rem;
          margin-top: 1.2rem;
          padding: 0.2rem 1.9rem;
          background: #D7FFDB;
          color: #07BF03;
          border-radius: 0.6rem;
        }
        .orderList__body__item__desc__finished{
          background: #B0B7C1;
          color: #FFFFFF;
        }
      }
    }
    .orderList__body__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
