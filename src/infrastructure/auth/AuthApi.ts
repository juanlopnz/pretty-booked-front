import { http } from '@/infrastructure/http/httpClient';
export const AuthApi = {
  login: (payload:{email:string;password:string}) => http.post('/auth/login', payload).then(r=>r.data)
};