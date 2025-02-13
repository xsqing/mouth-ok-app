import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useFavicon, useRequest } from "ahooks";

// api
import { getRecordByDate, getMonthStatistics } from "../../api/record";

// components
import Calendar from "@/components/Calendar";
import Statistic from "@/components/Record/Statistic";
import RecordForm from "@/components/Record/RecordForm";
import { Card } from "../../components/ui/card";

// Record
const Record = () => {
  const today = dayjs();
  // 当前选中的日期
  const [currSelectedDate, setCurrSelectedDate] = useState({
    dateString: today.format("YYYY-MM-DD"),
    day: today.format("D"),
    month: today.format("M"),
    timestamp: today.valueOf(),
    year: today.format("YYYY"),
  });

  // 当前月份日期的选中状态
  const [currentMonthSelected, setCurrentMonthSelected] = useState({
    [currSelectedDate.dateString]: { selected: true },
  });

  //右侧切换月份是否可以点击
  const [disableArrowRight, setDisableArrowRight] = useState(false);

  useEffect(() => {
    const disable =
      today.format("YYYY-M") ===
      `${currSelectedDate.year}-${currSelectedDate.month}`;
    setDisableArrowRight(disable);
  }, [currSelectedDate]);

  /**
   * {"dateString": "2024-12-30", "day": 30, "month": 12, "timestamp": 1735516800000, "year": 2024}
   * @param {object} date
   */
  const onDayPress = (date) => {
    setCurrSelectedDate({
      ...date,
    });
    handleCurrentMonthSelected(date.dateString);
  };

  /**
   * 处理当前月份日期的选中状态
   * @param {*} dateString
   */
  const handleCurrentMonthSelected = (dateString) => {
    for (const key in currentMonthSelected) {
      const current = currentMonthSelected[key];
      current.selected = false;
    }
    if (currentMonthSelected[dateString]) {
      currentMonthSelected[dateString].selected = true;
    } else {
      currentMonthSelected[dateString] = {
        selected: true,
      };
    }
    setCurrentMonthSelected({ ...currentMonthSelected });
  };

  /**
   * 获取当前日期的数据
   * @param {string} day
   */
  const {
    data: recordDataByDate,
    loading: recordLoading,
    mutate: setRecordDataByDate,
    refresh: recordRefetch,
  } = useRequest(() => getRecordByDate(currSelectedDate.dateString), {
    refreshDeps: [currSelectedDate.dateString],
  });

  /**
   * 获取当前月份的统计数据
   * @param {string} month
   */
  const {
    data: monthStatisticsData,
    loading: monthStatisticsLoading,
    refresh: monthStatisticsRefetch,
  } = useRequest(
    () =>
      getMonthStatistics(`${currSelectedDate.year}-${currSelectedDate.month}`),
    {
      refreshDeps: [currSelectedDate.month, currSelectedDate.year],
    }
  );

  // 将本月选中的数据进行处理供日历组件使用
  const handleCurrentMonthMarked = (data) => {
    if (data) {
      const temp = {};
      data.forEach((ucler) => {
        temp[ucler.date] = { marked: true };
      });
      if (temp[currSelectedDate.dateString]) {
        temp[currSelectedDate.dateString].selected = true;
      } else {
        temp[currSelectedDate.dateString] = {
          selected: true,
        };
      }
      setCurrentMonthSelected({ ...temp });
    } else {
      setCurrentMonthSelected({});
    }
  };
  useEffect(() => {
    if (monthStatisticsData) {
      handleCurrentMonthMarked(monthStatisticsData.selected);
    }
  }, [monthStatisticsData]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="min-h-[100vh] p-4">
        {/* <Statistic
          currentDate={currSelectedDate}
          count={monthStatisticsData?.count}
        /> */}
        <Card>
          <Calendar
            onDayPress={onDayPress}
            markedDates={currentMonthSelected}
            onMonthChange={onDayPress}
            disableArrowRight={disableArrowRight}
          />
        </Card>
        <RecordForm
          ucler={recordDataByDate}
          setUclerData={setRecordDataByDate}
          statsRefetch={monthStatisticsRefetch}
          uclerRefetch={recordRefetch}
          isLoading={recordLoading}
        />
        <View className="mt-5 px-4 gap-2"></View>
      </View>
    </ScrollView>
  );
};

export default Record;
