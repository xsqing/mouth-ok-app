import React, { useEffect } from "react";
import { View } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import UclerCount from "./UclerCount";
import { updateRecord } from "../../api/record";
export default RecordForm = ({
  ucler,
  setUclerData,
  statsRefetch,
  uclerRefetch,
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
    <View className="mt-2 flex-col gap-2 mx-2">
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
