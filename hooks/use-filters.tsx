import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface FilterStore {
  isOpen: boolean;
  toggleFilter: () => void;
}

const useFilter = create(
  persist<FilterStore>(
    (set, get) => ({
      isOpen: false,
      toggleFilter: () => {
        set({ isOpen: get().isOpen });
      },
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFilter;
