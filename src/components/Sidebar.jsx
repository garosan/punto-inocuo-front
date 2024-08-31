import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Drawer
      variant={isDesktop ? "permanent" : "temporary"}
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          mt: 8,
          height: `calc(100vh - 64px)`,
        },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/audits/new"
          onClick={toggleSidebar}
        >
          <ListItemText primary="Nueva Auditoría" />
        </ListItem>
        <ListItem button component={Link} to="/audits" onClick={toggleSidebar}>
          <ListItemText primary="Ver Auditorías" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
