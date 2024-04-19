import { create } from "zustand";

const useLogin = create((set) => ({
	isLogin: false,
	setIsLogin: (value) => set((state) => ({ isLogin: value })),
}));

export default useLogin;
