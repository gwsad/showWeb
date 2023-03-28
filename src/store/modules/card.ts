import store from "@/store";
import { defineStore } from "pinia";
import { getCouponCategory } from '@/api/home'

export const useCouponCat = defineStore({
  id: "pure-app",
  state: () => ({
    couponCat: []
  }),
  getters: {
    getCouponCat() {
      return this.couponCat;
    }
  },
  actions: {
    async setCouponCat() {
      const res = await getCouponCategory();
      this.couponCat = res.data;
    }
  }
});

export function useCouponCatHook() {
  return useCouponCat(store);
}
