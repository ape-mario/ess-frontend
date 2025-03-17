import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

// Update the base URL to point to the correct API endpoint
// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;
const apiUrl = import.meta.env.VITE_API_URL || '';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    returnUrl: null
  }),
  actions: {
    async login(username: string, password: string) {
      // Update the endpoint to the correct one
      const user = await fetchWrapper.post(`${apiUrl}/api/auth/login`, { username, password });

      // update pinia state
      this.user = user;
      // store user details and jwt in local storage
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/dashboard/default');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/auth/login');
    }
  }
});