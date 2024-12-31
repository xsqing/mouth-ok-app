import { View, Switch } from "react-native";
import React from "react";
import { RecordFormItem } from "../../app/(tabs)/record/components/RecordFormItem";
import { icons } from "../../constants";
import theme from "../../constants/theme";

const HasUcler = ({ hasUcler, onItemPress }) => {
  const toggleSwitch = () => {
    onItemPress({
      hasUcler: !hasUcler,
    });
  };
  return (
    <RecordFormItem name="是否溃疡" icon={icons.hasUcler}>
      <View>
        <Switch
          trackColor={{ false: theme.gray_300, true: theme.secondary }}
          thumbColor={hasUcler ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={hasUcler}
        />
      </View>
    </RecordFormItem>
  );
};

export default HasUcler;
