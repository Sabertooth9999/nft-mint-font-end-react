import { Box,  Grid, Typography } from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import SectionHeading from 'components/SectionHeading';
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import GiveawayForward from 'assets/images/giveaway-1.png'
import GiveAwayIntro from 'assets/images/giveaway.png'


const useStyles = makeStyles((theme: Theme) => createStyles({
  subtitle: {
    color: "#fff",
    fontSize: "20px"
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    top: '20%',
    left: '57%',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    },
    [theme.breakpoints.between('sm', 'md')]:{
      display: 'none'
    },
    [theme.breakpoints.between('md', 'lg')]:{
      display: 'none'
    }
  },
  mineHidden: {
    display: 'block',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    },
    [theme.breakpoints.between('sm', 'md')]:{
      display: 'none'
    }
  },
  desc:{
    width: '76%',
    [theme.breakpoints.down('sm')]:{
      width: '90vw'
    },
    [theme.breakpoints.between('sm', 'md')]:{
      width: '90vw'
    },
    [theme.breakpoints.between('md', 'lg')]:{
      width: '95%'
    }
  }
  
}), {name : "MuiGiveawayComponent"});

const Giveaway = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
    <Box id="giveaway" mx={{sm:1, md: 2, lg: 3}} py={12} sx={{minHeight: '80vh'}}>
      <Grid container spacing={1} >
        <Grid item container md={4} lg={3} justifyContent="flex-end">
          <Box mt={{md:15, lg:25}} className={classes.mineHidden}>
            <Image src={GiveawayForward} alt="giveaway-forward" />
          </Box>
        </Grid>
        <Grid item md={8} lg={9}>
          <Box className={classes.relative}>
            <Box className={classes.desc}>
              <SectionHeading
                  title="Giveaway"
                  description="Ever only dreamt of 100x gains? We are giving you the chance to make it happen! 30 days after the final mint all wallets holding wehopiums have the chance to win a massive payday. We will randomly select some wallets and airdrop some massive gains!
                  "
              />
            </Box>
            <Box className={classes.subtitle}>
              <Typography variant="body1" my={2} ml={3} >
                 Dropdate: Novemeber 1- 8pm CET
              </Typography>
              <Typography variant="body1" my={2} ml={3}>
                1x 200 sol
              </Typography>
              <Typography variant="body1" my={2} ml={3}>
                2x 50 sol
              </Typography>
              <Typography variant="body1" my={2} ml={3}>
                10x 10 sol
              </Typography>
              <Typography variant="body1" my={3} ml={3}>
                Follow our discord to keep up to date with all announcements
              </Typography>
              
            </Box>
            <Box className={classes.absolute}>
              <Image src={GiveAwayIntro} alt="giveaway-intro" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Giveaway;