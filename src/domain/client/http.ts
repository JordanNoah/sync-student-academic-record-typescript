import Axios, {AxiosHeaders, AxiosInstance, AxiosRequestConfig} from "axios";

export class Http {
    private static instance: Http
    private readonly axiosInstance: AxiosInstance

    constructor(
        baseUrl: string
    ) {
        this.axiosInstance = Axios.create({
            baseURL:baseUrl,
            timeout:5000
        })
    }

    public setHeaders(headers: Record<string, string>){
        this.axiosInstance.defaults.headers = { ...this.axiosInstance.defaults.headers, ...headers }
    }

    public static getInstance(baseUrl: string): Http {
        if (!this.instance){
            this.instance = new Http(baseUrl)
        }
        return this.instance
    }

    public getAxiosInstance(): AxiosInstance{
        return this.axiosInstance
    }

    public async get<T>(url:string,config?: AxiosRequestConfig): Promise<T>{
        return this.axiosInstance.get(url,config)
    }

    public async post<T>(data?: object, config?: AxiosRequestConfig): Promise<T> {

        const response = await this.axiosInstance.post(this.axiosInstance.defaults.url!,data ,config)

        if (response && response.data) {
            return response.data as T;
        } else {
            throw new Error("No data in response");  // Handle the case where there's no data
        }
    }
}