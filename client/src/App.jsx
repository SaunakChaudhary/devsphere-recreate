import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Features from "./Pages/Features";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import InterestSelection from "./Pages/InterestSelection";
import HomePage from "./Pages/User/HomePage";
import MyProfile from "./Pages/User/MyProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/interest-selection" element={<InterestSelection />} />
      
      {/* User Protected Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/recent-chats" element={<MyProfile />} />
      <Route path="/challenges" element={<MyProfile />} />
      <Route path="/badges" element={<MyProfile />} />
      <Route path="/notifications" element={<MyProfile />} />

      
    </Routes>
  )
}

export default App
