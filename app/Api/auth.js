import client from "./Client";

export const Login = (email, password) => {
  return client.post("/auth", { email, password }); //requires Token
};
export const RegisterUser = (email, name, password) => {
  return client.post("/users", { email, name, password });
};
