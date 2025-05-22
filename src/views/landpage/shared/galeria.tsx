import { ImageList, ImageListItem, Typography } from '@mui/material';

import img1 from "./../../../assets/galeria/img1.jpg"
import img2 from "./../../../assets/galeria/img2.jpg"
import img3 from "./../../../assets/galeria/img3.jpg"
import img4 from "./../../../assets/galeria/img4.jpg"
import img5 from "./../../../assets/galeria/img5.jpg"
import img6 from "./../../../assets/galeria/img6.jpg"
import img7 from "./../../../assets/galeria/img7.jpg"
import img8 from "./../../../assets/galeria/img8.jpg"
import img9 from "./../../../assets/galeria/img9.jpg"
import img10 from "./../../../assets/galeria/img10.jpg"
import img11 from "./../../../assets/galeria/img11.jpg"
import img12 from "./../../../assets/galeria/img12.jpg"


const Galeria: React.FC = () =>
{
    const imgs: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    return(
        <>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Galeria
            </Typography>
            <ImageList sx={{ width: "100%", objectFit: "cover" }} cols={3} >
                {
                    imgs.map((item) => (
                    <ImageListItem key={item}>
                        <img 
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            alt={"teste"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    ))
                }
            </ImageList>
        </>
    )
}


export default Galeria;