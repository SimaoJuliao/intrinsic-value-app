import {
  create,
  type StateCreator,
  type StoreMutatorIdentifier,
} from "zustand";
import { devtools, type PersistStorage, persist } from "zustand/middleware";

interface CreateStoreOptions {
  name: string;
  storage?: PersistStorage<unknown>;
}

export const StoreHelper = {
  createStore: <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
    innerStore: StateCreator<T, [["zustand/devtools", never]], Mos>,
    options: CreateStoreOptions
  ) =>
    create<T>()(
      devtools(
        options?.storage
          ? persist((set, get, api) => innerStore(set, get, api), {
              name: options.name,
              storage: options.storage,
            })
          : (set, get, api) => innerStore(set, get, api),
        {
          enabled: true,
          name: options.name,
        }
      )
    ),
};
