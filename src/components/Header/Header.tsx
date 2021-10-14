import Image from 'next/image';
import { Fragment, useState, useEffect} from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from "@mui/material";
import Navbar from './Navbar';
import AppBar from "@mui/material/AppBar";


export default function Header() {  

  const [state, setState] = useState({
    isMobileMenu: false,
  });

  const {isMobileMenu} = state;

  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1290
        ? setState((prevState) => ({ ...prevState, isMobileMenu: true }))
        : setState((prevState) => ({ ...prevState, isMobileMenu: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <Fragment>
      <AppBar position="fixed" sx={{backgroundColor: '#ffffff00'}} >
        <Navbar
          isMobile={state.isMobileMenu}
          handleCloseMenu={handleCloseMenu}
        />
      </AppBar>
    </Fragment>
  );
}