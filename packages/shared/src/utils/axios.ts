import axios, {
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

/* axios type */
const axiosWebConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
};

const axiosMobileConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
};

const axiosWebRequestInterceptor = {
  onFullFilled: (config: InternalAxiosRequestConfig) => {
    return config;
  },
  onRejected: (error: AxiosError) => {
    return Promise.reject(error);
  },
};

const axiosWebResponseInterceptor = {
  onFullFilled: (response: AxiosResponse) => {
    return response;
  },
  onRejected: (error: AxiosError) => {
    console.log(error);
  },
};

const axiosMobileRequestInterceptor = {
  onFullFilled: (config: InternalAxiosRequestConfig) => {
    return config;
  },
  onRejected: (error: AxiosError) => {
    return Promise.reject(error);
  },
};

const axiosMobileResponseInterceptor = {
  onFullFilled: (response: AxiosResponse) => {
    return response;
  },
  onRejected: (error: AxiosError) => {
    console.log(error);
  },
};

const customAxios =
  (axiosBaseConfig: AxiosRequestConfig) => (isWeb: boolean) => {
    const axiosInstance = axios.create(axiosBaseConfig);
    if (isWeb) {
      axiosInstance.interceptors.request.use(
        axiosWebRequestInterceptor.onFullFilled,
        axiosWebRequestInterceptor.onRejected,
      );
      axiosInstance.interceptors.response.use(
        axiosWebResponseInterceptor.onFullFilled,
        axiosWebResponseInterceptor.onRejected,
      );
    } else {
      axiosInstance.interceptors.request.use(
        axiosMobileRequestInterceptor.onFullFilled,
        axiosMobileRequestInterceptor.onRejected,
      );
      axiosInstance.interceptors.response.use(
        axiosMobileResponseInterceptor.onFullFilled,
        axiosMobileResponseInterceptor.onRejected,
      );
    }
    return axiosInstance;
  };

export { customAxios };
