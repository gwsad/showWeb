<template>
  <div class="register">
    <div class="register__head">
      <img :src="logo" alt="">
      <span>{{ zhTransform('欢迎来到港回收') }}</span>
    </div>
    <div class="register__address" @click="onChoseNation()">
      <div>
        <span>选择地区：</span>
        <span>{{ zhTransform('中国大陆') }}</span>
      </div>
      <img :src="more" alt="">
    </div>
    <div class="register__info">
      <div class="register__info__item">
        <div>{{ zhTransform('手机号码：') }}</div>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="register__info__item">
        <div>{{ zhTransform('邀请码：') }}</div>
        <input type="text" placeholder="请输入邀请码">
      </div>
      <div class="register__info__item">
        <div>{{ zhTransform('密码：') }}</div>
        <input type="text" placeholder="请输入密码">
      </div>
    </div>
    <action-sheet v-model:show="show" :actions="actions" @select="onSelect" title="标题"></action-sheet>
    <div class="common-btn">
      <div>{{ zhTransform('确定') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import logo from '@/assets/project-logo.png'
import more from '@/assets/project-more.png'
import { ActionSheet } from 'vant';
const show = ref(false)
const actions = ref([{name:'香港特别行政区'},{name:'澳门特别行政区'},{name:'中国台湾'},{name:'中国大陆'}])
const onChoseNation = () => {
  show.value = true
}
const onSelect = (action: any) => {
  console.log(action)
}
</script>
<style lang="scss" scoped>
.register{
  background: #f8fbff;
  min-height: 100vh;
  padding: 6rem 3rem;
  .register__head{
    display: flex;
    align-items: center;
    img{
      width: 8.8rem;
      height: 8.8rem;
      margin-right: 2.4rem;
    }
    span{
      font-size: 3.6rem;
    }
  }
  .register__address{
    width: 69rem;
    height: 8.8rem;
    padding: 3rem 2.4rem;
    box-sizing: border-box;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 1.8rem;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
    div{
      span:nth-of-type(1){
        font-size: 2rem;
        color: #7D8899;
      }
    }
    img{
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  .register__info{
    width: 69rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 1.8rem;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
    padding: 0 2.4rem;
    box-sizing: border-box;
    .register__info__item{
      height: 12.4rem;
      border-bottom: 0.1rem solid rgba(0,0,0,.1);
      padding-top: 3.1rem;
      div{
        font-size: 2rem;
        color: #7D8899;
        margin-bottom: 2rem;
      }
      input{
        width: 64.2rem;
        height: 6.4rem;
        border: none;
        outline: none;
        font-size: 2.4rem;
        color: #233762;
        &::placeholder{
          color: #7D8899;
        }
      }
    }
    .register__info__item:last-child{
      border-bottom: none;
    }
  }
}
</style>
