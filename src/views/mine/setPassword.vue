<template>
  <div class="setPassword common-page">
    <div class="setPassword__head">
      <div class="flex-space">
        <span>{{ zhTransform('手机号') }}</span>
        <span>{{ zhTransform('456789') }}</span>
      </div>
      <div></div>
    </div>
    <div class="setPassword__body bg-fff">
      <field v-model="newPassword" placeholder="请输入新交易密码" />
      <field v-model="confirmPassword" placeholder="请再次输入新交易密码" />
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
</script>
<style lang="scss" scoped>
.setPassword{
  .setPassword__head{

  }
  .setPassword__body{
    padding: 0 3rem;
    margin-top: 3rem;
  }
}
</style>
