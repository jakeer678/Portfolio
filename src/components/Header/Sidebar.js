import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PsychologyIcon from "@mui/icons-material/Psychology";

const drawerWidth = 240;

const sidebarList = [
  {
    id: 1,
    home: "Home",
    about: "About",
    services: "Services",
    education: "Education",
    contact: "Contact",
    login: "Login",
    skill: "Skills",
    projects: "Projects"
  },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarList.map((item) => (
            <div key={item.id} className="sidebarList">
              <li>
                <span>
                  <HomeIcon />
                </span>
                <Link to="section-1" smooth={true} duration={500}>
                  {item.home}
                </Link>
              </li>
              <li>
                <span>
                  <PersonIcon />
                </span>

                <Link to="section-2" smooth={true} duration={500}>
                  {item.about}
                </Link>
              </li>
              <li>
                <span>
                  <PsychologyIcon />
                </span>

                <Link to="skills-section" smooth={true} duration={500}>
                  {item.skill}
                </Link>
              </li>
              <li>
                <span>
                  <HomeRepairServiceIcon />
                </span>
                <Link to="services" smooth={true} duration={500}>
                  {item.services}
                </Link>
              </li>
              <li>
                <span>
                  <HomeRepairServiceIcon />
                </span>
                <Link to="projects" smooth={true} duration={500}>
                  {item.projects}
                </Link>
              </li>
              <li>
                <span>
                  <ContactPhoneIcon />
                </span>
                <Link to="section-3" smooth={true} duration={500}>
                  {item.contact}
                </Link>
              </li>
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
