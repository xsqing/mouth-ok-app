import request from "./request";

/**
 * 根据当前日期获取记录
 * @param {string } date YYYY-MM-DD
 * @returns
 */
export const getRecordByDate = async (date) => {
  try {
    const res = await request.get("ucler/findByDateWithoutCreate", {
      params: { date },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const createRecordByDate = async (date, user) => {
  // const record = new Record();
  // record.set("hasUcler", false);
  // record.set("owner", user);
  // record.set("date", date);
  // console.log(record);
  // // try {
  // await record.save();
  // return record;
  // } catch (error) {
  //   ErrorAlert();
  // }
};

export const updateRecord = async (recordId, kvMap) => {
  if (!recordId) {
    return null;
  }
  try {
    const res = await request.post(`ucler/update`, { id: recordId, ...kvMap });
    return res.data;
  } catch (error) {
    return null;
  }
};

/**
 * 获取当月统计的数据
 * 1.本月一共溃疡天数
 * 2.今天是否溃疡
 * @param {string} month 日期字符串 YYYY-MM
 */
export const getMonthStatistics = async (month) => {
  try {
    const res = await request.get("ucler/getStatisticsByMonth", {
      params: { month },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

const getMarkedDays = (records) => {
  // const markedDays = {};
  // for (const record of records) {
  //   let date = record.get("date");
  //   date = dayjs(date).format("YYYY-MM-DD");
  //   markedDays[date] = { marked: true };
  // }
  // return markedDays;
};
