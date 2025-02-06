import { View, Text } from "react-native";

/**
 * badge组件，显示溃疡数量
 */
export default function UclerSizeBadge({ text = 0, children }) {
  return (
    <View className="items-center justify-center relative">
      {text > 0 && (
        <Text className={`absolute top-[-8px] left-0 text-sm text-warning-500`}>
          {text}
        </Text>
      )}
      {children}
    </View>
  );
}
