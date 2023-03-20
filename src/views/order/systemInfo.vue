<template>
  <div class="systemInfo">
    <div class="systemInfo__list bg-fff" v-for="(item,index) in systemList" :key="index">
      <div>
        <img :src="item.url" alt="">
        <span class="systemInfo__list__title">{{ zhTransform(item.title) }}</span>
      </div>
      <span class="systemInfo__list__desc">{{ zhTransform(item.desc) }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import system from '@/assets/system-info.png'
const systemList = ref([
  {
    url: system,title: '标题',desc: "ghadshajgdgjadg"
  },
  {
    url: system,title: '',desc: ""
  },
  {
    url: system,title: '',desc: ""
  }
])
</script>
<style lang="scss" scoped>
.systemInfo{
  min-height: 100vh;
  background: #f8fbff;
  padding-top: 3rem;
  .systemInfo__list{
    width: 69rem;
    padding: 3rem 2.4rem 6rem;
    box-sizing: border-box;
    margin: 0 auto 3rem;
    border-radius: 1.8rem;
    div{
      display: flex;
      align-items: center;
      height: 6.4rem;
      margin-bottom: 3rem;
    }
    img{
      width: 6.4rem;
      height: 6.4rem;
      margin-right: 2.4rem;
    }
    .systemInfo__list__title{
      font-size: 2.8rem;
      color: #333;
    }
    .systemInfo__list__desc{
      font-size: 2.2rem;
      color: #999;
    }
  }
}
</style>
