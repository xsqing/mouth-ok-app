import React from "react";
import { Stack } from "expo-router";

const WikiLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="details/[id]"
        options={{ title: "口康百科", headerShadowVisible: false }}
      />
    </Stack>
  );
};

export default WikiLayout;
