import request from "./request";

export function createUser(email, password, username) {
  return request.post("/auth/signup", { email, password, username });
}

export async function loginWithEmail(email, password) {
  return request.post("/auth/signin", { email, password });
}

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
