import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getWikiById } from "@/api/wiki";
import { useRequest } from "ahooks";
import { Image } from "@/components/ui/image";
import { images } from "@/constants";
import Markdown from "react-native-markdown-display";
export default function WikiDetail() {
  const { id } = useLocalSearchParams();
  const { loading, data: wikiData } = useRequest(() => getWikiById(id));

  if (loading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!wikiData) {
    return (
      <View className="flex-1 items-center mt-32">
        <Image
          size="none"
          className="w-128 h-64"
          resizeMode="contain"
          source={images.NotFound}
          alt="Not Found"
        />
        <Text className="text-2xl text-gray-500 font-semibold mt-4">
          😅文章加载失败😅
        </Text>
        <Text className="text-gray-500 mt-2">请稍后重试</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ height: "100%" }}
    >
      <View className="px-8 bg-white">
        <Text className="text-2xl font-semibold text-center mb-2">
          {wikiData.title}
        </Text>
        <Text className="text-gray-500 text-sm mb-4 text-center">
          {wikiData.readCount + "阅读"}
        </Text>
        <Markdown
          style={{
            body: { fontSize: 16, lineHeight: 32 },
            heading1: { color: "purple", fontSize: 24 },
            heading2: { color: "purple", fontSize: 20 },
            code_block: { color: "black", fontSize: 14 },
          }}
        >{`${wikiData.content}`}</Markdown>
      </View>
    </ScrollView>
  );
}
