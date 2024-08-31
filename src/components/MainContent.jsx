import Box from "@mui/material/Box";

const MainContent = ({ children }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      {children}
    </Box>
  );
};

export default MainContent;
