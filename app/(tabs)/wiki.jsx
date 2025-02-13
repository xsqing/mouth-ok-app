import { ScrollView, View } from "react-native";
import React from "react";
import WikiItem from "@/components/Wiki/WikiItem";
import { useRequest } from "ahooks";
import { getWikiList } from "@/api/wiki";
import { useFocusEffect } from "expo-router";
const Wiki = () => {
  const { data: wikiData, run } = useRequest(getWikiList, {
    manual: true,
  });

  useFocusEffect(run);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="min-h-[100vh] bg-white p-4 gap-2">
        {wikiData?.map((item, index) => (
          <WikiItem key={index} index={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Wiki;
