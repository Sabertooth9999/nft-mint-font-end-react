import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NavLink  from '../Link';
import menuItems from './Header.data';
import { IconButton, Drawer, Button, Box } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import logo from 'assets/images/logo.png';
import Image from 'next/image';
import IconCon from 'assets/images/icon-con.png';
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawerContainer: {
    padding: "20px 40px",
  },
  navbar:{
   "& a": {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
      "&:hover":{
         textDecoration: 'underline',
      },
      '&.active': {
        textDecoration: 'underline',
      },            
    },    
  },
  connect: {
    display: 'flex',
    color: 'white',
    fontSize: '14px',    
    backgroundColor: '#ffffff1f',
    padding: '8px 30px 8px 30px',
    borderRadius: '10px',
    border: '2px solid #dddddd61',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 20px 8px 20px',
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '40vw',
      height: 'auto'
    },
  }
}), {name : "MuiNavbarComponent"});

type Props = {
   isMobile : boolean,
   handleCloseMenu : () => void
}

const Navbar = ({ isMobile, handleCloseMenu } : Props) => {

  const [state, setState] = useState({
      drawerOpen : false,
  });
  const classes = useStyles();

  const {drawerOpen} = state;

  const getDrawerChoices = () => {
    return menuItems.map(({ label, path }, i) => {
      return (
         <NavLink key={i} path={path} label={label} isMobile={isMobile} />
      );
    });
  };

  const displayMobile = () => {

    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
      
    return (
      <Toolbar>
        <Box className={classes.logo}>
          <Image src={logo} alt="logo" />
        </Box>
        <Box mr={3} ml={'auto'} my={2} >
          <Button className={classes.connect} >
            <Image src={IconCon} alt="connect" />
            <Box ml={1} >CONNECT</Box>               
          </Button>
        </Box> 

        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
             onClick: handleDrawerOpen,
          }}          
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>        
      </Toolbar>
    );
  };

  return (isMobile ? displayMobile():    
    (<Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Box ml={3} mr={5} my={1}>
        <Image src={logo} alt="logo" />
      </Box>
      <Stack 
        direction="row" 
        spacing={3} 
        className={classes.navbar}
      >
        {menuItems.map(({ path, label }, i) => (
          <NavLink key={i} path={path} label={label} isMobile={isMobile} />
        ))}
      </Stack>
      <Box mr={3} ml={'auto'} my={2}>
        <Button className={classes.connect} >
          <Image src={IconCon} alt="connect" />
          <Box ml={1} >CONNECT</Box>               
        </Button>
      </Box>
    </Toolbar>)
  );
};

export default Navbar;

