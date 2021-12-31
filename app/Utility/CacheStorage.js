import AsyncStorage from "@react-native-async-storage/async-storage";
// import moment from "moment";
import dayjs from "dayjs";
import { log } from "./Logger";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    log(error);
  }
};

const get = async (key) => {
  try {
    const getData = await AsyncStorage.getItem(key);
    const parseData = JSON.parse(getData);
    if (!parseData) return null;

    const crrDate = dayjs();
    const prevDate = dayjs(parseData.timestamp);
    const difference = crrDate.diff(prevDate, "minute") > 5;

    if (difference) {
      await AsyncStorage.removeItem(key);
      return null;
    } else {
      parseData.value;
    }
  } catch (error) {
    log(error);
  }
};
export { store, get };
