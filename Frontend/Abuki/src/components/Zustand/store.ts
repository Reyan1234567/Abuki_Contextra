import {create} from 'zustand'

type collapse={
    isCollapsed:boolean;
    change:()=>void;
}

export const useCollapse=create<collapse>((set)=>({
    isCollapsed:true,
    change:()=>{
        set((state)=>({isCollapsed:!(state.isCollapsed)}))
    }
}))