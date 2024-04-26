// Create a provider context provider for a string
import { create } from "zustand";

type User = {
  username: string;
  name: string;
  address: string;
};

type UserContextModel = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserContextModel>(set => ({
  user: null,
  setUser: (user: User | null) => set({ user })
}));
