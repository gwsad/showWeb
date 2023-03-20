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
    <div class="sell-illustrate">
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
    <action-sheet v-model:show="show" title="标题">
      <div class="content">内容</div>
    </action-sheet>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import {ActionSheet,Collapse, CollapseItem} from 'vant'
import more from '../../assets/project-more.png'
import illustrate from '../../assets/order-illustrate.png'
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

const onChoseInfo = (index)=>{
  index !== 3 && (show.value = true)
}
</script>
<style lang="scss">
.coupons-sell{
  padding: 3rem;
  background: #f8fbff;
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
    background: #fff;
    .van-cell{
      padding: 0;
      border: none;
      box-sizing: none;
    }
    .van-cell--clickable:active{
      background: #fff;
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
}
</style>
