import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[800],
        color: (theme) => theme.palette.common.white,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="inherit">
        &copy; 2024 Your Company
      </Typography>
    </Box>
  );
};

export default Footer;
