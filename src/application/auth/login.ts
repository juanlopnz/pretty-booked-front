import { AuthApi } from '@/infrastructure/auth/AuthApi';
import { useAuthStore } from '@/presentation/stores/auth.store';

export async function login(email:string, password:string) {
  const res = await AuthApi.login({email,password});
  useAuthStore().setSession(res.user, res.token);
}