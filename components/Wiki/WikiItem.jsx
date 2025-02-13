import { Pressable, Text, View } from "react-native";
import { Card } from "../ui/card";

export default function WikiItem({ data, index = 0 }) {
  return (
    <Pressable>
      <View className="flex-row gap-4 bg-white">
        <Text className="text-gray-500">{index + 1}</Text>
        <View>
          <Text>{data.title}</Text>
          <Text>{data.readCount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
