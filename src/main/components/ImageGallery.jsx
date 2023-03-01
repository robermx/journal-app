import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { imageData } from '../../data';

export const ImageGallery = () => {
  const sm = useMediaQuery('(min-width:600px)');
  const md = useMediaQuery('(min-width:900px)');
  const lg = useMediaQuery('(min-width:1200px)');

  return (
    <ImageList
      sx={{ width: '100%', height: 400 }}
      cols={lg ? 5 : md ? 4 : sm ? 3 : 2}
    >
      {imageData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
