import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs from "dayjs";
import { useRequest } from "ahooks";

// api
import { getRecordByDate, getMonthStatistics } from "../../api/record";

// components
import Calendar from "@/components/Calendar";
import Separator from "@/components/Separator";
import Statistic from "@/components/Record/Statistic";

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
  const { data: recordDataByDate, loading: recordLoading } = useRequest(
    () => getRecordByDate(currSelectedDate.dateString),
    {
      refreshDeps: [currSelectedDate.dateString],
    }
  );

  /**
   * 获取当前月份的统计数据
   * @param {string} month
   */
  const { data: monthStatisticsData, loading: monthStatisticsLoading } =
    useRequest(
      () =>
        getMonthStatistics(
          `${currSelectedDate.year}-${currSelectedDate.month}`
        ),
      {
        refreshDeps: [currSelectedDate.month, currSelectedDate.year],
      }
    );

  const handleCurrentMonthMarked = (data) => {
    if (data) {
      data.forEach((ucler) => {
        if (currentMonthSelected[ucler.date]) {
          currentMonthSelected[ucler.date].marked = true;
        } else {
          currentMonthSelected[ucler.date] = {
            marked: true,
          };
        }
      });
      setCurrentMonthSelected({ ...currentMonthSelected });
    }
  };
  useEffect(() => {
    if (monthStatisticsData) {
      handleCurrentMonthMarked(monthStatisticsData.selected);
    }
  }, [monthStatisticsData]);

  return (
    <SafeAreaView className="pt-5">
      <ScrollView>
        <View className="min-h-[100vh] pb-5">
          <Statistic
            currentDate={currSelectedDate}
            count={monthStatisticsData?.count}
          />
          <Separator />
          <Calendar
            onDayPress={onDayPress}
            markedDates={currentMonthSelected}
            onMonthChange={onDayPress}
          />

          <View className="mt-5 px-4 gap-2"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Record;
