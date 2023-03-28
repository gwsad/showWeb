<template>
  <div class="kind__nav">
    <div v-for="(item,index) in kindList" :key="index" class="kind__nav__item" @click="onChoseKind(item)">
      <img :src="item.imgUrl" alt="">
      <div>{{ zhTransform(item.title + '卡') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,defineEmits} from "vue";
import {zhTransform}  from '@/utils'
import { useCouponCatHook } from '@/store/modules/card'
import phone from '@/assets/home-phone.png'
import game from '@/assets/home-game.png'
import come from '@/assets/home-come.png'
import shop from '@/assets/home-shop.png'
const emit = defineEmits(['onChoseKind'])
const kindList = ref([
  {imgUrl: phone, title: zhTransform('话费')},
  {imgUrl: game, title: zhTransform('游戏')},
  {imgUrl: come, title: zhTransform('加油')},
  {imgUrl: shop, title: zhTransform('电商')}
])
kindList.value.forEach((item: any) => {
  item._id = useCouponCatHook().couponCat.find((i) => i.name === item.title)._id
})
const onChoseKind = (data) => {
  emit('onChoseKind', data)
}
</script>
<style lang="scss" scoped>
.kind__nav{
    width: 69rem;
    margin: 3rem auto 0;
    display: flex;
    justify-content: space-between;
    .kind__nav__item{
      width: 15.3rem;
      height: 17.8rem;
      border-radius: 1.8rem;
      box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
      background: #fff;
      padding: 2rem;
      box-sizing: border-box;
      font-size: 2.6rem;
      text-align: center;
      img{
        width: 8.8rem;
        height: 8.8rem;
        margin-bottom: 1.6rem;
      }
    }
  }
</style>
