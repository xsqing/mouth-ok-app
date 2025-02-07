import { RecordFormItem } from "./RecordFormItem";
import { icons } from "../../constants";
import { View, Image, Pressable } from "react-native";
import Badge from "../public/Badge/UclerSizeBadge";

/**
 * 溃疡大小, 不同等级的溃疡数量：长按-1，单击+1，最少为0
 */
export default UclerSize = ({ size = [0, 0, 0, 0, 0], onEdit }) => {
  const onLongPress = (index) => {
    if (size[index] === 0) return;
    size[index] = size[index] - 1;
    onEdit({
      size,
    });
  };
  const onPress = (index) => {
    size[index] = size[index] + 1;
    onEdit({
      size,
    });
  };
  return (
    <RecordFormItem name="溃疡大小" icon={icons.uclerSizeIcon}>
      <View className="flex-row gap-2">
        {size.map((item, index) => {
          return (
            <Badge key={index} text={item}>
              <Pressable
                key={index}
                onLongPress={() => onLongPress(index)}
                onPress={() => onPress(index)}
              >
                <View className="w-8 h-8 items-center justify-center">
                  <Image
                    source={
                      item > 0 ? icons.uclerSizeSelected : icons.uclerSize
                    }
                    className={`w-${index + 2} h-${index + 2}`}
                  ></Image>
                </View>
              </Pressable>
            </Badge>
          );
        })}
      </View>
    </RecordFormItem>
  );
};
