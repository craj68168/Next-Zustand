import create from "zustand";

const useStore = create((set)=>({
    people:["Raj","Roshan","Rahul"],
    addPerson:(person:any)=> set((state:any)=>({people:[...state.people,person]}))
}))

export default useStore;