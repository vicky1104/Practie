import { create } from "apisauce";
import { store, get } from "../../Utility/CacheStorage";
import { getToken } from "../Auth/Store";
const client = create({ baseURL: "http://192.168.2.27:9000/api" });

client.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
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
