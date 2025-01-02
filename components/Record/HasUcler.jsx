import { View } from "react-native";
import React from "react";
import { RecordFormItem } from "./RecordFormItem";
import { icons } from "../../constants";
import { Switch } from "@/components/ui/switch";

const HasUcler = ({ hasUcler, onItemPress }) => {
  const toggleSwitch = () => {
    onItemPress({
      isUcler: !hasUcler ? 1 : 0,
    });
  };
  return (
    <RecordFormItem name="是否溃疡" icon={icons.hasUcler}>
      <View>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={hasUcler ? true : false}
        />
      </View>
    </RecordFormItem>
  );
};

export default HasUcler;
