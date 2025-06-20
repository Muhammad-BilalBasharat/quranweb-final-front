import axios from "axios";

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
    const config = {
      method,
      url,
      ...(data && { data }),
      ...(headers && { headers }),
      ...(params && { params }),
      ...(timeout && { timeout }),
      withCredentials: true,
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
