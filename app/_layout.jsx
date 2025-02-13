import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AuthProvider } from "../context/authContext";
import { useRequest } from "ahooks";
import { checkLogin } from "../api/auth";
import { globalAuth } from "../context/authContext";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
  });
  const { setUser, setIsLogin } = globalAuth;
  const { loading: checkLoading, data } = useRequest(checkLogin);

  useEffect(() => {
    if (!checkLoading) {
      setUser(data?.data);
      setIsLogin(true);
    }
    if (loaded && !checkLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, checkLoading]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <GluestackUIProvider mode="light">
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(wiki)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </AuthProvider>
  );
}
