import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="about"></Stack.Screen>
        <Stack.Screen name="privacy"></Stack.Screen>
        <Stack.Screen name="feedback"></Stack.Screen>
        <Stack.Screen name="vip"></Stack.Screen>
      </Stack>
    </>
  );
};

export default ProfileLayout;
