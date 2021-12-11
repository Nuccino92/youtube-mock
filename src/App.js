import "./App.css";
import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoggedInPackage from "./components/logged-in/LoggedInPackage";
import LoggedOutPackage from "./components/logged-out/LoggedOutPackage";
import Homepage from "./components/homepage/Homepage";

function App() {
  const { online } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        {online ? <LoggedInPackage /> : <LoggedOutPackage />}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
