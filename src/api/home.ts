import { http } from "@/utils/http";


export const getHomeMessage = () => {
  return http.request("get", "/api/topic/orderlist");
}
