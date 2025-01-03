import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Icon, ChevronRightIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const PressableListItem = ({ name, href, icon = ChevronRightIcon }) => {
  return (
    <Pressable>
      <Card className>
        <HStack className="w-full justify-between items-center">
          <Text>{name}</Text>
          <Icon as={icon} />
        </HStack>
      </Card>
    </Pressable>
  );
};

export default PressableListItem;
