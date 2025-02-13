import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getWikiById } from "@/api/wiki";
import { useRequest } from "ahooks";
import { Image } from "@/components/ui/image";
import { images } from "@/constants";

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
    <View flex={1} p="$4">
      <Text size="xl" bold mb="$2">
        {wikiData.title}
      </Text>
      <Text>{wikiData.content}</Text>
    </View>
  );
}
