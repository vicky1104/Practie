import * as SecureStore from "expo-secure-store";

const key = "tokenKey";
export const setToken = async (value) => {
  try {
    return await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log("Error while storing data", error);
  }
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error while getting token");
  }
};

export const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error while removing token", error);
  }
};
