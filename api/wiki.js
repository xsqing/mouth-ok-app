import request from "./request";

/**
 * 获取wiki列表
 * @returns
 */
export const getWikiList = async () => {
  try {
    const res = await request.get("/wiki/all");
    return res.data;
  } catch (error) {
    return null;
  }
};
