import request from "./request";

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return request.get("/user/info");
}
