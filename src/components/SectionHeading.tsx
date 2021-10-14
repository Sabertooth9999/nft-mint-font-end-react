import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    color: "#fff",
    fontSize: '38px'
  },
  description: {
    color: "#fff",
    fontSize: '14px'
  }
}), {name : "MuiSectionHeadingComponent"});

type Props = {
  title: string,
  description: string
}

const SectionHeading = (props : Props) => {

  const classes = useStyles();

  return (
    <Box mx={{xs:1, md:2, lg:3}} mt={3}>
      <Typography variant="body1" align="left" className={classes.heading} mb={3}>
        {props.title}
      </Typography>
      <Typography variant="caption" display="block" className={classes.description}>
        {props.description}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
