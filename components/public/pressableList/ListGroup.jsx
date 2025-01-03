import { VStack } from "@/components/ui/vstack";
const PressableListGroup = ({ children }) => {
  return (
    <VStack space="md" className="mx-3 my-5">
      {children}
    </VStack>
  );
};

export default PressableListGroup;
