import RequestHttp from './axios';
import type { UserConfig } from './axios';
import type { AxiosRequestConfig } from 'axios';

 const userConfig: UserConfig = {
    showFullScreenLoading: () => { console.log('显示全屏加载'); },
    hideFullScreenLoading: () => { console.log('隐藏全屏加载'); },
    getToken: () => 'your-token',
    getLoginUrl: () => 'your-login-url',
    checkStatus: (status: number) => { console.log(`HTTP状态码: ${status}`); },
  };

  const config: AxiosRequestConfig = {
    baseURL: '',
};
export default RequestHttp(config, userConfig);
