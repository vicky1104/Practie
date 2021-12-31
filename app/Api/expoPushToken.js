import client from "./Client";

export const register = (token) => client.post("/expoPushTokens", token);
