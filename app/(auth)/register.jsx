import React, { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerWithPhone, sendVerificationCode } from "../../api/auth";

export default function RegisterScreen() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const handleRegister = async () => {
    if (!phone || !code) {
      alert("请输入手机号和验证码");
      return;
    }
    setLoading(true);
    try {
      const response = await registerWithPhone(phone, code);
      if (response.data.accessToken) {
        await AsyncStorage.setItem("token", response.data.accessToken);
        router.replace("/");
      } else {
        throw new Error("注册失败");
      }
    } catch (error) {
      alert(error.message || "注册失败");
    } finally {
      setLoading(false);
    }
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

        <Button onPress={handleRegister} isLoading={loading}>
          <ButtonText>立即注册</ButtonText>
        </Button>
      </View>
    </View>
  );
}
