import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(undefined);

// 创建一个全局实例用于非组件环境
let globalSetIsLogin = null;
let globalSetUser = null;

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isTrialMode, setIsTrialMode] = useState(false);
  const [user, setUser] = useState(null);

  // 保存到全局变量
  globalSetIsLogin = setIsLogin;
  globalSetUser = setUser;

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isTrialMode,
        setIsTrialMode,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// 导出全局方法用于非组件环境
export const globalAuth = {
  setIsLogin: (value) => globalSetIsLogin?.(value),
  setUser: (value) => globalSetUser?.(value),
};

export const clearAuth = async () => {
  await AsyncStorage.removeItem("token");
  globalAuth.setIsLogin(false);
  globalAuth.setUser(null);
};
