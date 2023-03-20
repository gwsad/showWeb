<template>
  <div class="modifyName common-page">
    <field v-model="value" placeholder="请输入" />
    <div class="modifyName__desc">{{ zhTransform('4-20个字符，可由中英文、数字组成') }}</div>
    <div class="common-btn">
      <div>{{ zhTransform('确定修改') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
import { Field } from "vant"

const value = ref('')
</script>
<style lang="scss" scoped>
.modifyName{
  .modifyName__desc{
    font-size: 2rem;
    margin-top: 1.8rem;
    margin-left: 3rem;
    text-align: left;
  }
}
</style>
