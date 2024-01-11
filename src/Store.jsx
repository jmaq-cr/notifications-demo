import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import defaultData from "./data/data";

let store = immer((set) => ({
  data: [...defaultData],
  removeData: (id) =>
    set((state) => ({
      data: state.data.filter((notification) => notification.id !== id),
    })),
  resetData: () => {
    set({ data: [...defaultData] });
    localStorage.removeItem("data");
  },
}));

store = devtools(store);
store = persist(store, { name: "data" });

const useStore = create(devtools(store));

export default useStore;
