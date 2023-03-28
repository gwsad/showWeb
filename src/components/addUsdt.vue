<template>
  <div class="add__Bank">
    <Dialog v-model:show="props.show"  :showCancelButton="true" class="showExample" @cancel="onResult(false)" @confirm="onResult(true)" >
      <div class="add__Bank__title">{{ zhTransform('添加USDT账户') }}</div>
      <div class="add__Bank__picker" @click="onOpenPicker()">{{ zhTransform(columns[valuePicker] === undefined ? '请选择' : columns[valuePicker].text) }}</div>
      <div class="add__Bank__chose" :class="{ 'add__Bank__chose-show': !pickerShow }" >
        <div v-for="(item,index) in columns" :key="index" @click="onChoseBank(item.value)">{{ zhTransform(item.text) }}</div>
      </div>
      <Field v-model="usdtInfo.usdtNum" placeholder="请输入地址" />
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import {defineProps,ref,defineEmits, onMounted} from "vue";
import {Dialog,Field,showToast} from 'vant'
import {zhTransform}  from '@/utils'
const props = defineProps(['show'])
const emit = defineEmits(['onCancel','onConfirm'])
const pickerShow = ref(props.show)
const usdtInfo = ref({
  usdtType: '',
  usdtNum: '',
})
const valuePicker = ref(null)
const columns = ref([
  { text: 'trc20', value: 0, },
  { text: 'erc20', value: 1, }
])
const onOpenPicker = () => {
  pickerShow.value = true
}
const onResult = (value: boolean) => {
  if( value && (!usdtInfo.value.usdtNum || valuePicker.value === null)){
    return showToast('请填写完整信息')
  }
  value && emit('onConfirm',Object.assign({type: valuePicker.value === 0 ? 'trc20' : 'erc20'},usdtInfo.value))
  !value && emit('onCancel')
  valuePicker.value = null
  usdtInfo.value = {
    usdtType: '',
    usdtNum: '',
  }
}
const onChoseBank = (value: number) => {
  valuePicker.value = value
  pickerShow.value = false
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
