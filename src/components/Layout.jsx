import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Box sx={{ display: "flex", flex: 1, mt: 8 }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Box
          component="div"
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { md: "100px" } }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
