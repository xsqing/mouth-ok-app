import React, { useEffect } from "react";
import { View } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import { updateRecord } from "../../api/record";
export default RecordForm = ({ ucler, setUclerData, statsRefetch }) => {
  const onItemPress = (data) => {
    updateRecord(ucler?.id, data).then(() => {
      statsRefetch();
    });
    setUclerData({
      ...ucler,
      ...data,
    });
  };
  return (
    <View className="p-4 flex-col gap-2">
      <HasUcler hasUcler={ucler?.isUcler} onItemPress={onItemPress} />
      {ucler?.isUcler ? (
        <PainLevel painLevel={ucler?.painLevel} onItemPress={onItemPress} />
      ) : null}
    </View>
  );
};
