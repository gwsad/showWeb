<template>
  <div class="setPassword common-page">
    <div class="setPassword__head bg-fff">
      <div class="flex-space">
        <span>{{ zhTransform('手机号码') }}</span>
        <span>{{ zhTransform(userInfo.phone === undefined ? '' : userInfo.phone) }}</span>
      </div>
    </div>
    <div class="setPassword__body bg-fff">
      <field v-model="newPassword" :placeholder="zhTransform('请输入新交易密码')" />
      <field v-model="confirmPassword" :placeholder="zhTransform('请再次输入新交易密码')" />
    </div>
    <div class="common-btn" @click="onSetPassFn">
      <div>{{ zhTransform('确定修改') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,computed} from "vue";
import {zhTransform}  from '@/utils'
import { Field } from "vant"
import { showToast } from 'vant';
import { useRouter } from "vue-router"
import { resetPass } from '@/api/home'
import { useUserStoreHook } from '@/store/modules/user'
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});

const newPassword = ref('')
const confirmPassword = ref('')
const router = useRouter()

const onSetPassFn = async() => {
  if(!newPassword.value){
    return showToast({
      message: zhTransform('请输入新交易密码'),
      duration: 2000
    })
  }
  if(!confirmPassword.value){
    return showToast({
      message: zhTransform('请再次输入新交易密码'),
      duration: 2000
    })
  }
  if(newPassword.value !== confirmPassword.value){
    return showToast({
      message: zhTransform('两次密码输入不一致'),
      duration: 2000
    })
  }
  const res = await resetPass({password: newPassword.value})
  if(res.code === 200){
    showToast({
      message: zhTransform('修改成功'),
      duration: 2000
    })
    router.go(-1)
  }

}

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
