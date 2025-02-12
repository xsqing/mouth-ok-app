import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import PressableListGroup from "../../components/public/pressableList/ListGroup";
import PressableListItem from "../../components/public/pressableList/ListItem";
import React from "react";
import { useAuth, clearAuth } from "../../context/authContext";
import { router } from "expo-router";
const Profile = () => {
  const { isLogin } = useAuth();

  const handleLogout = async () => {
    try {
      await clearAuth();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
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
        <View className="px-4">
          {isLogin ? (
            <Button onPress={handleLogout}>
              <ButtonText>退出登录</ButtonText>
            </Button>
          ) : (
            <Button onPress={() => router.push("(auth)/login")}>
              <ButtonText>立即登录</ButtonText>
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
