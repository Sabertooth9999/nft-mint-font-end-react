import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Theme } from "@mui/material";

const useStyles = makeStyles<Theme, Props>((theme: Theme) => createStyles({
  containerStyles : {
    height: 25,
    width: '100%',
    backgroundColor: "#e0e0de00",
    borderRadius: 50,
    border: '1px solid #ffffffbd',  
  },
  fillerStyles : {
    height: '100%',   
    backgroundColor: "#689c24",
    borderRadius: 'inherit',
    textAlign: 'right'
  },
  labelStyles : {
    color: 'white',
    width: '100%',
    textAlign: 'right' 
  },
  labelAvailable : {
    color: 'white',
    width: '100%',
    textAlign: 'left'
  },
  labelContent : {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
}), {name : "MuiProgressComponent"});

type Props = {
   completed : number,
   maxValue : number
}

const ProgressBar = (props : Props) => {

  const {completed, maxValue} = props;

  const classes = useStyles(props);
  
  return (
  	<Box>
  		<Box className={classes.labelContent}>
  			<Box className={classes.labelAvailable}>Available</Box>
  			<Box className={classes.labelStyles}>{`${completed}/${maxValue}`}</Box>
  		</Box>
	    <Box className={classes.containerStyles}>
	      <Box className={classes.fillerStyles} sx={{width: `${completed*100/maxValue}%`}}>        
	      </Box>
	    </Box>
    </Box>
  );
};

export default ProgressBar;