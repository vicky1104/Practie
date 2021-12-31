import Constants from "expo-constants";

export const Settings = {
  dev: { apiurl: "http://192.168.2.27:9000/api" },
  staging: { apiurl: "http://192.168.2.27:9000/api" },
  prod: { apiurl: "http://192.168.2.27:9000/api" },
};

const getCurrentSettings = () => {
  if (__DEV__) return Settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return Settings.staging; // for uploading on expo-server
  return Settings.prod;
};

export default getCurrentSettings();
