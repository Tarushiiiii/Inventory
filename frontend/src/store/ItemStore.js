import { create } from "zustand";

export const useItemStore = create((set) => ({
  items: [],

  addItem: (name, quantity) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: state.items.length + 1,
          name,
          quantity,
        },
      ],
    })),

  removeAllItems: () => set({ items: [] }),
}));