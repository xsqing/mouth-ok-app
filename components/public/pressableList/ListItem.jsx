import { HStack } from "@/components/ui/hstack";
import { Icon, ChevronRightIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Link } from "expo-router";

const PressableListItem = ({
  name,
  href,
  onPress,
  icon = ChevronRightIcon,
}) => {
  return (
    <Link href={href} onPress={onPress}>
      <Card className>
        <HStack className="w-full justify-between items-center">
          <Text>{name}</Text>
          <Icon as={icon} />
        </HStack>
      </Card>
    </Link>
  );
};

export default PressableListItem;
