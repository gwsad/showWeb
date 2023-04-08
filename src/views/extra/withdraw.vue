<template>
  <div class="withdraw common-page">
    <img class="withdraw__bg" :src="withdrawBg" alt="">
    <div class="withdraw__body">
      <p>{{ zhTransform('可提现金额') }}</p>
      <p class="withdraw__cash">{{ zhTransform(userInfo.cash.extend.total + '')}}</p>
      <div class="withdraw__detail" @click="onDetail">
        <div>{{ zhTransform(`推广收益 +${userInfo.cash.extend.total} 明细`) }}</div>
        <img :src="more" alt="">
      </div>
      <div class="withdraw__money easy__page">
        <div class="withdraw__money__title">{{ zhTransform('提现金额(HK$)') }}</div>
        <div class="withdraw__money__item">
          <field :placeholder="userInfo.cashTotal" v-model="withdrawInfo.cashMoney" />
          <div class="withdraw__money__item__one" @click="onCash">{{ zhTransform('全部提现') }}</div>
        </div>
        <!-- <div class="withdraw__money__item">
          <field :placeholder="zhTransform('请输入交易密码')" v-model="withdrawInfo.pass" />
          <p class="withdraw__money__item__two" @click="forgetPass">{{ zhTransform('忘记密码？') }}</p>
        </div> -->
      </div>
      <div class="easy__page withdraw__option">
        <div class="withdraw__option__title">{{ zhTransform('选择到账方式') }}</div>
        <div v-if="cashInfo.type === null" class="withdraw__option__chose" @click="onChoseType">
          <div>{{ zhTransform('请选择') }}</div>
          <img class="withdraw__option__chose__more" :src="more" alt="">
        </div>
        <div v-else class="withdraw__option__item withdraw__option__USDT" @click="onChoseType(0)">
          <div class="withdraw__option__item__usdt">
            <img v-show="cashInfo.type === 'USDT'" :src="USDT" alt="">
            <img v-show="cashInfo.type === '银行卡'" :src="Bank" alt="">
            <img v-show="cashInfo.type === '支付宝'" :src="ZFB" alt="">
            <div>
              <div>{{ zhTransform( cashInfo.name || cashInfo.card || cashInfo.accountName ) }}</div>
              <div>{{ zhTransform( cashInfo.address || cashInfo.bank || cashInfo.account ) }}</div>
            </div>
          </div>
          <img class="withdraw__option__chose__more" :src="more" alt="">
        </div>
      </div>
      <div class="easy__page withdraw__tips">
        <p v-for="(item,index) in tipsList" :key="index">{{ zhTransform(item) }}</p>
      </div>
    </div>
    <div class="common-btn">
      <div @click="onConfirm">{{ zhTransform('立即提现') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,computed,onMounted,onUnmounted} from "vue";
import {zhTransform}  from '@/utils'
import {Field,showToast} from 'vant'
import { useRouter } from "vue-router";
import withdrawBg from '@/assets/withdraw-bg.png'
import more from '@/assets/project-more.png'
import USDT from '@/assets/USDT.png'
import Bank from '@/assets/bank.png'
import ZFB from '@/assets/ZFB.png'
import { useUserStoreHook } from '@/store/modules/user'
import { withdraw } from '@/api/home'
const router = useRouter()
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});
const cashInfo = computed(() => {
  return useUserStoreHook().cashInfo || {};
})

// 提现信息
const withdrawInfo = ref({cashMoney: null});
const tipsList = ref([
  '*最低提现1.00元 单笔提现不能超过10000.00元',
  '*单卡每日限额20000.00元'
])
onMounted(() => {
  withdrawInfo.value.cashMoney = JSON.parse(window.localStorage.getItem('cash') || 'null')
})
onUnmounted(() => {
  window.localStorage.setItem('cash',JSON.stringify(null))
  useUserStoreHook().setCashInfo({type:null})
})

// 全部提现
const onCash = () => {
  withdrawInfo.value.cashMoney = userInfo.value.cashTotal
}

const onConfirm = async() => {
  let _cashInfo:any = JSON.parse(JSON.stringify(cashInfo.value))
  if( !withdrawInfo.value.cashMoney ){
    return showToast('请输入提现金额')
  }
  if( _cashInfo.type === null ){
    return showToast('请选择到账方式')
  }
  if( Number(withdrawInfo.value.cashMoney) < 1 ){
    return showToast('提现金额不能小于1')
  }
  if( Number(withdrawInfo.value.cashMoney) > 20000 ){
    return showToast('提现金额不能大于20000')
  }
  if( Number(withdrawInfo.value.cashMoney) > userInfo.value.cashTotal ){
    return showToast('提现金额不能大于可提现金额')
  }
  try {
    let _data = {cash: Number(withdrawInfo.value.cashMoney)}
    _data = _cashInfo.type === 'USDT' ? Object.assign(_data,{accountInfo:{usdt: _cashInfo}}) : _cashInfo.type === '银行卡' ? Object.assign(_data,{accountInfo:{bank: _cashInfo}}) : Object.assign(_data,{accountInfo: {alipay: _cashInfo}});
    const _res = JSON.parse(JSON.stringify(_data))
    console.log('_res',_res)
    _cashInfo.type === 'USDT' && delete _res.accountInfo.usdt.type
    _cashInfo.type === '银行卡' && delete _res.accountInfo.bank.type
    _cashInfo.type === '支付宝' && delete _res.accountInfo.alipay.type
    await withdraw(_res)
    showToast('提现成功')
    withdrawInfo.value.cashMoney = null
    window.localStorage.setItem('cash',JSON.stringify(null))
    useUserStoreHook().setCashInfo({type:null})
    router.go(-1)
  } catch (error) {
    console.log(error)
    return false
  }
}
// 查看收益明细
const onDetail = () => {
  router.push('/promotionDetails')
}

// 选择到账方式
const onChoseType = () => {
  router.push('/accountOption')
  window.localStorage.setItem('cash',JSON.stringify(withdrawInfo.value.cashMoney))
}
// 忘记密码
const forgetPass = () => {
  router.push('/setPassword')
}
</script>
<style lang="scss" >
.withdraw{
  padding: 3rem;
  box-sizing: border-box;
  .withdraw__bg{
    width: 75rem;
    height: 28rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .withdraw__body{
    position: relative;
    z-index: 1;
  }
  p{
    margin: 0;
    color: #fff;
  }
  p:nth-of-type(1){
    font-size: 2rem;
  }
  .withdraw__cash{
    font-size: 4.4rem;
    line-height: 5.3rem;
    color: #fff;
    margin: 1.2rem 0 1.7rem;
  }
  .withdraw__detail{
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: #fff;
    img{
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  .withdraw__money{
    margin-top: 2.4rem;
    .withdraw__money__title{
      height: 8.8rem;
      line-height: 8.8rem;
      font-size: 2.4rem;
      color: #233762;
      margin-bottom: 1.2rem;
    }
    .withdraw__money__item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 8.8rem;
      .withdraw__money__item__one{
        position: absolute;
        right: 0;
        width: 11.9rem;
        height: 3.2rem;
        line-height: 3.2rem;
        border: 1px solid #FB1639;
        font-size: 1.8rem;
        text-align: center;
        border-radius: 3.2rem;
        color: #FB1639;
      }
      p{
        position: absolute;
        right: 0;
        color: #BDC3CF;
      }
      .van-field__control{
        height: 8.8rem;
      }
    }

  }
  .withdraw__option{
    margin-top: 2rem;
    .withdraw__option__title{
      margin-bottom: 2rem;
    }
    .withdraw__option__item{
      height: 8.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .withdraw__option__item__usdt{
        display: flex;
        align-items: center;
        img{
          width: 6.4rem;
          height: 6.4rem;
          margin-right: 2.4rem;
        }
        &>span{
          font-size: 3rem;
          color: #233762;
        }
      }
    }
    .withdraw__option__Bank{
      margin-top: 1rem;
    }
    .withdraw__option__item__bank__img{
      width: 63.4rem;
      height: 4rem !important;
    }
    .withdraw__option__btn{
      width: 64.2rem;
      height: 7.8rem;
      border-radius: 0.8rem;
      line-height: 7.8rem;
      text-align: center;
      font-size: 2.4rem;
      color: #233762;
      background: #DEE1E7;
      margin-top: 3.4rem;
    }
  }
  .withdraw__option__item__bank{
      div:nth-of-type(1){
        font-size: 2.4rem;
        color: #233762;
        line-height: 2.9rem;
        margin-bottom: 0.8rem;
      }
      div:nth-of-type(2){
        font-size: 2rem;
        color: #BDC3CF;
      }
    }
    .withdraw__option__item__bank-tips{
      padding: 0.4rem 0.8rem;
      border: 1px solid #FB1639;
      background: rgba(251, 22, 57, 0.1);
      border-radius: 0.6rem;
      font-size: 1.8rem;
      margin-left: 1rem;
      box-sizing: border-box;

    }
    .withdraw__option__chose{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>div{
        color: #233762;
      }

    }
  .withdraw__tips{
    margin-top: 2.4rem;
    p{
      font-size: 2rem;
      color: #FE6F00;
      line-height: 2.4rem;
      margin-bottom: 2rem;
    }
  }
  .van-field{
    padding: 0;
  }
  .withdraw__option__chose__more{
    width: 3.2rem;
    height: 3.2rem;
  }
}
</style>
