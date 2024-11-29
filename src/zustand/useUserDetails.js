import {create} from "zustand";
export const useUserStore = create((set)=>({
    user:null,
    login : ()=>set({user:{name:"anu", email:"anu@gmail.com"}}),
    logout : ()=>set({user:null}),
}));