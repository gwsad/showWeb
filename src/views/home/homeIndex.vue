<template>
  <div class="home">
    <div class="home__head">
      <img src="../../assets/home-bg.png" alt="">
      <div class="home__head__big">{{ zhTransform('省心省力的卡券回收平台！') }}</div>
      <div class="home__head__small">{{ zhTransform('安全结算｜急速变现｜安全无忧｜口碑保证') }}</div>
    </div>
    <div class="home__tips">
      <span>{{ zhTransform('订单提醒：') }}</span>
      <van-swipe style="height: 17px" vertical :autoplay="2000" :duration="800" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in messageList" :key="index">{{item.text}}</van-swipe-item>
      </van-swipe>
    </div>
    <div class="home__nav">
      <div v-for="(item,index) in navList" :key="index" class="home__nav__item">
        <img :src="item.imgUrl" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
    <div class="home__transform">
      <img :src="transform" alt="">
    </div>
    <img class="home__banner" :src="homeBanner" />
    <div class="home__title">
      <img :src="homeHot" alt="">
      <span>{{ zhTransform('热门兑换') }}</span>
    </div>
    <div class="home__content">
      <div class="home__content__item" v-for="(item,index) in cardList" :key="index">
        <img src="" alt="">
        <div>{{ item.title }}</div>
        <div class="home__content__item__discount">{{ item.discount }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Swipe, SwipeItem} from 'vant';
import {defineComponent, ref} from "vue";
import {zhTransform}  from '@/utils'
import phone from '../../assets/home-phone.png'
import game from '../../assets/home-game.png'
import come from '../../assets/home-come.png'
import shop from '../../assets/home-shop.png'
import transform from '../../assets/home-transform.png'
import homeBanner from '../../assets/home-banner.png'
import homeHot from '../../assets/home-hot.png'
export default defineComponent({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const messageList = ref([
      {time: '2023-11-11',text: zhTransform('您有一笔订单已经完成，请及时查看大街上打底裤和大家阿克索德好看')},
      {time: '2023-11-11',text: zhTransform('您有二笔订单已经完成，请及时查看')},
    ])
    const navList = ref([
      {imgUrl: phone, title: zhTransform('话费卡')},
      {imgUrl: game, title: zhTransform('游戏卡')},
      {imgUrl: come, title: zhTransform('加油卡')},
      {imgUrl: shop, title: zhTransform('电商卡')},
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

    return {
      messageList,
      navList,
      transform,
      homeBanner,
      homeHot,
      cardList,
      zhTransform
    }
  },
})
</script>
<style lang="scss" scoped>
.home{
  .home__head{
    width: 100vh;
    height: 24.8rem;
    position: relative;
    z-index: 1;
    img{
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    div{
      width: 100vw;
      text-align: center;
      position: absolute;
      z-index: 2;
      color: #fff;
    }
    .home__head__big{
      font-size: 3.8rem;
      top: 6.4rem;
    }
    .home__head__small{
      font-size: 2rem;
      top: 12.9rem;
    }
  }
  .home__tips{
    width: 70.2rem;
    height: 6.8rem;
    font-size: 2rem;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.02);
    margin: -3.4rem auto 0;
    border-radius: 6.8rem;
    background: #fff;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-swipe-item{
      text-align: left;
      width: 50.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box; //作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp:1; //显示的行
    }
  }
  .home__nav{
    width: 69rem;
    margin: 3rem auto 0;
    display: flex;
    justify-content: space-between;
    .home__nav__item{
      width: 15.3rem;
      height: 17.8rem;
      border-radius: 1.8rem;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
      background: #fff;
      padding: 2rem;
      box-sizing: border-box;
      font-size: 2.6rem;
      img{
        width: 8.8rem;
        height: 8.8rem;
        margin-bottom: 1.6rem;
      }
    }
  }
  .home__transform{
    width: 69rem;
    height: 8.8rem;
    border-radius: 1.8rem;
    margin: 2.6rem auto;
    background: #fff;
    padding: 2rem 3rem;
    box-sizing: border-box;
    text-align: left;
    img{
      width: 4.8rem;
      height: 4.8rem;
    }
  }
  .home__banner{
    width: 69rem;
    height: 16.8rem;
    border-radius: 1.8rem;
  }
  .home__title{
    width: 69rem;
    height: 4.8rem;
    margin: 3rem auto;
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    img{
      width: 4.8rem;
      height: 4.8rem;
      margin-right: 1.2rem;
    }
  }
  .home__content{
    width: 69rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .home__content__item{
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
      .home__content__item__discount{
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
    .home__content__item:nth-child(3n){
      margin-right: 0;
    }
  }
}
</style>
