import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
const Profile = () => {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView>
        <View className="min-h-[100vh] pb-5 pt-5 relative">
          <Text className="text-white text-xl font-psemibold text-center mb-5">
            我的
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
