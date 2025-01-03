import { Text, View } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Card } from "@/components/ui/card";
import dayjs from "dayjs";
export default Statistic = ({ count, currentDate }) => {
  return (
    <Card className="rounded-lg m-3">
      <HStack className="items-center">
        <VStack className="max-w-max">
          <HStack>
            <Text className="text-2xl text-center min-w-[1em]">
              {currentDate?.month}
            </Text>
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
    </Card>
  );
};
