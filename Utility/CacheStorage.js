import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const getData = await AsyncStorage.getItem(key);
    const parseData = JSON.parse(getData);
    if (!parseData) return null;

    const crrDate = moment(Date.now());
    const prevDate = moment(parseData.timestamp);
    const difference = crrDate.diff(prevDate, "minutes") > 5;

    if (difference) {
      await AsyncStorage.removeItem(key);
      return null;
    } else {
      parseData.value;
    }
  } catch (error) {
    console.log(error);
  }
};
export { store, get };
