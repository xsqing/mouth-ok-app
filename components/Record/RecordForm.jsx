import React from "react";
import { View } from "react-native";
import HasUcler from "./HasUcler";
import PainLevel from "./PainLevel";
import { updateRecord } from "../../api/record";
export default RecordForm = ({ ucler, setUclerData, statsRefetch }) => {
  let recordId;
  if (ucler) {
    recordId = ucler.objectId;
  }
  const onItemPress = async (data) => {
    updateRecord(recordId, data).then(() => {
      if (data.hasUcler !== undefined) {
        statsRefetch();
      }
    });
    setUclerData(data);
  };
  return (
    <View className="p-4 flex-col gap-2">
      <HasUcler
        recordId={recordId}
        hasUcler={ucler?.hasUcler}
        onItemPress={onItemPress}
      />
      {ucler?.hasUcler && (
        <PainLevel
          recordId={recordId}
          painLevel={ucler?.painLevel}
          onItemPress={onItemPress}
        />
      )}
    </View>
  );
};
