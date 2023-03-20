<template>
  <div class="realName common-page">
    <div class="realName__content bg-fff">
      <div class="realName__content__title">{{ zhTransform('基本信息') }}</div>
      <div v-for="(item,index) in infoList" :key="index" class="realName__content__body">
        <div>{{ item.title }}</div>
        <field v-model="item.value" :placeholder="item.placeholder" />
      </div>
    </div>
    <div class="common-btn">
      <div>{{ zhTransform('确定提交') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import { Field } from "vant"
const infoList = ref([
  {title: zhTransform('姓名'), value: '',placeholder: '请输入真实姓名'},
  {title: zhTransform('身份证'), value: '',placeholder: '请输入身份证号码'}
])
</script>
<style lang="scss">
.realName{
  padding-top: 3rem;
  .realName__content{
    width: 70.2rem;
    border-radius: 1.8rem;
    padding: 3rem;
    text-align: left;
    box-sizing: border-box;
    margin: 0 auto;
    .realName__content__title{
      font-size: 2.4rem;
      height: 8.8rem;
      line-height: 8.8rem;
    }
    .realName__content__body{
      width: 64.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 0.1rem solid rgba(0,0,0,.1);
      font-size: 1.8rem;
      .van-field{
        width: 30rem;
        font-size: 1.8rem;
        input{
          text-align: right;
        }
      }
    }
  }
}
</style>
