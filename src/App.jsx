import "./App.css";
import { CssBaseline } from "@mui/material";
import { Notifications } from "./pages/Notifications";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Notifications />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
