import { RecordFormItem } from "./RecordFormItem";
import { icons } from "../../constants";
import { Stepper } from "@ant-design/react-native";
export default UclerCount = ({ count = 1, onItemPress }) => {
  const handleChange = (value) => {
    onItemPress({
      count: value,
    });
  };
  return (
    <RecordFormItem name="溃疡数量" icon={icons.uclerCount}>
      <Stepper
        min={1}
        defaultValue={count}
        value={count}
        onChange={handleChange}
      ></Stepper>
    </RecordFormItem>
  );
};
