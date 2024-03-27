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
    user: null as User | null,
    login: (user: User) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user: User) => set({ user }),
}));

export default useAuthStore;