import create from "zustand";
import {devtools} from "zustand/middleware"

const store = (set:any)=>({
    people:["Raj","Roshan","Rahul"],
    addPerson:(person:any)=> set((state:any)=>({people:[...state.people,person]}))
})
const useStore = create(devtools(store))

export default useStore;

// without middleware devtools.

// const useStore = create((set)=>({
//     people:["Raj","Roshan","Rahul"],
//     addPerson:(person:any)=> set((state:any)=>({people:[...state.people,person]}))
// }))