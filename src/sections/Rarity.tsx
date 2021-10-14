import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '38px'
  }  
}), {name : "MuiRarityComponent"});

const Rarity = () => {

  const classes = useStyles();

  const [state, setState] = useState({
 
  });  

  return (
    <Box id="rarity" mx={3} pt={17} pb={12}>
      <Box sx={{minHeight: '80vh'}}>
        <Typography variant="body1" align="right" className={classes.heading}>
          Rarity
        </Typography>          
      </Box>      
    </Box>
  );
};

export default Rarity;