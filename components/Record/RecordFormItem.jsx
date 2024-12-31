import { Image, Text, View } from "react-native";

export const RecordFormItem = ({ children, otherStyle, icon, name }) => {
  return (
    <View
      className={` h-16  border-border border-[1px] rounded-xl border-gray-600 ${otherStyle} flex-row justify-between items-center px-2`}
    >
      <View className="flex-row justify-between items-center gap-2">
        <Image className="!w-6 !h-6" source={icon} resizeMode="contain" />
        <Text className="text-white text-sm">{name}</Text>
      </View>
      {children}
    </View>
  );
};
