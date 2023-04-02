<template>
  <div class="add__Bank">
    <Dialog v-model:show="props.show"  :showCancelButton="true" class="showExample" @cancel="onResult(false)" @confirm="onResult(true)" >
      <div class="add__Bank__title">{{ zhTransform('添加支付宝账户') }}</div>
      <Field v-model="ZFBInfo.ZFBName" placeholder="请输入支付宝姓名" />
      <Field v-model="ZFBInfo.ZFBAccount" placeholder="请输入支付宝账户" />
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import {defineProps,ref,defineEmits, onMounted} from "vue";
import {Dialog,Field,showToast} from 'vant'
import {zhTransform}  from '@/utils'
const props = defineProps(['show'])
const emit = defineEmits(['onCancel','onConfirm'])
const ZFBInfo = ref({
  ZFBAccount: '',
  ZFBName: '',
})
const onResult = (value: boolean) => {
  if( value && (!ZFBInfo.value.ZFBAccount || !ZFBInfo.value.ZFBAccount)){
    return showToast('请填写完整信息')
  }
  value && emit('onConfirm',ZFBInfo.value)
  !value && emit('onCancel')
  ZFBInfo.value = {
    ZFBAccount: '',
    ZFBName: '',
  }
}
onMounted(() => {
  console.log(props.show)
})
</script>
<style lang="scss">
.add__Bank{
  .van-field{
    padding: 0;
  }
}
</style>
