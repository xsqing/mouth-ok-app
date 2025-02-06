import { View, Text } from "react-native";
import React from "react";
import { Card } from "../ui/card";

export default function StatisticItem({ title, data }) {
  return (
    <Card className="items-center justify-center flex-1" size="lg">
      <Text className="text-sm text-gray-500 mb-4">{title}</Text>
      <Text className="text-3xl font-semibold text-primary">{data}</Text>
    </Card>
  );
}
