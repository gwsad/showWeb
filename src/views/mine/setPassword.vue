<template>
  <div class="setPassword common-page">
    <div class="setPassword__head bg-fff">
      <div class="flex-space">
        <span>{{ zhTransform('手机号码') }}</span>
        <span>{{ zhTransform('456789') }}</span>
      </div>
      <!-- <div class="flex-space">
        <field v-model="newPassword" :placeholder="zhTransform('请输入验证码')" />
        <span :class="{'red-font' : getCode === '获取验证码'}">{{ zhTransform(getCode) }}</span>
      </div> -->
    </div>
    <div class="setPassword__body bg-fff">
      <field v-model="newPassword" :placeholder="zhTransform('请输入新交易密码')" />
      <field v-model="confirmPassword" :placeholder="zhTransform('请再次输入新交易密码')" />
    </div>
    <div class="common-btn">
      <div>{{ zhTransform('确定修改') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import { Field } from "vant"

const newPassword = ref('')
const confirmPassword = ref('')
const getCode = ref('获取验证码')
</script>
<style lang="scss" >
.setPassword{
  .setPassword__head{
    padding: 0 3rem;
    font-size: 2.6rem;
    div{
      display: flex;
      align-items: center;
      height: 8.8rem;
      line-height: 8.8rem;
    }
    .van-field{
      width: 30rem;
      font-size: 2.4rem;
      padding: 0;
    }
  }
  .setPassword__body{
    padding: 0 3rem 0 0;
    margin-top: 3rem;
    font-size: 2.4rem;
    .van-field{
      font-size: 2.4rem;
    }
  }
  .red-font{
    color: #FB1639;
  }
}
</style>
