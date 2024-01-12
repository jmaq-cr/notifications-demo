import "./App.css";
import { CssBaseline } from "@mui/material";
import { Notifications } from "./pages/Notifications";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#F4F5F5"
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Notifications />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
