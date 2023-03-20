<template>
  <div class="mine">
    <div class="mine__info">
      <img class="mine__info-bg" :src="mineBg" alt="">
      <div class="mine__info-head">
        <div class="flex">
          <img class="mine__info-head__logo" :src="logo" alt="">
          <div class="mine__info-head__info">
            <div>{{ zhTransform('123') }}</div>
            <div>{{ zhTransform('专业的卡劵寄售平台') }}</div>
          </div>
        </div>
      </div>
      <div class="mine__info-head__list flex">
          <div v-for="(item,index) in hearList" :key="index">
            <img :src="item.url" alt="">
            <div>{{ item.title }}</div>
          </div>
        </div>
    </div>
    <div class="mine__account flex-space">
      <div class="mine__account__info flex">
        <img :src="saveMoney" alt="">
        <span>{{ zhTransform('账户金额：') }}</span>
        <span class="mine__account__info-special">100.00</span>
      </div>
      <div class="mine__account__withdraw flex-space">
        <span>{{ zhTransform('我要提现') }}</span>
        <img :src="more" alt="">
      </div>
    </div>
    <div class="mine__setting mine__card">
      <div class="mine__card-title">{{ zhTransform('账户设置') }}</div>
      <div class="flex" style="flex-wrap: wrap;">
        <div class="mine__setting__item" v-for="(item,index) in settingList" :key="index" @click="onSetGo(item)">
          <span>{{ zhTransform(item) }}</span>
          <img :src="more" alt="">
        </div>
      </div>
    </div>
    <div class="mine__more mine__card">
      <div class="mine__card-title">{{ zhTransform('更多功能') }}</div>
      <div class="mine__more__list flex-space" v-for="(item,index) in moreList" :key="index">
        <span>{{ item }}</span>
        <img :src="more" alt="">
      </div>
    </div>
  </div>
</template>
<script lang="ts" >
import {defineComponent, ref} from "vue";
import {zhTransform}  from '@/utils'
import { useRouter } from "vue-router"
import mineBg from '../../assets/mine-bg.png'
import logo from '../../assets/project-logo.png'
import sell from '../../assets/mine/mine-sell.png'
import sellRecord from '../../assets/mine/mine-sell-record.png'
import withdraw from '../../assets/mine/mine-withdraw.png'
import withdrawRecord from '../../assets/mine/mine-withdraw-record.png'
import saveMoney from '../../assets/mine/mine-save-money.png'
import more from '../../assets/project-more.png'

export default defineComponent({
  components: {

  },
  setup() {
    const router = useRouter()
    const hearList = ref([
      {url: sell, title: zhTransform('我要卖卡')},
      {url: sellRecord, title: zhTransform('卖卡记录')},
      {url: withdraw, title: zhTransform('我要提现')},
      {url: withdrawRecord, title: zhTransform('提现记录')},
    ])
    const settingList = ref(['账号设置','实名认证','系统消息','常见问题','我的伙伴','分佣说明'])
    const moreList = ref([
      zhTransform('我的分享码'),
      zhTransform('1分钟了解回收说明'),
      zhTransform('联系我们')
    ])
    const onSetGo = (title) => {
      switch (title) {
        case '账号设置':
          router.push('/setAccount')
          break;
        case '系统消息':
          router.push('/systemInfo')
          break;
        default:
          break;
      }
    }
    return {
      mineBg,
      logo,
      saveMoney,
      hearList,
      more,
      settingList,
      moreList,
      zhTransform,
      onSetGo
    }
  },
})
</script>
<style lang="scss" scoped>
.mine{
  .mine__info{
    position: relative;
    z-index: 1;
    .mine__info-bg{
      width: 75rem;
      height: 36.4rem;
      position: relative;
    }
    .mine__info-head{
      position: absolute;
      top: 5rem;
      left: 2rem;
      .mine__info-head__logo{
        width: 12.8rem;
        height: 12.8rem;
        border-radius: 50%;
        margin-right: 2rem;
      }
      .mine__info-head__info{
        color: #FFFFFF;
        text-align: left;
        div:nth-of-type(1){
          font-size: 3rem;
        }
        div:nth-of-type(2){
          font-size: 2rem;
        }
      }
    }
    .mine__info-head__list{
      width: 61rem;
      margin: 0 auto;
      justify-content: space-between;
      position: absolute;
      top: 21.6rem;
      left: 8.2rem;
      img{
        width: 6.4rem;
        height: 6.4rem;
      }
      div{
        font-size: 2rem;
        color: #FFFFFF;
      }
    }
  }
  .mine__account{
    position: absolute;
    left: 2.4rem;
    top: 33.4rem;
    width: 70.2rem;
    height: 8.8rem;
    border-radius: 1.8rem;
    z-index: 2;
    background: #FFFFFF;
    padding: 2.8rem 3rem;
    box-sizing: border-box;
    img{
      width: 3.2rem;
      height: 3.2rem;
      margin-right: 1rem;
    }
    .mine__account__info{
      color: #7D8899;
      font-size: 2rem;
      .mine__account__info-special{
        font-size: 3rem;
        color: #233762;
        font-weight: normal;
      }
    }
    .mine__account__withdraw{
      span{
        color: #7D8899;
      }
      img{
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 0;
        margin-left: 0.8rem;
      }
    }
  }
  .mine__card{
    width: 70.2rem;
    margin: 0 auto;
    padding: 3rem 3rem 0;
    border-radius: 1.8rem;
    background: #FFFFFF;
    box-sizing: border-box;
    .mine__card-title{
      width: 64.2rem;
      font-size: 2.4rem;
      color: #233762;
      text-align: left;
      padding-bottom: 2.9rem;
    }
  }
  .mine__setting{
    margin-top: 9.4rem;
    .mine__setting__item{
      width: 32rem;
      height: 8.8rem;
      border-top: 0.1rem solid rgba(0,0,0,0.2);
      border-right: 0.1rem solid rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 3.2rem;
        height: 3.2rem;
      }
    }
    .mine__setting__item:nth-of-type(n){
      box-sizing: border-box;
    }
    .mine__setting__item:nth-of-type(2n+1){
      padding-right: 2.9rem;
    }
    .mine__setting__item:nth-of-type(2n){
      margin-top: -0.1rem;
      border-right: none;
      padding-left: 2.9rem;
      box-sizing: border-box;
    }
  }
  .mine__more{
    margin-top: 3rem;
    .mine__more__list{
      border-top: 0.1rem solid rgba(0,0,0,0.2);
      height: 8.8rem;
      img{
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
}

</style>
