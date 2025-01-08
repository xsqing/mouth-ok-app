import React, { useEffect } from "react";
import { View, Text } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import UclerCount from "./UclerCount";
import { ActivityIndicator } from "@ant-design/react-native";
import { updateRecord } from "../../api/record";
export default RecordForm = ({
  ucler,
  setUclerData,
  statsRefetch,
  uclerRefetch,
  isLoading,
}) => {
  const onItemPress = (data) => {
    // 本地数据更新
    setUclerData({
      ...ucler,
      ...data,
    });

    // 服务器数据更新
    updateRecord(ucler?.id, data).then(() => {
      // 刷新统计数据
      if (shouldRefetchStats(data)) {
        statsRefetch();
      }

      // 更新好后,刷新
      uclerRefetch();
    });
  };

  const shouldRefetchStats = (data) => {
    return Object.keys(data).includes("isUcler");
  };
  return (
    <View className="mt-2 gap-2">
      <View className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2   z-50">
        <ActivityIndicator animating={isLoading} size="large" />
      </View>
      <HasUcler hasUcler={ucler?.isUcler} onItemPress={onItemPress} />
      {ucler?.isUcler ? (
        <>
          <UclerCount
            count={ucler?.count}
            onItemPress={onItemPress}
          ></UclerCount>
          <PainLevel painLevel={ucler?.painLevel} onItemPress={onItemPress} />
        </>
      ) : null}
    </View>
  );
};
