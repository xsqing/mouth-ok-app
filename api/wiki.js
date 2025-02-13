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

/**
 * 获取wiki详情
 * @param {string} id
 * @returns
 */
export const getWikiById = async (id) => {
  try {
    const res = await request.get(`/wiki/detail?id=${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
