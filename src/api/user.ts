import httpClient from './axios'

export const userApi = {
  login: (data: { username: string; password: string }) =>
    httpClient.post('/auth/login', data),
  
  getProfile: () => httpClient.get('/user/profile'),
  
  updateProfile: (data: any) => httpClient.put('/user/profile', data),
}