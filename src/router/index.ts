import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/layoutIndex.vue'
import {zhTransform}  from '@/utils'
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
    path: '/couponsSell',
    name: 'couponsSell',
    component: () => import("@/views/order/couponsSell.vue"),
    meta: {
      title: "卡券出售"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = zhTransform(to.meta?.title);
  }

  next()
})

export default router
