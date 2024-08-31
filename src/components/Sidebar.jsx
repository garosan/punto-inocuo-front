import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Drawer
      variant={isDesktop ? "permanent" : "temporary"}
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        width: isDesktop ? 240 : 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        display: { xs: "block", md: "flex" },
      }}
    >
      <List>
        {["Option 1", "Option 2", "Option 3"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
