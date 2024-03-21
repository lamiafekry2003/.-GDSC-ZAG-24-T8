import { createContext, useState } from "react";

export const UserContext = createContext(null);



// export const userContext=createContext(null);

export default function UserContextProvider({childern}){
   
   const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)
    return (
        <UserContext.Provider value={{showHome,setShowHome}}>
            {childern}
        </UserContext.Provider>
    )
}
