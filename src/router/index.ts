import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/layoutIndex.vue'
import {zhTransform}  from '@/utils'
import {getToken} from '@/utils/auth'
import { showToast } from 'vant';
import { useUserStoreHook, } from "@/store/modules/user";
import { useCouponCatHook } from "@/store/modules/card";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/enter',
    name: 'enter',
    component: Layout,
    redirect: "/enter/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/homeIndex.vue"),
        meta: {
          title: "港回收",
        },
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import("@/views/coupons/couponsIndex.vue"),
        meta: {
          title: "卡券列表"
        }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import("@/views/order/orderIndex.vue"),
        meta: {
          title: "订单中心"
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import("@/views/mine/mineIndex.vue"),
        meta: {
          title: "个人中心"
        }
      },
    ]
  },
  {
    path: '/orderStep',
    name: 'orderStep',
    component: () => import("@/views/order/orderStep.vue"),
    meta: {
      title: "交易步骤"
    }
  },
  {
    path: '/setAccount',
    name: 'setAccount',
    component: () => import("@/views/mine/setAccount.vue"),
    meta: {
      title: "账户设置"
    }
  },
  {
    path: '/modifyName',
    name: 'modifyName',
    component: () => import("@/views/mine/modifyName.vue"),
    meta: {
      title: "昵称修改"
    }
  },
  {
    path: '/realName',
    name: 'realName',
    component: () => import("@/views/mine/realName.vue"),
    meta: {
      title: "实名认证"
    }
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: () => import("@/views/mine/setPassword.vue"),
    meta: {
      title: "设置/修改交易密码"
    }
  },
  {
    path: '/systemInfo',
    name: 'systemInfo',
    component: () => import("@/views/order/systemInfo.vue"),
    meta: {
      title: "系统公告"
    }
  },
  {
    path: '/couponsSell',
    name: 'couponsSell',
    component: () => import("@/views/order/couponsSell.vue"),
    meta: {
      title: "卡券出售"
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/home/registerIndex.vue"),
    meta: {
      title: "注册"
    }
  },
  {
    path: '/shareIllustrate',
    name: 'shareIllustrate',
    component: () => import("@/views/extra/shareIllustrate.vue"),
    meta: {
      title: "分拥说明"
    }
  },
  {
    path: '/toUnderstand',
    name: 'toUnderstand',
    component: () => import("@/views/extra/toUnderstand.vue"),
    meta: {
      title: "回收说明"
    }
  },
  {
    path: '/shareCode',
    name: 'shareCode',
    component: () => import("@/views/extra/shareCode.vue"),
    meta: {
      title: "分享码"
    }
  },
  {
    path: '/choseBank',
    name: 'choseBank',
    component: () => import("@/views/extra/choseBank.vue"),
    meta: {
      title: "选择银行账户"
    }
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import("@/views/extra/partner.vue"),
    meta: {
      title: "我的伙伴"
    }
  },
  {
    path: '/question',
    name: 'question',
    component: () => import("@/views/extra/commonQuestion.vue"),
    meta: {
      title: "常见问题"
    }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import("@/views/extra/withdraw.vue"),
    meta: {
      title: "我要提现"
    }
  },
  {
    path: '/withdrawalsRecords',
    name: 'withdrawalsRecords',
    component: () => import("@/views/extra/withdrawalsRecords.vue"),
    meta: {
      title: "提现记录"
    }
  },
  {
    path: '/promotionDetails',
    name: 'promotionDetails',
    component: () => import("@/views/extra/promotionDetails.vue"),
    meta: {
      title: "推广收益明细"
    }
  },
  {
    path: '/accountOption',
    name: 'accountOption',
    component: () => import("@/views/extra/accountOption.vue"),
    meta: {
      title: "选择提现账户"
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = zhTransform(to.meta?.title);
  }
  if(getToken()){
    if (to.path.indexOf('/enter') !== -1 || to.path.indexOf('/setAccount') !== -1) {
      try {
        await useCouponCatHook().setCouponCat();
      } catch (error) {
        showToast('用户信息失效，请重新登录！')

      }
    }
    next()
  }else{
     if(to.path === '/register'){
        next()
      }else{
        showToast('用户信息失效，请重新登录！')
        next('/register')
      }
    next()
  }
  next()
})

export default router
