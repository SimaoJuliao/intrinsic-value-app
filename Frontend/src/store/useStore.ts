import { StoreHelper } from "@/helpers";

export type StoreState = {
  theme: "light" | "dark";
};

type UseStoreStoreOutput = StoreState & {
  toggleTheme: () => void;
};

export const useStore = StoreHelper.createStore<UseStoreStoreOutput>(
  (set, get) => ({
    theme: "light",

    toggleTheme: () => {
      const newTheme = get().theme === "dark" ? "light" : "dark";
      set({ theme: newTheme });
    },
  }),
  { name: "Base" }
);
