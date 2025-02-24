import { createContext, useState } from "react";


const CollapseContext = createContext(null)

export const CollapseProvider=({children})=>{
    const [isCollapsed,setIsCollapsed]=useState(false)

    const changeCollapsed=()=>{
        setIsCollapsed(!isCollapsed)
    }

    return (
        <CollapseContext.Provider value={value}>
        
    )
}