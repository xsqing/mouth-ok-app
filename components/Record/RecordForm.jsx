import React, { useEffect } from "react";
import { View, Text } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import UclerCount from "./UclerCount";
import UclerSize from "./UclerSize";
import { ActivityIndicator } from "@ant-design/react-native";
import { updateRecord } from "../../api/record";
import UclerDesc from "./UclerDesc";
import { useDebounceFn } from "ahooks";
export default RecordForm = ({
  ucler,
  setUclerData,
  statsRefetch,
  uclerRefetch,
  isLoading,
}) => {
  const onItemPress = (data, shouldDebounce = false) => {
    // 本地数据更新
    setUclerData({
      ...ucler,
      ...data,
    });

    if (shouldDebounce) {
      // 延时更新
      handleUpdateDebounce(data);
    } else {
      // 立即更新
      handleUpdate(data);
    }
  };

  const handleUpdate = (data) => {
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

  const { run: handleUpdateDebounce } = useDebounceFn(handleUpdate, {
    wait: 1000,
  });

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
          <UclerSize size={ucler?.size} onEdit={onItemPress}></UclerSize>
          <UclerDesc desc={ucler?.description} onEdit={onItemPress}></UclerDesc>
        </>
      ) : null}
    </View>
  );
};
