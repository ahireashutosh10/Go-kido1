import React from 'react'
import SignupPage from './pages/SignupPage';
import Signup from "./pages/SignupPage";

const App = () => {

  const [showSignup, setShowSignup] = useState(false);
  return (
    <>
        <div>
      <button onClick={() => setShowLogin(true)}>Log In</button>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
    
    
    
    
    </>
  )
}

export default App
