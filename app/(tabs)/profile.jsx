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
  const { isLogin, user } = useAuth();

  const handleLogout = async () => {
    try {
      await clearAuth();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="min-h-[100vh] pb-5 pt-5">
      <Card className="mx-3">
        <HStack space="md" className="items-center">
          <Avatar size="lg">
            <AvatarFallbackText>{user.username}</AvatarFallbackText>
          </Avatar>
          <VStack>
            <Heading size="md">{user.username}</Heading>
            <Text className="text-gray-400" size="sm">
              千里之行，始于足下
            </Text>
          </VStack>
        </HStack>
      </Card>
      <PressableListGroup>
        <PressableListItem name="会员" href="(profile)/vip" />
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
      <Text className="text-center text-gray-400 mt-8">
        --行走之路始于足下，健康之基成于日常--
      </Text>
    </View>
  );
};

export default Profile;
