import { create } from "zustand";
import { User } from "./types";

type UserState = {
  user: User | null
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setName: (value: string) => {
    set((prev) => ({ ...prev, user: { name: value } }))
  }
}))
