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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BadgeIcon from "@mui/icons-material/Badge";
import GitHubIcon from "@mui/icons-material/GitHub";
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
    projects: "Projects",
    homeIcon: <HomeIcon />,
    aboutIcon: <PersonIcon />,
    skillIcon: <PsychologyIcon />,
    serviceIcon: <HomeRepairServiceIcon />,
    contactIcon: <ContactPhoneIcon />,
    BadgeIcon: <BadgeIcon />,
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
    setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  const currentYear = new Date().getFullYear();
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
            {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarList.map((item) => (
            <div key={item.id} className="sidebarList">
              <div className="nameHeading">JAKEER</div>
              <li>
                <Link to="section-1" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.homeIcon}</span>
                    <p>{item.home}</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="section-2" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.aboutIcon}</span>
                    <p>{item.about}</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="skills-section" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.skillIcon}</span>
                    <p>{item.skill}</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.serviceIcon}</span>
                    <p>{item.services}</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.BadgeIcon}</span>
                    <p>{item.projects}</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="section-3" smooth={true} duration={800}>
                  <div
                    className="sidelistitems-container"
                    onClick={handleDrawerClose}
                  >
                    <span className="sidelistitems">{item.contactIcon}</span>
                    <p>{item.contact}</p>
                  </div>
                </Link>
              </li>
            </div>
          ))}
          <div className="social-media">
            <a href="https://github.com/jakeer678?tab=repositories">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/jakeer-sasanoor-563426b7/">
              <LinkedInIcon />
            </a>
          </div>
          <p className="all-rights"> &copy;{currentYear} | All Rights Reserved</p>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}
