/**
 * 获取整个生命周期的统计数据
 */
export async function getStatisticsByLifecycle() {
  try {
    const res = await request.get("ucler/getStatisticsByLifecycle");
    return res.data;
  } catch (error) {
    return null;
  }
}
