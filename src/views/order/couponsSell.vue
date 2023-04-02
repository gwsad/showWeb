<template>
  <div class="coupons-sell">
    <div class="sell-info coupons-sell__common">
      <div class="sell-info__item" v-for="(item,index) in couponsInfo" :key="index" @click="onChoseInfo(index)">
        <div>
          <span>{{ zhTransform(item.title) }}：</span>
          <div>{{ zhTransform(item.value) }}</div>
        </div>
        <img v-if="index !== 3" :src="more" alt="">
        <div class="sell-info__item__discount" v-if="index === 3">{{ cardInfo.discount }}{{ zhTransform('折') }}</div>
      </div>
    </div>
    <div class="sell-illustrate coupons-sell__common">
      <span class="sell-illustrate__text">{{ zhTransform('展开') }}</span>
      <collapse v-model="illustrateStatus">
        <collapse-item name="1">
          <template #title>
            <div class="sell-illustrate__content">
              <img :src="illustrate" alt="">
              <span>{{ zhTransform('兑换说明(必阅读)') }}</span>
            </div>
          </template>
          <div v-for="(item,index) in descList" :key="index" >{{ zhTransform(item) }}</div>
        </collapse-item>
      </collapse>
    </div>
    <div class="sell-card">
      <div class="sell-card__chose">
        <div v-for="(item,index) in sellList" :key="index" class="sell-card__chose__item" @click="onChoseSell(item.value)">
          <div :class="{'sell-card__chose__item__chose': sellChose === item.value}">{{ item.name }}</div>
          <img :src="tableChose" v-if="sellChose === item.value" alt="">
          <div v-else class="sell__empty" />
        </div>
      </div>
      <!-- 单卡出售 -->
      <div v-show="sellChose ===1" class="sell-card__one">
        <div v-for="(item,index) in accountInfo" :key="index" class="sell-card__one__item">
          <img :src="item.url" alt="">
          <field v-model="item.value" :placeholder="zhTransform(item.placeholder)" />
        </div>
      </div>
      <!-- 批量出售 -->
      <div v-show="sellChose ===2" class="sell-card__two">
        <field v-model="commitInfo.cards" rows="4" autosize type="textarea" :placeholder="zhTransform('卡号与密码之间请使用“空格”隔开，每张卡占用一行用“回车键”隔开')" />
        <div class="sell-card__two__info">
          <span>每次最多提交1000张</span>
          <span @click="onShowExample(true)">卡密示例</span>
        </div>
      </div>
    </div>
    <div class="sell-evaluate coupons-sell__common">
      <div class="sell-evaluate__head">
        <div>
          <img :src="evaluate" alt="">
          <span>{{ zhTransform(`用户评价`) }}</span>
        </div>
        <!-- <div>
          <span>{{ zhTransform('查看全部') }}</span>
          <img :src="more" alt="">
        </div> -->
      </div>
      <div class="sell-evaluate__content" v-for="(item,index) in commentList" :key="index">
        <div class="sell-evaluate__content__head">
          <div>
            <img :src="logo" alt="">
            <span>{{ zhTransform(item.nickname + '') }}</span>
          </div>
          <span class="sell-evaluate__content__head__time">{{ zhTransform(item.time + '') }}</span>
        </div>
        <div class="sell-evaluate__content__body">{{ zhTransform(item.text + '') }}</div>
        <div class="sell-evaluate__content__score">
          <div v-for="(item,index) in scoreList" :key="index">
            <span>{{ zhTransform(item.title) }}</span>
            <img :src="score" alt="" v-for="(item,index) in 5" :key="index">
          </div>
        </div>
      </div>
    </div>
    <div class="sell-evaluate__bottom">
      <div v-for="(item,index) in btnList" :key="index" @click="onGoPage(item.title)">
        <img :src="item.url" alt="">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="sell-evaluate__foot" >
      <div @click="onCommit()">{{ zhTransform('提交出售') }}</div>
    </div>
    <action-sheet v-model:show="show" :title="zhTransform(couponsInfo[actionIndex].title)">
      <kind v-if="actionIndex === 0" @onChoseKind="onChoseKind" />
      <card v-else-if="actionIndex === 1" :list="cardList" @onChoseCard="onChoseCard" />
      <face v-else-if="actionIndex === 2" :list="faceList" @onChoseFace="onChoseFace" />
    </action-sheet>
    <Dialog v-model:show="showExample" :showConfirmButton="false" class="showExample">
      <p>
        <span>{{ zhTransform('卡号与卡密之间用英文或则和') }}</span><br />
        <span>{{ zhTransform('中文逗号或者空格隔开') }}</span><br />
        <span>{{ zhTransform('每张卡占用一行用“回车键”隔开') }}</span><br />
        <span>{{ zhTransform('卡号：117892200866197996 卡密：') }}</span><br />
        <span>{{ zhTransform('221012233248664684') }}</span>
      </p>
      <img :src="example" class="showExample__bg" alt="">
      <div class="showExample__cancel" @click="onShowExample(false)">
        <img :src="cancel" alt="">
      </div>
    </Dialog>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted,unref} from "vue";
import { useRouter } from "vue-router"
import {zhTransform}  from '@/utils'
import {ActionSheet,Collapse, CollapseItem, Field, Dialog,showToast} from 'vant'
import more from '../../assets/project-more.png'
import illustrate from '../../assets/order-illustrate.png'
import evaluate from '../../assets/order-evaluate.png'
import logo from '../../assets/project-logo.png'
import step from '../../assets/sell-step.png'
import question from '../../assets/sell-question.png'
import tableChose from '@/assets/table-chose.png'
import account from '@/assets/home-account.png'
import password from '@/assets/home-password.png'
import example from '@/assets/example-dialog.png'
import cancel from '@/assets/cancel.png'
import score from '@/assets/score.png'
import kind from '@/components/kind.vue'
import card from '@/components/cardList.vue'
import face from '@/components/faceValue.vue'
import { useCouponCatHook } from '@/store/modules/card'
import { getCouponDetail,getCouponInfo,submitSell,orderComment } from '@/api/home'
const { currentRoute } = useRouter();
const { query } = unref(currentRoute);
const router = useRouter()
const commentList = ref([])
const show = ref(false)
const illustrateStatus = ref(['0'])
const sellList = ref([ { name: '单卡出售',value: 1 }, { name: '多卡出售',value: 2 } ])
const sellChose = ref(1)
const showExample = ref(false) // 是否展示示例
const actionIndex = ref(0)
const commitInfo = ref({
  cartoryId: '',
  cardId: '',
  facevalue: null,
  cardInfo: { number: '', pass: '' },
  cards: ''
}) // 提交的信息
const accountInfo = ref([
  {url: account,placeholder: '请输入卡号',value: ''},
  {url: password,placeholder: '请输入卡密',value: ''},
])
const cardInfo = ref({})
const cardList = ref([])
const faceList = ref([])
const couponsInfo = ref([
  { title:'选择卡类',value:'1'  }, { title:'选择卡种',value:'1' }, { title:'选择面值',value:'1' }, { title:'回收价格',value:'1' },
])
const descList = ref(['1、全部面值处理时效1-10分钟内结算欢迎新老客户提交！','2、卡号19-21位，卡密16位！无卡号的e卡请在卡号栏和卡密栏二空都填卡密！','3、只收通用卡，不收限品类的卡，如京品卡/图书卡(卡号JDY/JDX开头），提交限品卡自动返回失败，造成的损失可能无法追回，如导致本平台受损将追责；','4、若提交的卡密已被使用或错误，即便已拿到货款，后续也会被追责，故请认真核实；','5、卡密提交后，请勿擅自使用或一卡多卖，请珍惜自己的信用分；','6、仅回收合法渠道来源的卡券，严禁使用本平台进行销赃、诈骗、洗钱等违法犯罪活动，提交非法来源的卡券，如导致本平台受损，将报由司法机关追究法律责任；','7、请勿使用他人账号，严禁将账号借于他人使用，如导致本平台受损，将报由司法机关追责。'])
const scoreList = ref([
  { title: zhTransform('回款速度'),value: 5 },
  { title: zhTransform('回首时效'),value: 5 },
])
const btnList = ref([
  { title: zhTransform('交易步骤'), url: step },
  { title: zhTransform('常见问题'), url: question },
])

onMounted(async()=>{
  let _card = query.card
  if( _card === undefined ){
    await useCouponCatHook().setCouponCat()
    let _res = await getCouponInfo(useCouponCatHook().couponCat[0]._id)
    _card = _res.data[0]._id
  }
  let _res = await getCouponDetail(_card)
  cardInfo.value = _res.data
  commitInfo.value.cartoryId = _res.data.categoryId
  commitInfo.value.cardId = _res.data._id
  commitInfo.value.facevalue = _res.data.facevalues[0]
  couponsInfo.value[0].value = _res.data.categoryInfo.name + '卡'
  couponsInfo.value[1].value = cardInfo.value.name + ''
  couponsInfo.value[2].value = zhTransform(_res.data.facevalues[0] + '港元') + ''
  couponsInfo.value[3].value = (_res.data.facevalues[0] * ( _res.data.discount / 100 )) + 'HK$' + ''

  onChoseFaceValue(cardInfo.value.facevalues)

  onGetComment()
})
// 获取评论
const onGetComment = async () => {
  let res = await orderComment()
  commentList.value = res.data
  // _list.forEach(item => {
  //   item.score = JSON.parse(item.score)
  // });
  // scoreList.value = _list
}

const onChoseSell = (value) => {
  sellChose.value = value
  if( value === 2 ){
    accountInfo.value = [
      {url: account,placeholder: '请输入卡号',value: ''},
      {url: password,placeholder: '请输入卡密',value: ''},
    ]
    commitInfo.value.cardInfo = { number: '', pass: '' }
  }else{
    commitInfo.value.cards = ''
  }
}
const onChoseInfo = async (index)=>{
  actionIndex.value = index
  index !== 3 && (show.value = true)
  if( index === 1 ){
    let res = await getCouponInfo(commitInfo.value.cartoryId)
    cardList.value = res.data
  }
}
// 选择卡类
const onChoseKind = (value) => {
  // 记下卡类信息
  commitInfo.value.cartoryId = value._id
  couponsInfo.value[0].value = value.title + '卡'

  // 清除卡种和面值展示信息
  couponsInfo.value[1].value = '请选择卡种'
  couponsInfo.value[2].value = '请选择面值'
  couponsInfo.value[3].value = ''


  // 选择卡类清除卡种和面值信息
  commitInfo.value.cardId = ''
  commitInfo.value.facevalue = ''

  show.value = false
}
// 选择卡种
const onChoseCard = async (value) => {
  // 记下卡种信息
  commitInfo.value.cardId = value._id

  // 选择卡种清除卡类信息和面值信息
  commitInfo.value.facevalue = ''
  // 清除面值展示信息
  couponsInfo.value[2].value = '请选择面值'
  couponsInfo.value[3].value = ''

  let res = await getCouponDetail(value._id)
  onChoseFaceValue(res.data.facevalues)
  couponsInfo.value[1].value = value.name
  show.value = false
}

// 选择面值
const onChoseFace = (item:any) => {
  commitInfo.value.facevalue = item.title.split('港元')[0]
  couponsInfo.value[2].value = item.title
  couponsInfo.value[3].value = item.price
  show.value = false
  console.log(commitInfo.value)
}

const onGoPage = (title) => {
  title === zhTransform('交易步骤') && router.push('/orderStep')
  title === zhTransform('常见问题') && router.push('/question')
}
const onShowExample = (value) => {
  showExample.value = value
}

// 提交信息
const onCommit = async()=>{
  if( !commitInfo.value.cardId ){
    return showToast('请选择卡种')
  }
  if( !commitInfo.value.facevalue ){
    return showToast('请选择面值')
  }
  if( sellChose.value === 1 ){
    if( accountInfo.value[0].value === '' || accountInfo.value[1].value === '' ){
      return showToast('请填写卡号或卡密')
    }
    commitInfo.value.cardInfo.number = accountInfo.value[0].value
    commitInfo.value.cardInfo.pass = accountInfo.value[1].value
  }else{
    if( commitInfo.value.cards === '' ){
      return showToast('请填写多卡出售信息内容')
    }
  }
  commitInfo.value.facevalue = Number(commitInfo.value.facevalue)

  const res = await submitSell(commitInfo.value.cartoryId, commitInfo.value.cardId,commitInfo.value)
  if( res.code === 200 ){
    showToast('出售成功')
    router.push('/enter/order')
  }
}

// 匹配生成面值
const onChoseFaceValue = (list) => {
  faceList.value = []
  list.forEach((item)=>{
    faceList.value.push({title: item + '港元', discount: cardInfo.value.discount + '折', price: 'HK$' + item * ( cardInfo.value.discount / 100 )})
  })
}
</script>
<style lang="scss">
.coupons-sell{
  padding: 3rem;
  background: #f8fbff;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 120px;
  .coupons-sell__common{
    padding: 0 2rem;
    width: 69rem;
    margin: 0 auto 3rem;
    background: #fff;
    border-radius: 1.8rem;
    box-sizing: border-box;
  }
  .sell-info{
    .sell-info__item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 8.8rem;
      border-bottom: 1px solid rgba(0,0,0,.1);
      &>div{
        display: flex;
        align-items: center;
        font-size: 2rem;
        color: #7D8899;
        div{
          font-size: 2.4rem;
          color: #233762;
        }
      }
      img{
        width: 3.2rem;
        height: 3.2rem;
      }
      .sell-info__item__discount{
        background: #FFD7D7;
        font-size: 2rem;
        color: #E03323;
        padding: 0.2rem 1.35rem 0.6rem 1.45rem;
        box-sizing: border-box;
        border-radius: 0.6rem;
      }
    }
    .sell-info__item:last-child{
      border-bottom: none;
    }
  }
  .sell-card{
    padding: 2rem 2.4rem 0;
    box-sizing: border-box;
    background: #fff;
    border-radius: 1.8rem;
    margin-bottom: 3rem;
    .sell-card__chose{
      width: 64.2rem;
      height: 8.8rem;
      display: flex;
      align-items: center;
      border-bottom: 0.1rem solid rgba(0,0,0,.1);
    }
    .sell-card__chose__item{
      width: 9.6rem;
      text-align: center;
      margin-right: 6.4rem;
      .sell-card__chose__item__chose{
        color: #1B95FD;
      }
      img{
        width: 2.2rem;
        height: 1rem;
        margin-top: 0.8rem;
      }
      .sell__empty{
        width: 2.2rem;
        height: 1rem;
        margin-top: 2rem;
      }
    }
    .sell-card__one{
      .sell-card__one__item{
        height: 8.8rem;
        display: flex;
        align-items: center;
        border-bottom: 0.1rem solid rgba(0,0,0,.1);
        img{
          width: 3.2rem;
          height: 3.2rem;
          margin-right: 2.4rem;
        }
      }
      .sell-card__one__item:last-child{
        border-bottom: none;
      }
    }
    .sell-card__two{
      padding-top: 3rem;
      .sell-card__two__info{
        padding: 1.6rem 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 2rem;
        span:nth-of-type(1){
          color: #7D8899;
        }
        span:nth-of-type(2){
          color: #FB1639;
        }
      }
    }
  }
  .sell-illustrate{
    padding: 2.4rem;
    position: relative;
    .sell-illustrate__text{
      position: absolute;
      top: 3.4rem;
      right: 6rem;
      z-index: 2;
      color: #7D8899;
    }
    .van-hairline, .van-hairline--top, .van-hairline--left, .van-hairline--right, .van-hairline--bottom, .van-hairline--surround, .van-hairline--top-bottom{
      position: static;
    }
    .van-collapse-item__title .van-cell__right-icon:before{
      color: #BDC3CF;
      font-size: 1.2rem;
    }
    .van-cell{
      padding: 0;
      border: none;
    }
    .van-cell--clickable:active{
      background: #fff;
    }
    .van-cell:after{
      border: none;
    }
    .sell-illustrate__content{
      display: flex;
      align-items: center;
      font-size: 2.4rem;
      img{
        width: 4.8rem;
        height: 4.8rem;
        margin-right: 2.4rem;
      }
    }
  }
  .sell-evaluate{
    padding: 2.4rem;
    .sell-evaluate__head{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid rgba(0,0,0,.1);
      padding-bottom: 2rem;
      div{
        display: flex;
        align-items: center;
      }
      img{
        width: 4.8rem;
        height: 4.8rem;
      }
      div:nth-of-type(1){
        span{
          font-size: 2.4rem;
          color: #233762;
          margin-left: 2.4rem;
        }
      }
      div:nth-of-type(2){
        span{
          font-size: 2rem;
          color: #7D8899;
        }
        img{
          width: 3.2rem;
          height: 3.2rem;
          margin-left: 0.824rem;
        }
      }
    }
    .sell-evaluate__content{
      padding: 3rem 0;
      .sell-evaluate__content__head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 8.8rem;
          height: 8.8rem;
          margin-right: 2.4rem;
        }
        div:nth-of-type(1){
          display: flex;
          align-items: center;
          span{
            font-size: 2.4rem;
            color: #233762;
          }
        }
        .sell-evaluate__content__head__time{
          font-size: 2rem;
          color: #7D8899;
        }
      }
      .sell-evaluate__content__body{
        font-size: 2rem;
        color: #7D8899;
        text-align: left;
        margin: 3rem 0 3.4rem;
      }
      .sell-evaluate__content__score{
        div{
          display: flex;
          align-items: center;
          margin-bottom: 1.6rem;
          span{
            font-size: 2rem;
            color: #233762;
            margin-right: 1.6rem;
          }
          img{
            width: 3.2rem;
            height: 3.2rem;
            margin-right: 0.4rem;
          }
        }
      }
    }


  }
  .sell-evaluate__bottom{
    display: flex;
    justify-content: space-between;
    div{
      width: 33.2rem;
      height: 8.8rem;
      background: #fff;
      border-radius: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 4.8rem;
        height: 4.8rem;
        margin-right: 1rem;
      }
      span{
        font-size: 2.6rem;
        color: #233762;
      }
    }
  }
  .sell-evaluate__foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 75rem;
    height: 16rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    div{
      width: 69rem;
      height: 10rem;
      line-height: 10rem;
      font-size: 3.2rem;
      color: #FFFFFF;
      background: linear-gradient(180deg, #42CFFF 0%, #1E9AFF 100%);
      border-radius: 10rem;
    }
  }
  .showExample{
    width: 52rem;
    height: 59.4rem;
    background: transparent;
    p{
      width: 52rem;
      position: absolute;
      top: 18.9rem;
      color: #1B95FD;
      font-size: 2.2rem;
      text-align: center;
      line-height: 3.8rem;
    }
    .showExample__bg{
      width: 52rem;
      height: 48rem;
    }
    .showExample__cancel{
      width: 6.4rem;
      height: 6.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid #fff;
      margin: 3rem auto;
      img{
        width: 5.4rem;
        height: 5.4rem;
      }
    }
  }
}
</style>
<style lang="scss">
.coupons-sell{
  .sell-card__one{
    .van-field{
      padding: 0;
      border-bottom: none;
    }
  }
  .sell-card__two{
    .van-field{
      padding: 0;
    }
  }
  .van-dialog{
    border-radius: 0rem;
  }
  .van-action-sheet{
    background: #f8fbff;
    padding-bottom: 3rem;
  }
  .van-action-sheet__header{
    background: #fff;
  }
  .van-action-sheet__content{
    background: #f8fbff;
    padding: 3rem;
    padding-top: 1rem;
  }
}
</style>