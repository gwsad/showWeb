<template>
  <div class="share__code">
    <Image :src="shareBg" alt="" width="100%" height="100%" />
    <div class="share__code__num">{{ zhTransform(`-目前已经有${inviteNum}人获得奖励-`) }}</div>
    <div class="share__code__body">
      <p>{{ zhTransform(`我的邀请码`) }}</p>
      <span>{{ zhTransform(userInfo.invitationCode) }}</span>
      <div @click="copyUrl(userInfo.invitationCode)">{{ zhTransform(`保存邀请码`) }}</div>
      <div @click="onShareCode(userInfo.invitationCode)">{{ zhTransform(`分享链接给朋友`) }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref,computed,onMounted} from "vue";
import {zhTransform}  from '@/utils'
import { Image,showToast } from 'vant';
import shareBg from '@/assets/share-code-bg.png'
import { useUserStoreHook } from '@/store/modules/user'
import { getInviteNum } from '@/api/home'
const userInfo = computed(() => {
  return useUserStoreHook().userInfo || {};
});
onMounted(() => {
  getInviteNum().then((res:any) => {
    inviteNum.value = res.data.count
  })
})
const inviteNum = ref(0)
const copyUrl = (value)=> {
   let url = value;
   let domInput = document.createElement('input');
   domInput.value = url;
   document.body.appendChild(domInput);  // 添加input节点
   domInput.select(); // 选择对象;
   document.execCommand("Copy"); // 执行浏览器复制命令
   domInput.remove()
   showToast({ message: zhTransform('复制成功'), duration: 2000 })

}
const onShareCode = (value) => {
  let url = `http://hongkongshou.com/#/register?shareCode=${value}` ;
  let domInput = document.createElement('input');
  domInput.value = url;
  document.body.appendChild(domInput);  // 添加input节点
  domInput.select(); // 选择对象;
  document.execCommand("Copy"); // 执行浏览器复制命令
  domInput.remove()
  showToast({ message: zhTransform('复制成功'), duration: 2000 })
}
</script>
<style lang="scss" >
.share__code{
  width: 100vw;
  height: 100vh;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .share__code__num{
    position: absolute;
    top: 62rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 43.4rem;
    height: 5.8rem;
    border-radius: 2.9rem;
    background: rgba(255,255,255,.2);
    text-align: center;
    line-height: 5.8rem;
    font-size: 2.2rem;
    z-index: 2;
  }
  .share__code__body{
    width: 69rem;
    margin: 0 auto;
    padding: 3.2rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: 1.8rem;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.02);
    position: absolute;
    top: 76rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    text-align: center;
    p{
      font-size: 2.4rem;
      margin-top: 3rem;
      color: #BDC3CF;
    }
    span{
      margin-top: 3.4rem;
      color: #233762;
      font-size: 6.8rem;
      line-height: 8.2rem;
    }
    div{
      width: 46rem;
      height: 8.8rem;
      border-radius: 4.4rem;
      background: linear-gradient(180deg, #42CFFF 0%, #1E9AFF 100%);
      line-height: 8.8rem;
      font-size: 3.2rem;
      color: #FFFFFF;
      margin: 0 auto;
    }
    div:nth-of-type(1){
      margin: 4.3rem auto 3rem;
    }
  }
}
</style>
