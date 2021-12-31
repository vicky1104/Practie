import * as SecureStore from "expo-secure-store";
import { log } from "../Utility/Logger";

const key = "tokenKey";

export const setToken = async (value) => {
  console.log(value);
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    log(error);
  }
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    log(error);
  }
};

export const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    log(error);
  }
};
