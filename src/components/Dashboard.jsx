import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ display: "flex", flex: 1, mt: 1 }}>
        <Typography>Dashboard Component</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
