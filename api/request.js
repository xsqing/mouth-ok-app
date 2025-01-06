import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNxaW5nIiwiaWF0IjoxNzM2MTI5MjYwLCJleHAiOjE3MzYzNDUyNjB9.eGkr_MI4SLl0LxzvimjQBtGUKMDGRixKyH4zbWPrKZw";
const showToast = (message) => {
  Alert.alert("提示", message);
};

const request = axios.create({
  baseURL: "http://172.20.214.1:3000/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (config) => {
    const token = (await AsyncStorage.getItem("token")) || testToken;
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
