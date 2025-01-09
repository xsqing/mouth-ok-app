import { Icon } from "@ant-design/react-native";
import { outlineIcons } from "../constants/antd-outline-icons";
import { View, Text, Pressable } from "react-native";
import dayjs from "dayjs";
export default DatePicker = ({ type = "month", defaultValue }) => {
  const onLeftArrowPress = () => {
    console.log("left arrow press");
  };
  const onRightArrowPress = () => {
    console.log("right arrow press");
  };
  const onDownArrowPress = () => {
    console.log("down arrow press");
  };
  return (
    <View>
      <View className="flex-row justify-center items-center gap-6">
        <Pressable onPress={onLeftArrowPress}>
          <Icon name={outlineIcons.left} size="xs" color="#000"></Icon>
        </Pressable>

        <Pressable onPress={onDownArrowPress}>
          <View className="flex-row gap-1 items-center">
            <Text>2023-01</Text>
            <Icon name={outlineIcons.down} size="xxs" color="#000"></Icon>
          </View>
        </Pressable>
        <Pressable onPress={onRightArrowPress}>
          <Icon name={outlineIcons.right} size="xs" color="#000"></Icon>
        </Pressable>
      </View>
    </View>
  );
};
