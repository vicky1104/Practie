import client from "./Client";

export const Login = (email, password) =>
  client.post("/auth", { email, password });

export const RegisterUser = (email, name, password) =>
  client.post("/users", { email, name, password });
