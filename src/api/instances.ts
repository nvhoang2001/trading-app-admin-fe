import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const client: AxiosInstance = axios.create({
	withCredentials: true,
});

client.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		return Promise.resolve(config);
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

client.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError<{}>) => {
		return Promise.reject(error);
	},
);

export default client;
