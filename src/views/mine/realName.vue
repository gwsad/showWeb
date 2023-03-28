<template>
  <div class="realName common-page">
    <div class="realName__content bg-fff">
      <div class="realName__content__title">{{ zhTransform('基本信息') }}</div>
      <div v-for="(item,index) in infoList" :key="index" class="realName__content__body">
        <div>{{ zhTransform(item.title) }}</div>
        <field v-model="item.value" :placeholder="item.placeholder" />
      </div>
    </div>
    <div class="common-btn" @click="onRealNameFn">
      <div>{{ zhTransform('确定提交') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted,computed} from "vue";
import {zhTransform}  from '@/utils'
import { realName } from '@/api/home'
import { useUserStoreHook } from '@/store/modules/user'
import { Field,showToast } from "vant"
import { useRouter } from "vue-router"
const userInfo = computed(() => {
  return useUserStoreHook().userInfo.identityInformation || {};
});
const router = useRouter()
const infoList = ref([
  {title: zhTransform('姓名'), value: userInfo.value.name,placeholder: '请输入真实姓名'},
  {title: zhTransform('身份证'), value: userInfo.value.id,placeholder: '请输入身份证号码'}
])
const region = ref('')

const choseText = () => {
  switch (useUserStoreHook().userInfo.region) {
    case '中国大陆':
      region.value = 'zh'
      break;
    case '中国台湾':
      region.value = 'tw'
      break;
    case '中国香港':
      region.value = 'hk'
      break;
    case '中国澳门':
      region.value = 'am'
      break;
    default:
      break;
  }
}

onMounted(() => {
  choseText()
})

const onRealNameFn = async() => {
  if(!infoList.value[0].value){
    return showToast({ message: zhTransform('请输入真实姓名'), duration: 2000 })
  }
  // 校验名字不包含数字
  if(/^[0-9]*$/.test(infoList.value[0].value)){
    return showToast({ message: zhTransform('姓名不能包含数字'), duration: 2000 })
  }
  if(!infoList.value[1].value){
    return showToast({ message: zhTransform('请输入身份证号码'), duration: 2000 })
  }
  const res = await realName({name: infoList.value[0].value, id: infoList.value[1].value, region: region.value})
  if(res.code === 200){
    showToast({
      message: zhTransform('提交成功'),
      duration: 2000
    })
    router.go(-1)
  }else{
    showToast({
      message: zhTransform(res.message),
      duration: 2000
    })
  }
}

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
      font-size: 2.4rem;
      .van-field{
        width: 32rem;
        font-size: 2.4rem;
        input{
          text-align: right;
        }
      }
    }
  }
}
</style>
