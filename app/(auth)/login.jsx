import React, { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Link, LinkText } from "@/components/ui/link";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginWithPhone, sendVerificationCode } from "../../api/auth";
import { useAuth } from "../../context/authContext";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);

  // 全局上下文
  const { setIsLogin } = useAuth();

  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendCode = async () => {
    if (!phone || phone.length !== 11) {
      alert("请输入正确的手机号");
      return;
    }
    try {
      await sendVerificationCode(phone);
      startCountdown();
    } catch (error) {
      alert(error.message || "发送验证码失败");
    }
  };

  const handleLogin = async () => {
    if (!phone || !code) {
      alert("请输入手机号和验证码");
      return;
    }
    setLoading(true);
    try {
      const response = await loginWithPhone(phone, code);
      if (response.data.accessToken) {
        await AsyncStorage.setItem("token", response.data.accessToken);
        setIsLogin(true);
        router.replace("/");
      } else {
        throw new Error("登录失败");
      }
    } catch (error) {
      alert(error.message || "登录失败");
    } finally {
      setLoading(false);
    }
  };

  const routeToRegister = () => {
    router.replace("(auth)/register");
  };

  return (
    <View className="px-6">
      <View className="my-8">
        <Text className="text-2xl font-bold">嗨！</Text>
        <Text className="text-2xl font-bold">欢迎使用口康日历</Text>
      </View>

      <View className="gap-8">
        <Input size="lg">
          <InputField
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            maxLength={11}
            placeholder="请输入手机号"
          />
        </Input>

        <View className="flex-row gap-2">
          <Input size="lg" className="flex-1">
            <InputField
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={6}
              placeholder="请输入验证码"
            />
          </Input>

          <Button
            onPress={handleSendCode}
            disabled={countdown > 0}
            className="w-32 h-11"
          >
            <ButtonText>
              {countdown > 0 ? `${countdown}s` : "发送验证码"}
            </ButtonText>
          </Button>
        </View>

        <Button onPress={handleLogin} isLoading={loading}>
          <ButtonText>登录</ButtonText>
        </Button>

        <Link onPress={routeToRegister} className="items-center no-underline">
          <LinkText className="no-underline">还没有账号？立即注册</LinkText>
        </Link>
      </View>
    </View>
  );
}
