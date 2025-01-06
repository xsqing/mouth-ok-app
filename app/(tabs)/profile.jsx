import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import PressableListGroup from "../../components/public/pressableList/ListGroup";
import PressableListItem from "../../components/public/pressableList/ListItem";
import React from "react";
const Profile = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View className="min-h-[100vh] pb-5 pt-5">
        <Text className="text-xl text-center mb-5">我的</Text>
        <Card className="mx-3">
          <HStack space="md" className="items-center">
            <Avatar size="lg">
              <AvatarFallbackText>你 好</AvatarFallbackText>
            </Avatar>
            <VStack>
              <Heading size="sm">Ronald Richards</Heading>
              <Text size="sm">Nursing Assistant</Text>
            </VStack>
          </HStack>
        </Card>
        <PressableListGroup>
          <PressableListItem name="会员" href="(profile)/vip" />
          <PressableListItem name="个人信息" href="(profile)/abouts" />
          <PressableListItem name="反馈" href="(profile)/feedback" />
          <PressableListItem name="关于" href="(profile)/about" />
        </PressableListGroup>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
