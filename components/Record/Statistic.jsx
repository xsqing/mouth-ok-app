import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";
export default Statistic = ({ count, currentDate }) => {
  return (
    <HStack className="px-4 py-2 mx-6">
      <View>
        <Text className=" text-2xl font-psemibold">{currentDate?.month}月</Text>
        <Text className=" text-2xl font-psemibold">溃疡</Text>
      </View>
      <View>
        <Text className="text-secondary text-xl font-psemibold ml-4">
          {count === undefined ? "-" : count}
        </Text>
        <Text className="text-secondary text-xl font-psemibold ml-4">天</Text>
      </View>
    </HStack>
  );
};
