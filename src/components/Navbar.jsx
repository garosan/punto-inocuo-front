import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Punto Inocuo
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ display: { xs: "block", md: "none" } }} // Hide on larger screens
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
