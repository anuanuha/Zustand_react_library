
// import { UserProfile } from './UserProfile'; // Import UserProfile
// // import { UserProvider } from './contexts/UserContext'; // Import UserProvider

// function App() {
//   return (
//     // // Wrap the entire app with UserProvider to make the context available
//     <UserProvider>
//       <div>
//         <UserProfile />
//       </div>
//      </UserProvider>
//   );
// }

// export default App;
import { UserProfile } from "./UserProfile";
function App(){
  return(
    <div>
      <UserProfile/>
    </div>
  )
}
export default App;
