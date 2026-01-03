import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgetPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";
import HomePage from "./Homepage";
import FeedbackSection from "./feedback";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage/>}
          
        />
       
        <Route path ="/" element={<HomePage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path ="/reset-password/:token" element={<ResetPasswordPage/>}/>
        <Route path ="/feedback" element={<FeedbackSection/>}/>
      </Routes>
    </Router>
  );
}
