import { create } from "zustand";

// 状態の型を定義する
type NaiseiState = {
  naisei: string;
  setNaisei: (value: string) => void;
};

// create関数に型を渡す
export const useNaiseiStore = create<NaiseiState>((set) => ({
  naisei: "",
  setNaisei: (value) => set((state) => ({ naisei: value })),
}));
