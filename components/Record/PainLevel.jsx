import { View, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { TouchableOpacity } from "react-native";
import { RecordFormItem } from "./RecordFormItem";

/**
 *
 * @param {Number} painLevel 用于回显疼痛等级
 * @returns
 */
const PainLevel = ({ painLevel, onItemPress }) => {
  const painLeves = [
    { level: 1, icon: icons.pain_1 },
    { level: 2, icon: icons.pain_2 },
    { level: 3, icon: icons.pain_3 },
    { level: 4, icon: icons.pain_4 },
    { level: 5, icon: icons.pain_5 },
  ];
  const handlePress = (level) => {
    // 同步疼痛等级数据
    onItemPress({
      painLevel: level,
    });
  };

  return (
    <RecordFormItem name="疼痛等级" icon={icons.painess}>
      <View className="flex-row gap-2">
        {painLeves.map((item) => {
          return (
            <TouchableOpacity
              key={item.level}
              onPress={() => {
                handlePress(item.level);
              }}
            >
              <Image
                source={item.icon}
                className={`!w-6 !h-6 ${
                  painLevel === item.level ? "" : "opacity-50"
                }`}
              ></Image>
            </TouchableOpacity>
          );
        })}
      </View>
    </RecordFormItem>
  );
};

export default PainLevel;
