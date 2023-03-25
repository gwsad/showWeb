<template>
  <div class="add__Bank">
    <Dialog v-model:show="props.show"  :showCancelButton="true" class="showExample" @cancel="onResult(false)" @confirm="onResult(true)" >
      <div class="add__Bank__title">{{ zhTransform('添加银行卡') }}</div>
      <div class="add__Bank__desc">{{ zhTransform('只能填写[xxx]的银行卡账号') }}</div>
      <div class="add__Bank__picker" @click="onOpenPicker()">{{ zhTransform(columns[valuePicker].text) }}</div>
      <div class="add__Bank__chose" :class="{ 'add__Bank__chose-show': !pickerShow }" >
        <div v-for="(item,index) in columns" :key="index" @click="onChoseBank(item.value)">{{ zhTransform(item.text) }}</div>
      </div>
      <Field v-model="bankInfo.bankName" placeholder="请输入银行卡卡号" />
      <Field v-model="bankInfo.bankNum" placeholder="请输入银行开户行" />
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import {defineProps,ref,defineEmits, onMounted} from "vue";
import {Dialog,Field} from 'vant'
import {zhTransform}  from '@/utils'
const props = defineProps(['show'])
const emit = defineEmits(['onCancel','onConfirm'])
const pickerShow = ref(props.show)
const bankInfo = ref({
  bankName: '',
  bankNum: '',
})
const valuePicker = ref(0)
const columns = ref([
  { text: '选项1', value: 0, },
  { text: '选项2', value: 1, },
  { text: '选项3', value: 2, },
  { text: '选项4', value: 3, },
  { text: '选项5', value: 4, },
  { text: '选项6', value: 5, },
  { text: '选项7', value: 6, },
  { text: '选项8', value: 7, },
  { text: '选项9', value: 8, },
])
const onOpenPicker = () => {
  pickerShow.value = true
}
const onResult = (value: boolean) => {
  value && emit('onConfirm',bankInfo.value)
  !value && emit('onCancel')
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
    padding: 6rem 3rem;
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
    height: 20rem;
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
