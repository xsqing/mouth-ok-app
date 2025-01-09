import { Image, Text, View } from "react-native";
import { Card } from "@/components/ui/card";

export const RecordFormItem = ({ children, otherStyle, icon, name }) => {
  return (
    <Card
      className={`rounded-lg h-16 flex-row justify-between items-center px-2 ${otherStyle}`}
    >
      <View className="flex-row justify-between items-center gap-2">
        <Image className="!w-6 !h-6" source={icon} resizeMode="contain" />
        <Text className=" text-sm">{name}</Text>
      </View>
      {children}
    </Card>
  );
};
