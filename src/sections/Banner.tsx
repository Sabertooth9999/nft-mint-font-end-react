import {
  Box,
  Button,
  Grid
} from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import intro from 'assets/images/intro.png';
import SectionHeading from 'components/SectionHeading';
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Clock  from 'components/Clock';

const useStyles =  makeStyles((theme: Theme) => createStyles({
  join: {
    display: 'flex',
    color: 'white',
    fontSize: '14px',    
    backgroundColor: '#ffffff1f',
    padding: '8px 30px 8px 30px',
    borderRadius: '10px',
    border: '2px solid #dddddd61',
  },
  clock:{
    color: 'white', 
    backgroundColor: '#ffffff1f',
    padding: '8px 10px 8px 10px',
    borderRadius: '25px',
    border: '2px solid #dddddd61', 
  },
}), {name : "MuiBannerComponent"});

const Banner = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
    <Box id="home" mx={{sm:1, md: 2, lg: 3}} pt={15} pb={12} >
      <Grid container spacing={4} >
        <Grid item xs={12} sm={12} md={6} lg={6}>         
          <Image src={intro} loading="lazy" alt="intro" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>   
          <SectionHeading
            title="They’ve Arrived!"
            description='The FOMO is real and they’ve got HOPIUM by the flask! Plutonian Wehopiums have arrived to help you fill your bag, buy the dip and ignore the FUD!!
              Wehopiums are a collection on 3500 dope hand drawn NFTs at home on the Solana blockchain. Each one is has unique traits and rarity! But what’s the kicker? these NFTs have real value!!.'
          />      
          <Box ml={5} mt={4}>
            <Button className={classes.join}>                 
               JOIN OUR DISCORD               
            </Button>
          </Box>
          <Box className={classes.clock} mt={8} >
            <Clock 
                duration={500000} />
          </Box> 
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;