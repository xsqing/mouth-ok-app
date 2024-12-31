import request from "./request";

export function createUser(email, password, username) {
  return request.post("/auth/signup", { email, password, username });
}

export async function loginWithEmail(email, password) {
  return request.post("/auth/signin", { email, password });
}

export async function logout() {
  return request.post("/auth/signout");
}
