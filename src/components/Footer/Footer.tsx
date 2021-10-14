import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image'
import { Fragment, useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import FooterMark from 'assets/images/footer-mark.png';
import Shape from 'assets/images/icons/shape.png';
import Discord from 'assets/images/icons/discord.png';
import Twitter from 'assets/images/icons/twitter.png';
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => createStyles({
  copyright: {
    color: '#fff',
    fontSize: '14px',    
  },
  footer: {
    backgroundColor: "#000",
  }
}), {name : "MuiFooterComponent"});

const Footer = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
  <Fragment>    
    <Box id="footer" className={classes.footer} p={2}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
          <Grid item container xs={3} alignItems="center" justifyContent="center">
            <Typography variant="body1" className={classes.copyright}>
              Copyright by {new Date().getFullYear()} RedQ, Inc
            </Typography>
          </Grid>
          <Grid item container xs={6} alignItems="center" justifyContent="center">
            <Image src={FooterMark}/>
          </Grid>
          <Grid item container xs={3} alignItems="center" justifyContent="center">
            <Grid item xs={4}>
              <Image src={Discord}/>
            </Grid>
            <Grid item xs={4}>
              <Image src={Twitter}/>
            </Grid>
            <Grid item xs={4}>
              <Image src={Shape}/>
            </Grid>              
          </Grid>
      </Grid>     
    </Box>
  </Fragment>
  );
};

export default Footer;