import { Text, View } from "react-native";

export default function NoData({ className, msg = "暂无数据" }) {
  return (
    <View className={`h-40 justify-center items-center ${className}`}>
      <Text className="text-xl text-gray-500">{msg}</Text>
    </View>
  );
}
