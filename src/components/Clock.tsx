import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Countdown from 'react-countdown';

const useStyles = makeStyles((theme: Theme) => createStyles({
  clockStyle: {
    height: '4rem',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    letterSpacing: '5px'
  },
  clockHeaderStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clockSubHeader: {
    marginBottom: '10px',
    fontSize: '16px',
    letterSpacing: 'initial',
  },
  seperator: {
    marginBottom: '10px',
    fontSize: '16px',
    letterSpacing: 'initial',
    color: 'transparent',
  },
  clockTitleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '24px',
    display: 'flex'
  },
  clockItemStyle: {
    marginBottom: '-10px',
    fontSize: '48px',
  }
}), {name : "MuiClockComponent"});

type Props = {
  duration: number
}

type CountDown = {
  days: any, 
  hours: any, 
  minutes: any,
  seconds: any,
  completed: any
}

type Data = {
   days? : string,
   hours? : string,
   minutes? : string,
   seconds? : string
}

const Clock = ( props : Props ) =>{

  const classes = useStyles();

  const [state, setState] = useState({
    
  });

  const Days = ( {days} : Data ) => {
    return <>
      {
          <Box className={classes.clockHeaderStyle}>
            <Box className={classes.clockItemStyle} >{days}</Box>
            <Box className={classes.clockSubHeader} > Days </Box>
          </Box>
      }
    </>;
  };

  const Seperator = () => {
    return <Box className={classes.clockHeaderStyle} >
              <Box className={classes.clockItemStyle}>:</Box>
              <Box className={classes.seperator}>sp</Box>
            </Box>;
  };

  const Hours = ( {hours} : Data) => {
    return <Box className={classes.clockHeaderStyle} >
              <div className={classes.clockItemStyle}>{hours}</div>
              <div className={classes.clockSubHeader}> Hours </div>
            </Box>;
  };

  const Minutes = ({minutes} : Data) => {
    return <Box className={classes.clockHeaderStyle} >
              <div className={classes.clockItemStyle} >{minutes}</div>
              <div className={classes.clockSubHeader} > Minutes </div>
            </Box>
  };

  const Seconds = ({seconds} : Data) => {
    return <Box className={classes.clockHeaderStyle} >
              <div className={classes.clockItemStyle} >{seconds}</div>
              <div className={classes.clockSubHeader} > Seconds </div>
            </Box>
  };

  const renderer = ({days, hours, minutes, seconds, completed}:CountDown) => {
    if (completed) {
      // Render a complete state
      return (
        <Box>
          <Typography variant="body1" align="center" className={classes.clockTitleStyle} mb={1}>
            You are done!
          </Typography>
        </Box>
      );
    } else {
      // Render a countdown
      //{days}:{hours}:{minutes}:{seconds}
      return (
        <Box>
          <Typography variant="body1" align="left" className={classes.clockTitleStyle} mb={1}>
              Dropdate : November 1 - 8pm CET
          </Typography>
         <Grid container 
           spacing={0} 
           direction="row"
           alignItems="center"
           justifyContent="center"
         > 
           <Grid item xs={2} sm={2} md={2} lg={2} >       
             <Days days={days}/>
           </Grid>
           <Grid item xs={1} sm={1} md={1} lg={1}>  
             <Seperator />
           </Grid>
           <Grid item xs={2} sm={2} md={2} lg={2}>  
             <Hours hours={hours} />
           </Grid>
           <Grid item xs={1} sm={1} md={1} lg={1}>
            <Seperator />
           </Grid>
           <Grid item xs={2} sm={2} md={2} lg={2}>  
             <Minutes minutes={minutes} />
           </Grid>
           <Grid item xs={1} sm={1} md={1} lg={1}>
              <Seperator />
           </Grid>
           <Grid item xs={2} sm={2} md={2} lg={2}>  
             <Seconds seconds={seconds}/>
           </Grid>
         </Grid>
       </Box>
      );
    }
  };

  return (    
    <Countdown date={Date.now() + props.duration} renderer={renderer} />
  );

}

export default Clock;