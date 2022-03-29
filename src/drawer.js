import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Container,Box,Grid} from '@mui/material/';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';

import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

import './App.scss';
import About from './about';



import Typewriter from 'typewriter-effect';
import Techstack from './techstack';

import Projects from './projects';
import Certificate from './certificate';
import Contact from './contact';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const label="Currently Working in DXC";
const color="error";

const navlinks = [
  {
    icon:HomeSharpIcon,
    name:"Home",
    href:"#home"
  },
  {
    icon:PermIdentitySharpIcon,
    name:"About me",
    href:"#about"
  },
  {
    icon:ImportantDevicesSharpIcon,
    name:"Skill",
    href:"#skill"
  },
  {
    icon:WorkSharpIcon,
    name:"Projects",
    href:"#projects"
  },
  {
    icon:ContactMailSharpIcon,
    name:"Contact me",
    href:"#contact"
  },
]


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit">
        <Toolbar className="topBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Portfolio
          </Typography>
              <Chip
                className="Availability" 
                label={label}
                color={color}
                icon={<FiberManualRecordSharpIcon />}
                variant="outlined"
              />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List  className="nav">
        { navlinks.map(navlink=>{
        return(
        <ListItem button component="a" href={navlink.href}>
          <ListItemIcon>
            <navlink.icon />
          </ListItemIcon>
          <ListItemText primary={navlink.name} />
        </ListItem>
        )})
        }



          {/* {['Home', 'About', 'Tech Skills', 'Contact'].map((text, index) => (
            <ListItem button key={text} >
              <ListItemIcon >
                {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        
        <Box className="header" container id="home">
            {/* <Box container className="bgBox">
            </Box> */}
            <Box container className="bgBox" data-aos="zoom-in">
              <Box>
                <Typography variant="h1" className="intro">Hi I am Aaron</Typography>
            
                <Typography variant="h5" className="intro" color="primary">
                  Your Future: 
                </Typography>
                <Divider/>
                <Typography variant="h4" className="intro" color="secondary">            
                  <Typewriter
                    options={{
                        strings: ['ABAP Developer', 'Software Developer', 'Application Developer','Web Developer'],
                        autoStart: true,
                        loop: true,
                    }}/> 
                
                </Typography>
                
              </Box>
            </Box>

            
        </Box>
        
        <Box className="l">
          <About/>
          <Techstack/>
        </Box>
        <Divider/>
        <Projects/>
        <Certificate/>
        <Contact/>
        
        <Box className="footer">
          <Typography variant="subtitle1" align="center">Copyright 2021</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MiniDrawer;
