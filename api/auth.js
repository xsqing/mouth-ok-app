import request from "./request";

export async function sendVerificationCode(phone, area = "+86") {
  phone = area + phone;
  return request.post("/sms/send-code", { phone });
}

export async function loginWithPhone(phone, code, area = "+86") {
  phone = area + phone;
  return request.post("/auth/signInByPhone", { phone, code });
}

export async function registerWithPhone(phone, code, area = "+86") {
  phone = area + phone;
  return request.post("/auth/signUpByPhone", { phone, code });
}

export async function logout() {
  return request.post("/auth/signout");
}

export async function checkLogin() {
  try {
    const res = await request.get("/auth/checkLogin");
    return res.data;
  } catch (error) {
    return null;
  }
}
