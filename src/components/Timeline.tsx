import { Box, Typography} from '@mui/material';
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
	heading: {
		textAlign: 'center',
		maxWidth: 660,
		margin: '0 auto 50px',
	},
  	title: {
      color: 'white',
      fontSize: '16px',
      fontFamily: 'Myriad Pro'
  	},
	timeline: {
	  height: '2px',
	  backgroundColor: '#ccc',	  
	  display: 'block'
	},
	timelineProgress: {
	  width: 0,
	  height: '100%',
	  backgroundColor: 'orange',
	},
	timelineItems: {
	  marginLeft: '-10px',
	  marginRight: '-10px',
	  marginTop: '-12px',
	  display: 'flex',
	  justifyContent: 'space-between',
	},
	timelineItem: {
	  position: 'relative',
	  backgroundImage: `url('/static/item_default.png')`,
	  width: '43px',
	  height: '55px',
	  top: '-25px',
	},
	timelineItemActive: {
	  position: 'relative',
	  backgroundImage: `url('/static/item_selected.png')`,
	  width: '43px',
	  height: '55px',
	  top: '-25px',
	},
	timelineContentTop: {
  	  position: 'absolute',
	  right: '50%',
	  transform: `translateX(50%)`,
	  width: '15vw',
	  padding: '5px 10px',
	  borderRadius: '5px',
	  textAlign: 'center',
	  color: 'white',
	  fontSize: '13px',
	  bottom: '100%',
	  display: 'block',
	  [theme.breakpoints.down('sm')]: {
		width: '25vw',
	  },
	  [theme.breakpoints.between('sm', 'md')]: {
		width: '20vw',
	  }
	},
	timelineContentBottom: {
  	  position: 'absolute',
	  left: '50%',
	  transform: `translateX(-50%)`,
	  width: '15vw',
	  padding: '5px 10px',
	  borderRadius: '5px',
	  textAlign: 'center',
	  color: 'white',
	  fontSize: '13px',
	  top: '120%',
	  [theme.breakpoints.down('sm')]: {
		top: '120%',
		width: '30vw',
	  },
	  [theme.breakpoints.between('sm', 'md')]: {
		top: '120%',
		width: '20vw',
	  }
	}

}), {name : "MuiTimelineComponent"});

type Item = {
	title : string,
	description : string,
	active: boolean
}
type Props = {
	items : Item[]	
}

const Timeline = (props : Props) => {
	const classes = useStyles();
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
		<Box className={classes.timeline} px={{xs:2, sm:2, md:2, lg:8}}>
			<Box className={classes.timelineProgress} sx={{ width: `${progressBarWidth}%`}}></Box>
			<Box className={classes.timelineItems}>
				{items.map((item, i) => (
					<Box key={i} className={item.active ? classes.timelineItemActive : classes.timelineItem}>
						<Box className={(i % 2) ? classes.timelineContentBottom : classes.timelineContentTop}>
							<Typography variant="body1" className={classes.title}>
					        	{item.title}				        	
					        </Typography>
					        <Typography variant="body1" className={classes.title}>
					          	{item.description}
					        </Typography>						
					    </Box>
					</Box>					
				))}
			</Box>
		</Box>
	)
}

export default Timeline