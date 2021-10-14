import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import SectionHeading from 'components/SectionHeading'
import Tony from 'assets/images/team/tony-won.png'
import Minuto from 'assets/images/team/minuto.png'
import FooterMark from 'assets/images/footer-mark.png'
import Shape from 'assets/images/icons/shape.png'
import Discord from 'assets/images/icons/discord.png'
import Twitter from 'assets/images/icons/twitter.png'
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '38px'
  }, 
  thumbnail: {
    mb: [1],
    img: {
      borderRadius: 5,
    },
    display: 'flex',
    justifyContent: 'center'
  }, 
  text: {
    fontSize: '16px', 
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Myriad Pro'
  }
}), {name : "MuiTeamComponent"});

const Team = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
    <Box id="team" mx={{sm: 1, md: 2, lg: 3}} pt={17} pb={7}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Typography variant="body1" align="center" className={classes.heading}>
            The Team
          </Typography>          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box ml={{xs:0, sm:0, md:20}}>
            <Box className={classes.thumbnail} alignItems="center" justifyContent="center" >
              <Image src={Tony} loading="lazy" alt="tony-won" />              
            </Box>
            <Box>
              <Typography variant="body1" className={classes.text}>
                Chief Design Officer
              </Typography>
              <Typography variant="body1" className={classes.text}>
                @tony-won
              </Typography>
            </Box>            
          </Box>          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box mr={{xs:0, sm:0, md:20}}>
            <Box className={classes.thumbnail} alignItems="center" justifyContent="center" >
              <Image src={Minuto} loading="lazy" alt="tony-won" />              
            </Box>
            <Box>
              <Typography variant="body1" className={classes.text}>
                Chief Technology Officer
              </Typography>
              <Typography variant="body1" className={classes.text}>
                @Minuto
              </Typography>
            </Box>            
          </Box>          
        </Grid>        
      </Grid>     
    </Box>
  );
};

export default Team;