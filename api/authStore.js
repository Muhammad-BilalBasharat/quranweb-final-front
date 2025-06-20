import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => {
    Cookies.remove("auth_token");
    set({ user: null, token: null });
  },
  hydrate: () => {
    const token = Cookies.get("auth_token");
    if (token) set({ token });
    // Optionally, fetch user info here if needed
  },
}));