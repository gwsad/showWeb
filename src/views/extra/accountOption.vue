<template>
  <div class="coupons option">
    <div class="coupons__tab">
      <div class="coupons__tab__item" v-for="(item,index) in tabList" :key="index" @click="onChoseTab(item.value,item._id)">
        <div :class="{ 'tab-chose': tab === item.value }">{{ zhTransform(item.name) }}</div>
        <img v-if="tab === item.value" :src="tabChose" alt="">
      </div>
    </div>
    <div class="option__body">
      <div class="option__body__item" v-for="(item,index) in accountList" :key="index" @click="onChoseAccount(index)">
        <div>{{ zhTransform(item.name) }}</div>
        <div>{{ item.value }}</div>
      </div>
    </div>
    <div class="common-btn" @click="onDialog(true)">
      <div>{{ zhTransform('添加账户') }}</div>
    </div>
    <AddUSDT :show="addOpen && tab === 1"  @onConfirm="onConfirmUsdt" @onCancel="onDialog(false)" />
    <AddBank :show="addOpen && tab === 2" @onConfirm="onConfirm" @onCancel="onDialog(false)" />
    <AddZFB :show="addOpen && tab === 3" @onConfirm="onConfirmZFB" @onCancel="onDialog(false)" />
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue";
import { useRouter } from "vue-router"
import {zhTransform}  from '@/utils'
import tabChose from '@/assets/table-chose.png'
import choseIcon from '@/components/choseIcon.vue'
import { getCouponInfo } from '@/api/home'
import AddBank from '@/components/addBank.vue'
import AddUSDT from '@/components/addUsdt.vue'
import AddZFB from '@/components/addZFB.vue'
const router = useRouter()
const tab = ref(1)
const account = ref(null)
const addOpen = ref(0) // 添加银行账户弹窗
const tabList = ref([
  {name: 'USDT账户',value:1},
  {name: '银行卡账户',value:2},
  {name: '支付宝账户',value:3}
])
const accountList = ref([
  {name: 'ERC20',value:1},
  {name: 'TRC20',value:1},
  {name: '中国银行',value:1},
  {name: '台湾银行',value:1}
])
const onChoseTab = (value: number,id) => {
  tab.value = value
  account.value = null
}
const onChoseAccount = (index: number) => {
  account.value = index
  router.go(-1)
}
const onDialog = (value:boolean) => {
  addOpen.value = value
}

// 添加银行卡
const onConfirm = (value: any) => {
  console.log(value)
  onDialog(false)
}
// 添加USDT
const onConfirmUsdt = (value: any) => {
  console.log(value)
  onDialog(false)
}
// 添加支付宝
const onConfirmZFB = (value: any) => {
  console.log(value)
  onDialog(false)
}
// const getTabData = async (id: string) => {
// }

</script>
<style lang="scss" scoped>
.coupons{
  min-height: 100vh;
  background: #f8fbff;
  .coupons__tab{
    width: 100%;
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
      width: 50%;
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
  .option__body{
    margin-top: 3rem;
    padding: 0 3rem;
    background: #fff;
    .option__body__item{
      width: 100%;
      height: 14.8rem;
      border-radius: 1.8rem;
      padding: 3.4rem 0 3.2rem;
      box-sizing: border-box;
      border-bottom: 0.1rem solid rgba(0,0,0,0.1);
      font-size: 2.4rem;
      color: #233762;
      line-height: 2.9rem;
      div:last-child{
        font-size: 2rem;
        line-height: 2.4rem;
        color: #7D8899;
        margin-top: 1.2rem;
      }
    }
  }
}
</style>
