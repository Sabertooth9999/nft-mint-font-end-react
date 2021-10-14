import { ImageList, Box, ImageListItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const images =
  [
    {
      src: "/static/gallery/839.png",
      label: "839",
    }, 
    {
      src: "/static/gallery/845.png",
      label: "845",
    },
    {
      src: "/static/gallery/962.png",
      label: "962",
    },
    {
      src: "/static/gallery/1033.png",
      label: "1033",
    },
    {
      src: "/static/gallery/1065.png",
      label: "1065",
    },
    {
      src: "/static/gallery/1224.png",
      label: "1224",
    },
    {
      src: "/static/gallery/1255.png",
      label: "1255",
    },
    {
      src: "/static/gallery/1331.png",
      label: "1331",
    },
    {
      src: "/static/gallery/1594.png",
      label: "1594",
    },
    {
      src: "/static/gallery/2287.png",
      label: "2287",
    }    
  ];


const useStyles = makeStyles((theme: Theme) => createStyles({
  subtitle: {
    color: "#fff",
    fontSize: "20px"
  },
  relative:{
    position: 'relative'
  },
  absolute:{
    position: 'absolute',
    top: '20%',
    left: '57%'
  }
}), {name : "MuiGalleryComponent"});

const Gallery = () => {

  const classes = useStyles();

  const [cols, setCols] = useState(5);  

  const theme = useTheme();

  let isSm = useMediaQuery(theme.breakpoints.down('sm'));
  let isSmToMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    if (isSm) setCols(2)
    else if (isSmToMd) setCols(3)
    else setCols(5)
  }, [isSm, isSmToMd]);

  return (
    <Box id="gallery" mx={{sm:1, md: 2, lg: 3}} pt={12} pb={12}>
      <ImageList cols={cols}>
        {images.map(({src, label}, i) => (
          <ImageListItem key={i}>
            <img
              src={`${src}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={label}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;