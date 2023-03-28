<template>
  <div class="modifyName common-page">
    <field v-model="value" maxlength="20" placeholder="请输入" />
    <div class="modifyName__desc">{{ zhTransform('4-20个字符，可由中英文、数字组成') }}</div>
    <div class="common-btn" @click="onSetNick">
      <div>{{ zhTransform('确定修改') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,computed} from "vue";
import { useRouter } from "vue-router"
import {zhTransform}  from '@/utils'
import { Field } from "vant"
import { setNickname } from '@/api/home'
import { showToast } from 'vant';
import { useUserStoreHook } from '@/store/modules/user'
const router = useRouter()
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});
const value = ref(userInfo.value.nickname)
const onSetNick = async() => {
  // 最少4位字符
  if(value.value.length < 4){
    return showToast({
      message: zhTransform('昵称最少4个字符'),
      duration: 2000
    })
  }
  if(!value.value){
    return showToast({
      message: zhTransform('请输入昵称'),
      duration: 2000
    })
  }
  const res = await setNickname({nickname: value.value})
  if(res.code === 200){
    showToast({
      message: zhTransform('修改成功'),
      duration: 2000
    })
    router.go(-1)
  }
}
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
