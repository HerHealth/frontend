import { create } from "zustand";

export interface LoadingModel {
  loading: boolean;
  loadingMessage: string;
  setLoadingMessage: (loadingMessage: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingModel>(set => ({
  loading: false,
  loadingMessage: "",
  setLoading: (loading: boolean) => {
    if (!loading) {
      set({ loading, loadingMessage: "" });
    } else {
      set({ loading });
    }
  },
  setLoadingMessage: (loadingMessage: string) => {
    if (loadingMessage) {
      setTimeout(() => {
        set({ loadingMessage }), 150;
      });
    }
  }
}));
