import axios, { AxiosInstance } from 'axios';
import { ENV_VAR } from 'constants/envConfig';

class BaseApiService {
  private ax: AxiosInstance;

  constructor() {
    this.ax = axios.create({ baseURL: ENV_VAR.apiUrl });
  }

  static getInstance() {
    return new BaseApiService();
  }

  get(url: string) {
    return this.ax.get(url);
  }
}

export const baseApiService = BaseApiService.getInstance();
