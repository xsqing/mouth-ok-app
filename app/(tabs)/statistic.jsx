import { View, Text } from "react-native";
import React from "react";
import { useRequest } from "ahooks";
import StatisticItem from "@/components/Statistic/StatisticItem";
import { getStatisticsByLifecycle } from "@/api/statistics";
import { useFocusEffect } from "expo-router";

const Statistic = () => {
  const { data, refresh } = useRequest(getStatisticsByLifecycle);
  useFocusEffect(refresh);
  return (
    <View className="min-h-[100vh] p-2">
      <Text className="text-xl font-medium mb-2 text-center text-gray-600 tracking-wide">
        自{data?.firstRecordTime}至今
      </Text>
      <View className="flex-row gap-2 mb-2">
        <StatisticItem title="溃疡总次数" data={data?.times} />
        <StatisticItem title="昨日溃疡数量" data={data?.currentDayUclerCount} />
      </View>
      <View className="flex-row gap-2 mb-2">
        <StatisticItem
          title="平均发作频率(次/月)"
          data={data?.uclerFrequencyPerMonth}
        />
        <StatisticItem
          title="平均愈合时间"
          data={
            data?.averageHealingTime
              ? data?.averageHealingTime + "天"
              : "暂无数据"
          }
        />
      </View>
    </View>
  );
};

export default Statistic;
