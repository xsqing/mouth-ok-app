import React from "react";
import { Stack } from "expo-router";

const WikiLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="detail"></Stack.Screen>
    </Stack>
  );
};

export default WikiLayout;
