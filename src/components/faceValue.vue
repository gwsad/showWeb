<template>
  <div class="face">
    <div class="face__item" v-for="(item,index) in list" :key="index" @click="onChoseCard(item)">
      <h1>{{ zhTransform(item.title) }}</h1>
      <div>
        <span>{{ zhTransform(item.price) }}</span>
        <span>{{ zhTransform(item.discount) }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineEmits,defineProps} from "vue";
import {zhTransform}  from '@/utils'
const emit = defineEmits(['onChoseFace'])
const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  }
})
const onChoseCard = (data) => {
  emit('onChoseFace', data)
}
</script>
<style lang="scss" scoped>
.face{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .face__item{
    width: 21rem;
    height: 14.4rem;
    border-radius: 1.8rem;
    background: #fff;
    text-align: center;
    border-radius: 1.8rem;
    margin-top: 2rem;
    h1{
      font-size: 3rem;
      color: #233762;
    }
    div{
      display: flex;
      justify-content: space-between;
      padding: 0 2.3rem;
      box-sizing: border-box;
      span{
        font-size: 2.2rem;
        color: #233762;
      }
      span:nth-of-type(2){
        color: #E03323;
      }
    }
  }
}
</style>
