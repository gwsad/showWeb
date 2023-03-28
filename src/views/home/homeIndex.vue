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
        <van-swipe-item v-for="(item,index) in messageList" :key="index">{{ zhTransform(item.time + ' ' + item.text)}}</van-swipe-item>
      </van-swipe>
    </div>
    <kind />
    <div class="home__transform">
      <img :src="transform" alt="">
    </div>
    <img class="home__banner" :src="homeBanner" />
    <div class="home__title">
      <img :src="homeHot" alt="">
      <span>{{ zhTransform('热门兑换') }}</span>
    </div>
    <div class="home__content">
      <cardList :list="cardList" @onChoseCard="onChoseCard" />
    </div>
  </div>
</template>
<script lang="ts">
import {Swipe, SwipeItem} from 'vant';
import {defineComponent, ref, onMounted} from "vue";
import { useRouter } from "vue-router"
import kind from '@/components/kind.vue'
import cardList from '@/components/cardList.vue'
import {zhTransform}  from '@/utils'
import transform from '../../assets/home-transform.png'
import homeBanner from '../../assets/home-banner.png'
import homeHot from '../../assets/home-hot.png'
import { getHomeMessage,getHotCoupon } from '@/api/home'
export default defineComponent({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    kind,
    cardList
  },
  setup() {
    const router = useRouter()
    const messageList = ref([])
    const cardList = ref([])
    const onChoseKind = (kind: string) => {
      router.push({path: '/couponsSell', query: {kind}})
    }
    const onChoseCard = (card: any) => {
      console.log(card)
      router.push({path: '/couponsSell', query: {card:card._id}})
    }

    onMounted(async ()=>{
      try {
        let res:any = await getHomeMessage()
        messageList.value = res.data
        let hot:any = await getHotCoupon()
        cardList.value = hot.data
      } catch (error) {
        console.log(error)
      }
    })
    return {
      messageList,
      transform,
      homeBanner,
      homeHot,
      cardList,
      zhTransform,
      onChoseKind,
      onChoseCard
    }
  },
})
</script>
<style lang="scss" scoped>
.home{
  min-height: 100vh;
  text-align: center;
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
  }
}
</style>
