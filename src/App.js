import { useState } from 'react'
import logo from "./img/i_cloud.png"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { auth, provider } from "./firebase"


function App() {
  const [user, setUser] = useState(null)

  const signIn = () =>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar/>
            <List/>
          </div>
        </>
      ):(
        <div className="loginWrap">
          <img src={logo} alt="logo" />
          <button onClick={signIn}> <div className="icon"><img src="https://img.icons8.com/color/2x/google-logo.png" alt="google" /></div> Login to i Cloud</button>
          <p className="dev">From Ibran</p>
        </div>
      )
    }
    
    </>
  );
}

export default App;
