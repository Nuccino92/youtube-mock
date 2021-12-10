import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoggedInPackage from "./components/logged-in/LoggedInPackage";
import LoggedOutPackage from "./components/logged-out/LoggedOutPackage";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <LoggedInPackage />
        {/* <LoggedOutPackage /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
