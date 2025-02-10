import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const showToast = (message) => {
  Alert.alert("提示", message);
};

const request = axios.create({
  baseURL: "http://172.20.212.70:3000/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      return config;
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response.data);
    handleResonseError(error);
    return Promise.reject(error);
  }
);

function handleResonseError(error) {
  if (error.message === "Network Error") {
    showToast("网络错误");
    return;
  }
  const status = error.response.status;
  const errorMap = {
    401: "未登录，请先登录",
    403: "无权访问",
    404: "请求的资源不存在",
    500: "服务器内部错误",
    502: "网关错误",
    503: "服务不可用",
    504: "网关超时",
  };
  if (status === 401) {
    AsyncStorage.removeItem("token");
  }
  if (errorMap[status]) {
    showToast(errorMap[status]);
  }
}

export default request;
