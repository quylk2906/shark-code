import { create } from 'zustand';

interface AppState {
  isLoading: boolean;
  loadingMessage?: string;
  setLoading: (loading: boolean, message?: string) => void;
  startLoading: (message?: string) => void;
  stopLoading: () => void;
}

const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  loadingMessage: undefined,
  setLoading: (loading: boolean, message?: string) =>
    set({ isLoading: loading, loadingMessage: message }),
  startLoading: (message?: string) => set({ isLoading: true, loadingMessage: message }),
  stopLoading: () => set({ isLoading: false, loadingMessage: undefined }),
}));

export default useAppStore;
