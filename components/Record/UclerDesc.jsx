import { RecordFormItem } from "./RecordFormItem";
import { icons } from "../../constants";
import { Input, View } from "@ant-design/react-native";
import { Card } from "../ui/card";

export default UclerDesc = ({ desc, onEdit }) => {
  return (
    <RecordFormItem
      otherStyle="flex-col items-start h-auto gap-2"
      name="备注"
      icon={icons.hasUcler}
    >
      <Card variant="outline" className="w-full p-2">
        <Input.TextArea
          inputStyle={{ fontSize: 12, paddingBottom: 0, paddingTop: 0 }}
          placeholder="请输入备注"
          rows={4}
          style={{ height: "auto", minHeight: 32 }}
          value={desc}
          defaultValue={desc}
          onChangeText={(value) => {
            onEdit(
              {
                description: value,
              },
              true
            );
          }}
        ></Input.TextArea>
      </Card>
    </RecordFormItem>
  );
};
