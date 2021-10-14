import { Box, Button, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import SectionHeading from 'components/SectionHeading';
import { makeStyles, createStyles } from '@mui/styles';
import ProgressBar from 'components/Progress'
import DefaultAvatar from 'assets/images/default_avatar.png';
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '20px'
  },
  subtitle: {
    color: "#fff",
    fontSize: "20px"
  },
  purchase: {
    display: 'flex',
    color: 'white',
    fontSize: '14px',    
    backgroundColor: '#ffffff1f',
    padding: '9px 40px 9px 40px',
    borderRadius: '10px',
    border: '2px solid #dddddd61',     
    fontWeight: 'normal' 
  },
  avatar:{
    backgroundColor: '#ffffff1f',
    borderRadius: '30px',
    border: '2px solid #dddddd61',
    [theme.breakpoints.down("sm")]:{
      width: "80vw"
    },
    width: '60%'
  }
}), {name : "MuiMintComponent"});

const items = [
  {
    fontType: 'body1',
    content: 'Dropdate: Novemeber 1- 8pm CET',
  },
  {
    fontType: 'body1',
    content: 'Cost: 2 sol',
  }
];

const Mint = () => {

  const classes = useStyles();

  const [state, setState] = useState({
    completed: 2000,
    maxValue: 3000,   
  });  

  return (
    <Box id="mint" mx={{sm:1, md: 2, lg: 3}} pt={{sm:8, md:12, lg:17}} pb={12} sx={{minHeight: '66vh'}}>     
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={6} lg={6}>         
           <SectionHeading              
              title="Mint a Wehopium"
              description="Wehopiums can only be minted one per transaction to give everyone a chance to get one, but nothing is stopping you from getting one, two or maybe three!"
            />
            <Box mx={{sm:1, md: 2, lg: 3}} mt={4}>
               {items.map(
                  ({fontType, content}, i) => ( 
                    <Typography key={i} variant="body1" className={classes.subtitle} my={2}>
                      {content}
                    </Typography>)
               )}             
            </Box>
            <Box mx={{sm:1, md: 2, lg: 3}} mt={5}>
              <ProgressBar completed={state.completed} maxValue={state.maxValue}/>
            </Box>            
        </Grid>
        <Grid item container xs={12} sm={12} md={6} lg={6} alignItems="center" justifyContent="center"> 
          <Box className={classes.avatar} py={2}>      
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center">
              <Image src={DefaultAvatar} alt="default avatar" />
            </Box>
            <Box 
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={2} >
              <Button
                variant="text"
                className={classes.purchase}
              >                 
                 PURCHASE              
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mint;