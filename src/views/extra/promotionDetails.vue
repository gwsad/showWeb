<template>
  <div class="promotion">
    <div class="promotion__title">
      <span>{{ zhTransform(`新增收益+${userInfo.cash.extend.total + ''}`) }}</span>
      <span>{{ zhTransform('进行提现') }}</span>
    </div>
    <div class="promotion__body">
      <div v-for="(item,index) in userInfo.cash.extend.list" :key="index" class="promotion__body__item">
        <span>{{ item.time }}</span>
        <span>+{{ item.amount }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted,computed} from "vue";
import {zhTransform}  from '@/utils'
import { getMyPartner } from '@/api/home'
import { useUserStoreHook } from '@/store/modules/user'
const partnerList = ref([])
const detailList = ref([
  {time: '2023-03-01 23:00:00', money: '0.00'},
  {time: '2023-03-01 23:00:00', money: '0.00'},
  {time: '2023-03-01 23:00:00', money: '0.00'},
  {time: '2023-03-01 23:00:00', money: '0.00'},
  {time: '2023-03-01 23:00:00', money: '0.00'},
])
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});
onMounted(() => {
  getMyPartner().then(res => {
    partnerList.value = res.data
  })
})
</script>
<style lang="scss" >
.promotion{
  background: #f8fbff;
  div{
    background: #fff;
  }
  .promotion__title{
    width: 100vw;
    height: 8.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    padding: 0 3rem;
    box-sizing: border-box;
    color: #FB1639;
    span:last-child{
      color: #D1D5DD;
    }
  }
  .promotion__body{
    padding: 0 3rem;
    box-sizing: border-box;
    .promotion__body__item{
      height: 8.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 8.9rem;
      border-bottom: 0.1rem solid rgba(0,0,0,0.1);
      color: #BDC3CF;
      span:last-child{
        color: #FB1639;
      }
    }
    .promotion__body__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
