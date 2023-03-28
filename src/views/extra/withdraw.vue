<template>
  <div class="withdraw common-page">
    <img class="withdraw__bg" :src="withdrawBg" alt="">
    <div class="withdraw__body">
      <p>{{ zhTransform('可提现金额') }}</p>
      <p class="withdraw__cash">{{ zhTransform('0.00') }}</p>
      <div class="withdraw__detail" @click="onDetail">
        <div>{{ zhTransform('推广收益 +0.00 明细') }}</div>
        <img :src="more" alt="">
      </div>
      <div class="withdraw__money easy__page">
        <div class="withdraw__money__title">{{ zhTransform('提现金额(HK$)') }}</div>
        <div class="withdraw__money__item">
          <field />
          <div class="withdraw__money__item__one">{{ zhTransform('全部提现') }}</div>
        </div>
        <div class="withdraw__money__item">
          <field :placeholder="zhTransform('请输入交易密码')" />
          <p class="withdraw__money__item__two" @click="forgetPass">{{ zhTransform('忘记密码？') }}</p>
        </div>
      </div>
      <div class="easy__page withdraw__option">
        <div class="withdraw__option__title">{{ zhTransform('选择到账方式') }}</div>
        <!-- USDT -->
        <!-- <div class="withdraw__option__item withdraw__option__USDT" @click="onChoseType(0)">
          <div class="withdraw__option__item__usdt">
            <img :src="USDT" alt="">
            <span>{{ zhTransform('USDT') }}</span>
          </div>
          <choseIcon :value="choseType === 0" />
        </div> -->
        <!-- 银行卡 -->
        <!-- <div class="withdraw__option__item withdraw__option__Bank" @click="onChoseType(1)">
          <div class="withdraw__option__item__usdt">
            <img class="withdraw__option__item__bank__img" :src="Bank" alt="">
            <div v-if="true" class="withdraw__option__item__bank">
              <div>{{ zhTransform('银行卡') }}<span class="withdraw__option__item__bank-tips">{{ zhTransform('请先设置提款银行卡') }}</span></div>
              <div>{{ zhTransform('单笔5000元，每日限额2万元(实时到账)') }}</div>
            </div>
          </div>
          <choseIcon :value="choseType === 1" />
        </div>
        <div class="withdraw__option__btn" @click="onAddBank(true)">{{ zhTransform(`+添加${choseType === 0 ? 'USDT': '银行卡'}`) }}</div> -->
        <div class="withdraw__option__chose" @click="onChoseType">
          <div>{{ zhTransform('请选择') }}</div>
          <img class="withdraw__option__chose__more" :src="more" alt="">
        </div>
      </div>
      <div class="easy__page withdraw__tips">
        <p v-for="(item,index) in tipsList" :key="index">{{ zhTransform(item) }}</p>
      </div>
    </div>
    <AddBank :show="addOpen" @onConfirm="onConfirm" @onCancel="onCancel" />
    <div class="common-btn">
      <div>{{ zhTransform('立即提现') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import {Field} from 'vant'
import { useRouter } from "vue-router";
import choseIcon from '@/components/choseIcon.vue'
import withdrawBg from '@/assets/withdraw-bg.png'
import more from '@/assets/project-more.png'
import USDT from '@/assets/USDT.png'
import Bank from '@/assets/bank.png'
import AddBank from '@/components/addBank.vue'
const router = useRouter()
const choseType = ref(0)
const addOpen = ref(false)
const tipsList = ref([
  '*最低提现1.00元 单笔提现不能超过10000.00元',
  '*单卡每日限额20000.00元',
  '*同一用户单日首飞次数限制10次，超过显示提现失败，第二天可继续提现'
])
// const onChoseType = (type: number) => {
//   choseType.value = type
// }
// const onAddBank = (type: boolean) => {
//   addOpen.value = type
// }
const onConfirm = (data:any) => {
  console.log(data)
  addOpen.value = false
}
const onCancel = () => {
  addOpen.value = false
}
// 查看收益明细
const onDetail = () => {
  router.push('/promotionDetails')
}

// 选择到账方式
const onChoseType = () => {
  router.push('/accountOption')
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
      .withdraw__option__chose__more{
        width: 3.2rem;
        height: 3.2rem;
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
}
</style>
