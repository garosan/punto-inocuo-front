import Box from "@mui/material/Box";

const MainContent = ({ children }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      {" "}
      {/* Add margin top to account for fixed navbar */}
      {children}
    </Box>
  );
};

export default MainContent;
