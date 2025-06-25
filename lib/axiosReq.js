import axios from "axios";
import Cookies from "js-cookie";

export async function axiosRequest({
  method,
  url,
  data,
  headers,
  params,
  timeout,
  withCredentials = true,
}) {
  try {
    const token = Cookies.get("auth_token");

    const config = {
      method,
      url,
      ...(data && { data }),
      ...(headers && { headers }),
      ...(params && { params }),
      ...(timeout && { timeout }),
      withCredentials,
      headers: {
        ...(headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };

    const response = await axios(config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || error.message,
      status: error.response?.status,
    };
  }
}