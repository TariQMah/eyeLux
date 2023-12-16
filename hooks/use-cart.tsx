import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: any[];
  favItems: any[];
  addItem: (data: any, type: string) => void;
  removeItem: (id: string, type: string) => void;
  removeAll: (type: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      favItems: [],
      addItem: (data: any, type: string) => {
        let actionType = get().items;
        if (type !== "cart") {
          actionType = get().favItems;
        }
        const currentItems = actionType;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast(`Item already in ${type}.`);
        }
        if (type !== "cart") {
          set({ favItems: [...actionType, data] });
        } else {
          set({ items: [...actionType, data] });
        }
        toast.success(`Item added to ${type}.`);
      },
      removeItem: (id: string, type: string) => {
        let actionType = get().items;
        if (type !== "cart") {
          actionType = get().favItems;
        }
        set({ items: [...actionType.filter((item) => item.id !== id)] });
        toast.success(`Item removed from ${type}.`);
      },
      removeAll: (type: string) => {
        if (type !== "cart") {
          set({ favItems: [] });
        } else {
          set({ items: [] });
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
