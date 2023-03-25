<template>
  <div class="common-page page__padding">
    <div class="easy__page illustrate">
      <div>{{ zhTransform('等级划分：') }}</div>
      <div>{{ zhTransform('普通会员，中级会员，高级会员') }}</div>
      <div class="empty__content">{{ zhTransform('等级晋升说明一：') }}</div>
      <div>{{ zhTransform('普通会员：平台新注册用户为普通会员') }}</div>
      <div>{{ zhTransform('中级会员：普通会员分享邀约10位好友，成为中级会员') }}</div>
      <div>{{ zhTransform('高级会员：中级会员分享邀约20位好友，成为高级会员') }}</div>
      <div class="empty__content">{{ zhTransform('等级晋升说明二：') }}</div>
      <div>{{ zhTransform('中级会员：普通会员分享邀约10位好友中，产生总金额为3万元，方可晋升成为中级会员。') }}</div>
      <div>{{ zhTransform('高级会员：中级会员分享邀约20位好友，产生总金额为10万元，方可晋升成为高级会员。') }}</div>
      <div class="empty__content">{{ zhTransform('分佣比例说明：') }}</div>
      <div>{{ zhTransform('普通会员：千2') }}</div>
      <div>{{ zhTransform('普通会员A邀请新普通会员B。比如：会员B提交的是一张1000面值的京东E卡，并且处理成功，邀请人可获得成交金额的千分之二 (1.86元）的分享奖励，成功处理金额越高，奖励越多。') }}</div>
      <div class="empty__content">{{ zhTransform('中级会员：千3') }}</div>
      <div>{{ zhTransform('中级会员A邀请新普通会员B。比如：会员B提交的是一张1000面值的京东E卡，并且处理成功，邀请人可获得成交金额的千分之三 （2.79元） 的分享奖励，成功处理金额越高，奖励越多。') }}</div>
      <div class="empty__content">{{ zhTransform('高级会员：千5') }}</div>
      <div>{{ zhTransform('高级会员A邀请新普通会员B。比如：会员B提交的是一张1000面值的京东E卡，并且处理成功，邀请人可获得成交金额的千分之五 （4.65元） 的分享奖励，成功处理金额越高，奖励越多。') }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {zhTransform}  from '@/utils'
</script>
<style lang="scss" >
.illustrate{
  color: #2B3E68;
  font-size: 2.2rem;
  line-height: 2.6rem;
  div{
    margin-bottom: 1.5rem;
  }
}
.empty__content{
  margin-top: 6.4rem;
}
</style>
