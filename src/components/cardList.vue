<template>
  <div class="card">
    <div class="card__content" v-for="(item,index) in list" :key="index" @click="onChoseCard(item.id)">
      <img src="" alt="">
      <div>{{ zhTransform(item.title) }}</div>
      <div class="card__content__discount">{{ zhTransform(item.discount) }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineEmits,defineProps} from "vue";
import {zhTransform}  from '@/utils'
const emit = defineEmits(['onChoseCard'])
const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  }
})
const onChoseCard = (id: string) => {
  emit('onChoseCard', id)
}
</script>
<style lang="scss" scoped>
.card{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card__content{
  width: 21rem;
  height: 27.7rem;
  border-radius: 1.8rem;
  box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
  padding: 3rem;
  box-sizing: border-box;
  margin-right: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  img{
    width: 10.8rem;
    height: 10.8rem;
    margin-bottom: 2rem;
  }
  div{
    text-align: center;
    font-size: 2.6rem;
  }
  .card__content__discount{
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
.card__content:nth-child(3n){
  margin-right: 0;
}
</style>
