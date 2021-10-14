import { Link as MenuLink } from 'react-scroll';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  mobileNav: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
  },
}), {name : "MuiLinkComponent"});

type Props = {
  path : string,
  label : string,
  children? : any,
  isMobile : boolean
}

const NavLink = ({ path, label, children, isMobile, ...rest } : Props) => {

  const classes = useStyles();

  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-10}
      smooth={true}
      duration={1000}
      className= { isMobile ? classes.mobileNav : "nav-item"}
      activeClass='active'
      {...rest}
    >
      {label}
    </MenuLink>
  );
}; 



export default NavLink;