import { create } from "apisauce";
import { store, get } from "../Utility/CacheStorage";
import { getToken } from "../Auth/Store";
import Settings from "../config/Settings";

const client = create({ baseURL: Settings.apiurl });

client.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  if (!authToken) {
  } else {
    request.headers["x-auth-token"] = authToken;
  }
});

const getApiRef = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await getApiRef(url, params, axiosConfig);

  if (response.ok) {
    store(url, response.data);
    return response;
  }
  const data = await get(url);
  return data ? { ok: true, data } : response;
};

export default client;
