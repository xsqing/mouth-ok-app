import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "登录",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "注册",
        }}
      />
    </Stack>
  );
}
