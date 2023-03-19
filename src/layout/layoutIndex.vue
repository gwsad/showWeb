<template>
  <div class="enter">
    <router-view class="enter__box" />
    <div class="navigation">
      <div class="navigation__item" v-for="(item,index) in navigationList" :key="index" @click="$router.push(item.path)">
        <img :src="route.path === item.path ? item.selectIcon : item.emptyIcon">
        <div :class="{ 'empty-icon': route.path === item.path }">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import {zhTransform}  from '@/utils'
import selectIconHome from '@/assets/enter-hom-1.png'
import emptyIconHome from '@/assets/enter-hom-2.png'
import selectIconCoupons from '@/assets/enter-coupons-1.png'
import emptyIconCoupons from '@/assets/enter-coupons-2.png'
import selectIconOrder from '@/assets/enter-order-1.png'
import emptyIconOrder from '@/assets/enter-order-2.png'
import selectIconMine from '@/assets/enter-mine-1.png'
import emptyIconMine from '@/assets/enter-mine-2.png'
const route = useRoute();
console.log(route.path)
const navigationList = ref([
  {
    name: zhTransform("首页"),
    path: "/enter/home",
    selectIcon: selectIconHome,
    emptyIcon: emptyIconHome,
  },
  {
    name: zhTransform("卡券"),
    path: "/enter/coupons",
    selectIcon: selectIconCoupons,
    emptyIcon: emptyIconCoupons,
  },
  {
    name: zhTransform("订单"),
    path: "/enter/order",
    selectIcon: selectIconOrder,
    emptyIcon: emptyIconOrder,
  },
  {
    name: zhTransform("我的"),
    path: "/enter/mine",
    selectIcon: selectIconMine,
    emptyIcon: emptyIconMine,
  },
]);
</script>
<style lang="scss" scoped>
.enter{
  width: 100vw;
  position: relative;
}
.enter__box{
  background: #f8fbff;
  padding-bottom: 12.5rem;
}
.navigation{
  width: 100vw;
  height: 9.8rem;
  background: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-bottom: 1.1rem;
  .navigation__item{
    margin-top: 1.6rem;
  }
  img{
    width: 4.8rem;
    height: 4.8rem;
  }
  div{
    height: 100%;
    text-align: center;
    margin: 0 auto;
    color: #BDC3CF;
    font-size: 1.8rem;
  }
  .empty-icon{
    color: #1B95FD;
  }
}
</style>
