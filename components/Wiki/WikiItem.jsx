import { Pressable, Text, View } from "react-native";
import { Card } from "../ui/card";
import { Image } from "../ui/image";
export default function WikiItem({ data, index = 0 }) {
  return (
    <Pressable>
      {({ pressed }) => (
        <View
          className={`flex-row gap-4 bg-gray-100 p-4 rounded-md ${
            pressed ? "opacity-80" : ""
          }`}
        >
          <Text className="text-primary text-xl font-semibol ">
            {index + 1}
          </Text>
          <View className="flex-1">
            <Text className="text-xl font-semibold">{data.title}</Text>
            <Text className="text-gray-500 text-sm mt-1">
              {data.readCount + "阅读"}
            </Text>
          </View>
          <Image
            className="items-end rounded-md"
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            alt="Logo"
            size="sm"
          ></Image>
        </View>
      )}
    </Pressable>
  );
}
