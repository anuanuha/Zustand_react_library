// import React from "react";
// import { useUserContext } from "./contexts/UserContext";

// export  const UserProfile =()=>{
//     // const [user, setUser] = useState(null);
//     // const login =()=>{
//     //     setUser({name:"anu", email:"anu@gmail.com"})
//     // }
//     // const logout =()=>{
//     //     setUser(null);
//     // }
//     const{user, login, logout} = useUserContext();
//     return(
//         <div>
// {
//     user ? 
//     (
//     <div> 
//         <h3>welcome:{user.name}</h3>
//         <h3>email:{user.email}</h3>
//         <button onClick={logout}>logout</button>
//     </div>
//     ):
//     (
//     <div><p>please log in</p>
//     <button onClick={login}> login</button></div>
//     )
// }
//         </div>
//     )
// }
//---------------------------------------------------------------------
import { useUserStore } from "./zustand/useUserDetails";
export const UserProfile=()=>{
    const {user, login, logout} = useUserStore()
    return(
        <div>
      {
        user?(
                 <div>
                       <p> Welcome,{user.name}</p>
                       <p>Email,{user.email}</p>
                       <button onClick={logout}>Logout</button>
                 </div>
        ):(
              <div>
                    <p>please log in</p>
                    <button onClick={login}>login</button>
              </div>
        )
      }
        </div>
    )
}