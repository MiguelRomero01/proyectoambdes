import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import LoginScreen from "./Authentication/Login/Login";
import RegisterScreen from "./Authentication/Register/Register";
import HomeScreen from "./Home/home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home/*" element={<HomeScreen />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
