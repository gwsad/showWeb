<template>
  <div class="orderList">
    <div class="orderList__tab">
      <div class="orderList__tab__item" v-for="(item,index) in tabList" :key="index" @click="onChoseTab(item.value)">
        <div :class="{ 'tab-chose': tab === item.value }">{{ zhTransform(item.name) }}</div>
        <img v-if="tab === item.value" :src="tabChose" alt="">
      </div>
    </div>
    <div class="orderList__body">
      <div class="orderList__body__item" v-for="(item,index) in cardList" :key="index">
        <div class="orderList__body__item__info">
          <div>{{ zhTransform(item.accountInfo?.usdt?.name || item.accountInfo?.bank?.card || item.accountInfo?.alipay?.accountName) }} - {{ `${item.amount}HK$` }}</div>
          <div>{{ zhTransform(item.createdAt || '') }}</div>
        </div>
        <div class="orderList__body__item__desc">
          <div>{{ item.price }}</div>
          <div class="orderList__body__item__desc__common" :class="{'orderList__body__item__desc__1': item.status.code === 1,'orderList__body__item__desc__2' :item.status.code === 3,'orderList__body__item__desc__3' :item.status.code === 2}">{{ zhTransform(item.status.code === 1 ? '审批中' : item.status.code === 2  ? '提现成功' : '提现失败') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue";
import {zhTransform}  from '@/utils'
import orderBg from '@/assets/order-bg.png'
import tabChose from '@/assets/table-chose.png'
import { getWithdrawList } from '@/api/home'

const tabList = ref([
  { name: '正在审批', value: 1 },
  { name: '提现成功', value: 2 },
  { name: '提现失败', value: 3 },
])
const cardList = ref([])
const tab = ref(1)
const onChoseTab = (value: number) => {
  tab.value = value
  onGetList()
}

onMounted(async()=>{
  onGetList()
})
const onGetList = async () => {
  const res = await getWithdrawList({status: tab.value})
  cardList.value = res.data
}
</script>
<style lang="scss" scoped>
.orderList{
  background: #f8fbff;
  .orderList__tab{
    width: 75rem;
    height: 11.7rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    position: relative;
    z-index: 2;
    padding: 3.4rem 5.9rem 3.2rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
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
    width: 75rem;
    margin: 14.7rem auto;
    background: #fff;
    border-radius: 1.8rem;
    padding: 0rem 5.9rem 3.2rem;
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
          font-size: 2rem;
          text-align: center;
        }
        .orderList__body__item__desc__1{
          background: #D7FFDB;
        }
        .orderList__body__item__desc__2{
          background: #FB1639;
          color: #fff;
        }
        .orderList__body__item__desc__3{
          background: #B0B7C1;
          color: #fff;
        }
      }
    }
    .orderList__body__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
