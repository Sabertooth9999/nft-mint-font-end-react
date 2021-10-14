import { Box, Typography, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import Timeline from 'components/Timeline';  
import { Theme } from "@mui/material";


const items = [
  {
    title: 'August 2021',
    description: 'Wehopiums begin to take life',
    active: true
  },
  {
    title: 'September 2021',
    description: 'working with Solana NFT marketplaces to be listed and verified',
    active: true
  },
  {
    title: 'November 1',
    description: 'Dropdate Wehopiums are live and ready to mint',
    active: true
  },
  {
    title: '',
    description: 'Sol Giveaway on discord for lucky Wehopium Holders',
    active: false
  },
  {
    title: '2022 Q1',
    description: 'Community vote on Royality Rewards (frequency & deligation)Wehopiums begin to take life',
    active: false
  },
  {
    title: '2022 Q1',
    description: '1st Royality Rewards paid out to holders',
    active: false
  },
  {
    title: '2022 Q1',
    description: 'Appreciation airprod to the top 5 most active community members',
    active: false
  }
];

const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '38px'
  }  
}), {name : "MuiRoadmapComponent"});

const Roadmap = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
    <Box id="roadmap" mx={{sm:1, md: 2, lg: 3}} pt={17} pb={14} sx={{minHeight: '80vh'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" align="right" className={classes.heading} mb={25}>
            Roadmap
          </Typography>          
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} px={3}>
          <Timeline items={items} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Roadmap;