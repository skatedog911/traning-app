import { Box, CssBaseline, Toolbar } from "@mui/material";
import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import Record from "./record/Record";
import Setting from "./setting/Setting";

const drawerWidth = 240;

function App() {
  return (
    <Box>
      <CssBaseline />
      <TopBar></TopBar>
      <SideBar></SideBar>
      <Box>
        <Toolbar></Toolbar>
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
          component="main"
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/menu" element={<Menu></Menu>} />
              <Route path="/record" element={<Record></Record>} />
              <Route path="/setting" element={<Setting></Setting>} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
