<template>
  <div class="chose__bank common-page page__padding">
    <div class="easy__page">
      <h1 class="easy__page__title">{{ zhTransform('选择银行账户') }}</h1>
      <div class="chose__bank__item">
        <div class="chose__bank__item__info">
          <div>{{ zhTransform('dgahgshdja') }}</div>
          <div>{{ zhTransform('1231132213') }}</div>
        </div>
        <chose :value="true" />
      </div>
    </div>
    <div class="common-btn">
      <div>{{ zhTransform('添加银行卡账户') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import chose from '@/components/choseIcon.vue'
</script>
<style lang="scss" >
.chose__bank{
  .easy__page__title{
    font-size: 2.4rem;
    color: #233762;
  }
  .chose__bank__item{
    height: 12.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid rgba(0,0,0,0.1);
    .chose__bank__item__info{
      div{
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #233762;
      }
      div:nth-of-type(2){
        margin-top: 0.8rem;
        color: #BDC3CF;
        font-size: 2rem;
      }
    }
  }
  .chose__bank__item:last-child{
    border-bottom: none;
  }
}
</style>
