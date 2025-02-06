import { View, Text } from "react-native";
import React from "react";
import DatePicker from "../../components/DatePicker";
const Statistic = () => {
  return (
    <View className="min-h-[100vh] p-2">
      <DatePicker></DatePicker>
      <View>
        <Text>溃疡总次数</Text>
        <Text>100</Text>
      </View>
      <View>
        <Text>昨日溃疡数量</Text>
        <Text>3</Text>
      </View>
      <View>
        <Text>本月溃疡次数</Text>
        <Text>100</Text>
      </View>
      <View>
        <Text>平均发作频率</Text>
        <Text>10天</Text>
      </View>
      <View>
        <Text>本月平均愈合时间</Text>
        <Text>10天</Text>
      </View>
      <View>
        <Text>发作时间分布(瓷砖图)</Text>
        <Text>10天</Text>
      </View>
      <View>
        <Text>溃疡大小分布</Text>
        <Text>10天</Text>
      </View>
      <View>
        <Text>疼痛程度分布</Text>
        <Text>10天</Text>
      </View>
      <View>
        <Text>常见位置分布</Text>
        <Text>10天</Text>
      </View>
    </View>
  );
};

export default Statistic;
