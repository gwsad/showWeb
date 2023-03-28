<template>
  <div class="add__Bank">
    <Dialog v-model:show="props.show"  :showCancelButton="true" class="showExample" @cancel="onResult(false)" @confirm="onResult(true)" >
      <div class="add__Bank__title">{{ zhTransform('添加银行卡') }}</div>
      <div class="add__Bank__desc">{{ zhTransform('只能填写[xxx]的银行卡账号') }}</div>
      <div class="add__Bank__picker" @click="onOpenPicker()">{{ zhTransform(columns[valuePicker] === undefined ? '请选择' : columns[valuePicker].text) }}</div>
      <div class="add__Bank__chose" :class="{ 'add__Bank__chose-show': !pickerShow }" >
        <div v-for="(item,index) in columns" :key="index" @click="onChoseBank(item.value)">{{ zhTransform(item.text) }}</div>
      </div>
      <Field v-model="bankInfo.userName" placeholder="请输入持卡人姓名" />
      <Field v-model="bankInfo.bankName" placeholder="请输入银行卡卡号" />
      <Field v-model="bankInfo.bankNum" placeholder="请输入银行开户行" />
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
const bankInfo = ref({
  userName: '',
  bankName: '',
  bankNum: '',
})
const valuePicker = ref(null)
const columns = ref([
  { text: '中国银行', value: 0, },
  { text: '农业银行', value: 1, },
  { text: '工商银行', value: 2, },
  { text: '南京银行', value: 3, },
  { text: '宁波银行', value: 4, },
  { text: '华夏银行', value: 5, },
  { text: '上海银行', value: 6, },
  { text: '北京银行', value: 7, },
  { text: '农商银行', value: 8, },
])
const onOpenPicker = () => {
  pickerShow.value = true
}
const onResult = (value: boolean) => {
  console.log(!bankInfo.value.userName)
  if( value && (!bankInfo.value.userName || !bankInfo.value.bankName || !bankInfo.value.bankNum || valuePicker.value === null)){
    return showToast('请填写完整信息')
  }
  value && emit('onConfirm',Object.assign(bankInfo.value,{bankType: valuePicker.value}))
  !value && emit('onCancel')
  valuePicker.value = null
  bankInfo.value = {
    userName: '',
    bankName: '',
    bankNum: '',
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
  .van-dialog__content{
    padding: 3rem 6rem 0;
  }
  .van-field{
    padding: 0;
  }
  .van-field__control{
    height: 8.9rem;
  }
  .van-picker{

    z-index: 100;
  }
  .add__Bank__title{
    color: #233762;
    font-size: 3rem;
  }
  .add__Bank__desc{
    color: #233762;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-top: 1.4rem;
  }
  .add__Bank__picker{
    height: 8.9rem;
    display: flex;
    align-items: center;
    color: #233762;
    font-size: 2.4rem;
    border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  }
  .add__Bank__chose{
    height: 16rem;
    border-bottom: 0.1rem solid rgba(0,0,0,0.1);
    transition: all 0.3s;
    text-align: center;
    overflow-y: auto;
    div{
      height: 4rem;
      color: #233762;
      font-size: 2.4rem;
      margin: 1.5rem;
    }
  }
  .add__Bank__chose-show{
    height: 0;
    overflow: hidden;
  }
}
</style>
