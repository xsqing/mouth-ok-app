import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
export default Statistic = ({ count, currentDate }) => {
  return (
    <HStack className="px-4 py-2 mx-6 items-center">
      <VStack className="max-w-max">
        <HStack>
          <Text className="text-2xl">{currentDate?.month}</Text>
          <Text className="text-2xl">月</Text>
        </HStack>
        <Text className="text-2xl">溃疡</Text>
      </VStack>
      <VStack className="flex-1">
        <Text className="text-secondary text-xl ml-4">
          {count === undefined ? "-" : count}
        </Text>
        <Text className="text-secondary text-xl ml-4">天</Text>
      </VStack>
    </HStack>
  );
};
