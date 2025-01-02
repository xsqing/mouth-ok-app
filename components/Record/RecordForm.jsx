import React, { useEffect } from "react";
import { View } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import { updateRecord } from "../../api/record";
export default RecordForm = ({ ucler, setUclerData, statsRefetch }) => {
  let recordId;
  if (ucler) {
    recordId = ucler.id;
  }
  const onItemPress = async (data) => {
    updateRecord(recordId, data).then(() => {
      if (data.isUcler !== undefined) {
        statsRefetch();
      }
    });
    setUclerData(data);
  };
  return (
    <View className="p-4 flex-col gap-2">
      <HasUcler
        recordId={recordId}
        hasUcler={ucler?.isUcler}
        onItemPress={onItemPress}
      />
      {ucler?.isUcler ? (
        <PainLevel
          recordId={recordId}
          painLevel={ucler?.painLevel}
          onItemPress={onItemPress}
        />
      ) : null}
    </View>
  );
};
