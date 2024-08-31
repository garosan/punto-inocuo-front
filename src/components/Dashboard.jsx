import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Box sx={{ display: "flex", flex: 1, mt: 1 }}>
        <Sidebar
          isOpen={isSidebarOpen || isDesktop}
          toggleSidebar={toggleSidebar}
        />
        <Box
          component="div"
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <MainContent>
            <h1>Dashboard</h1>
          </MainContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
