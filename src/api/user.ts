import api from './http';

export const userApi = {
  login: (data: { username: string; password: string }) =>
    api.post('/auth/login', data),

  getProfile: () => api.get('/user/profile'),

  updateProfile: (data: any) => api.put('/user/profile', data),
};
