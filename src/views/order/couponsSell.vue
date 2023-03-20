<template>
  <div class="coupons-sell">
    <div class="sell-info coupons-sell__common">
      <div class="sell-info__item" v-for="(item,index) in couponsInfo" :key="index" @click="onChoseInfo(index)">
        <div>
          <span>{{ item.title }}</span>
          <div>{{ item.value }}</div>
        </div>
        <img v-if="index !== 3" :src="more" alt="">
        <div class="sell-info__item__discount" v-if="index === 3">{{ discount }}{{ zhTransform('折') }}</div>
      </div>
    </div>
    <div class="sell-illustrate coupons-sell__common">
      <span class="sell-illustrate__text">{{ zhTransform('展开') }}</span>
      <collapse v-model="illustrateStatus">
        <collapse-item name="1">
          <template #title>
            <div class="sell-illustrate__content">
              <img :src="illustrate" alt="">
              <span>{{ zhTransform('兑换说明(必阅读)') }}</span>
            </div>
          </template>
          代码是写出来给人看的，附带能在机器上运行。
        </collapse-item>
      </collapse>
    </div>
    <div class="sell-evaluate coupons-sell__common">
      <div class="sell-evaluate__head">
        <div>
          <img :src="evaluate" alt="">
          <span>{{ zhTransform(`用户评价(1544)`) }}</span>
        </div>
        <div>
          <span>{{ zhTransform('查看全部') }}</span>
          <img :src="more" alt="">
        </div>
      </div>
      <div class="sell-evaluate__content">
        <div class="sell-evaluate__content__head">
          <div>
            <img :src="logo" alt="">
            <span>{{ zhTransform('用户昵称') }}</span>
          </div>
          <span class="sell-evaluate__content__head__time">{{ zhTransform('3小时前') }}</span>
        </div>
        <div class="sell-evaluate__content__body">{{ zhTransform('1231231212') }}</div>
        <div class="sell-evaluate__content__score">
          <div v-for="(item,index) in scoreList" :key="index">
            <span>{{ zhTransform(item.title) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sell-evaluate__bottom">
      <div v-for="(item,index) in btnList" :key="index" @click="onGoPage(item.title)">
        <img :src="item.url" alt="">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="sell-evaluate__foot">
      <div>{{ zhTransform('提交出售') }}</div>
    </div>
    <action-sheet v-model:show="show" title="标题">
      <div class="content">内容</div>
    </action-sheet>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import { useRouter } from "vue-router"
import {zhTransform}  from '@/utils'
import {ActionSheet,Collapse, CollapseItem} from 'vant'
import more from '../../assets/project-more.png'
import illustrate from '../../assets/order-illustrate.png'
import evaluate from '../../assets/order-evaluate.png'
import logo from '../../assets/project-logo.png'
import step from '../../assets/sell-step.png'
import question from '../../assets/sell-question.png'
const router = useRouter()
const discount = ref(0.8)
const show = ref(false)
const illustrateStatus = ref(['0'])
const couponsInfo = ref([
  {
    title: zhTransform('选择卡类：'),value: zhTransform('电话卡')
  },
  {
    title: zhTransform('选择卡种：'),value: zhTransform('100元')
  },
  {
    title: zhTransform('选择面值：'),value: zhTransform('100元')
  },
  {
    title: zhTransform('回收价格：'),value: zhTransform('100元')
  },
])
const scoreList = ref([
  {
    title: zhTransform('客服服务'),value: 5
  },
  {
    title: zhTransform('回款速度'),value: 5
  },
  {
    title: zhTransform('回首时效'),value: 5
  },
])
const btnList = ref([
  {
    title: zhTransform('交易步骤'), url: step
  },
  {
    title: zhTransform('常见问题'), url: question
  },
])

const onChoseInfo = (index)=>{
  index !== 3 && (show.value = true)
}
const onGoPage = (title) => {
  title === zhTransform('交易步骤') && router.push('/orderStep')
}
</script>
<style lang="scss">
.coupons-sell{
  padding: 3rem;
  background: #f8fbff;
  min-height: 100vh;
  .coupons-sell__common{
    padding: 0 2rem;
    width: 69rem;
    margin: 0 auto 3rem;
    background: #fff;
    border-radius: 1.8rem;
    box-sizing: border-box;
  }
  .sell-info{
    .sell-info__item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 8.8rem;
      border-bottom: 1px solid rgba(0,0,0,.1);
      &>div{
        display: flex;
        align-items: center;
        font-size: 2rem;
        color: #7D8899;
        div{
          font-size: 2.4rem;
          color: #233762;
        }
      }
      img{
        width: 3.2rem;
        height: 3.2rem;
      }
      .sell-info__item__discount{
        background: #FFD7D7;
        font-size: 2rem;
        color: #E03323;
        padding: 0.2rem 1.35rem 0.6rem 1.45rem;
        box-sizing: border-box;
        border-radius: 0.6rem;
      }
    }
    .sell-info__item:last-child{
      border-bottom: none;
    }
  }

  .sell-illustrate{
    padding: 2.4rem;
    position: relative;
    .sell-illustrate__text{
      position: absolute;
      top: 3.4rem;
      right: 6rem;
      z-index: 2;
      color: #7D8899;
    }
    .van-hairline, .van-hairline--top, .van-hairline--left, .van-hairline--right, .van-hairline--bottom, .van-hairline--surround, .van-hairline--top-bottom{
      position: static;
    }
    .van-collapse-item__title .van-cell__right-icon:before{
      color: #BDC3CF;
      font-size: 1.2rem;
    }
    .van-cell{
      padding: 0;
      border: none;
    }
    .van-cell--clickable:active{
      background: #fff;
    }
    .van-cell:after{
      border: none;
    }
    .sell-illustrate__content{
      display: flex;
      align-items: center;
      font-size: 2.4rem;
      img{
        width: 4.8rem;
        height: 4.8rem;
        margin-right: 2.4rem;
      }
    }
  }
  .sell-evaluate{
    padding: 2.4rem;
    .sell-evaluate__head{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid rgba(0,0,0,.1);
      padding-bottom: 2rem;
      div{
        display: flex;
        align-items: center;
      }
      img{
        width: 4.8rem;
        height: 4.8rem;
      }
      div:nth-of-type(1){
        span{
          font-size: 2.4rem;
          color: #233762;
          margin-left: 2.4rem;
        }
      }
      div:nth-of-type(2){
        span{
          font-size: 2rem;
          color: #7D8899;
        }
        img{
          width: 3.2rem;
          height: 3.2rem;
          margin-left: 0.824rem;
        }
      }
    }
    .sell-evaluate__content{
      padding: 3rem 0;
      .sell-evaluate__content__head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 8.8rem;
          height: 8.8rem;
          margin-right: 2.4rem;
        }
        div:nth-of-type(1){
          display: flex;
          align-items: center;
          span{
            font-size: 2.4rem;
            color: #233762;
          }
        }
        .sell-evaluate__content__head__time{
          font-size: 2rem;
          color: #7D8899;
        }
      }
      .sell-evaluate__content__body{
        font-size: 2rem;
        color: #7D8899;
        text-align: left;
        margin: 3rem 0 3.4rem;
      }
      .sell-evaluate__content__score{
        div{
          display: flex;
          align-items: center;
          margin-bottom: 1.6rem;
          span{
            font-size: 2rem;
            color: #233762;
            margin-right: 1.6rem;
          }
          img{
            width: 3.2rem;
            height: 3.2rem;
            margin-right: 0.4rem;
          }
        }
      }
    }


  }
  .sell-evaluate__bottom{
    display: flex;
    justify-content: space-between;
    div{
      width: 33.2rem;
      height: 8.8rem;
      background: #fff;
      border-radius: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 4.8rem;
        height: 4.8rem;
        margin-right: 1rem;
      }
      span{
        font-size: 2.6rem;
        color: #233762;
      }
    }
  }
  .sell-evaluate__foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 75rem;
    height: 16rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
      width: 69rem;
      height: 10rem;
      line-height: 10rem;
      font-size: 3.2rem;
      color: #FFFFFF;
      background: linear-gradient(180deg, #42CFFF 0%, #1E9AFF 100%);
      border-radius: 10rem;
    }
  }
}
</style>
