import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let toggleStore = (set: any) => ({
  dark: false,
  toggleDarkMode: () => set((state: any) => ({ dark: !state.dark })),
});

let peopleStore = (set: any) => ({
  people: ["Raj", "Roshan", "Rahul"],
  addPerson: (person: any) =>
    set((state: any) => ({ people: [...state.people, person] })),
});

export const useStore = create(
  devtools(
    persist(toggleStore, {
      name: "toggleStore",
    })
  )
);

export const usePeopleStore = create(
  devtools(persist(peopleStore, { name: "peopleStore" }))
);


