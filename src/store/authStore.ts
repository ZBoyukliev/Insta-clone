import { create } from "zustand";

export interface User {
  uid: string;
  email: string;
  username: string;
  fullName: string;
  bio?: string;
  profilePicURL?: string;
  followers?: string[];
  following?: string[];
  posts?: string[];
  createdAt?: number;
}

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user-info") || 'null'),
    login: (user: User) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user: User) => set({ user }),
}));

export default useAuthStore;