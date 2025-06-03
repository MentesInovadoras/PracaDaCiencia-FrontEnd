import { useEffect, useState } from 'react';
import { ImageList, ImageListItem, Typography, Dialog, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

const Galeria: React.FC = () => {
    const imgs: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [fade, setFade] = useState(true);

    const handleOpen = (index: number) => {
        setSelectedIndex(index);
        setFade(true);
    };

    const handleClose = () => setSelectedIndex(null);

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setFade(false);
            setTimeout(() => {
                setSelectedIndex(prev => prev! > 0 ? prev! - 1 : imgs.length - 1);
                setFade(true);
            }, 150);
        }
    };

    const handleNext = () => {
        if (selectedIndex !== null) {
            setFade(false);
            setTimeout(() => {
                setSelectedIndex(prev => prev! < imgs.length - 1 ? prev! + 1 : 0);
                setFade(true);
            }, 150);
        }
    };

    // Navegação por teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'Escape') handleClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Galeria de Fotos
            </Typography>

            <ImageList sx={{ width: "100%", objectFit: "cover" }} cols={3}>
                {imgs.map((item, index) => (
                    <ImageListItem key={item} onClick={() => handleOpen(index)} sx={{ cursor: 'pointer' }}
                    >
                        <img src={item} alt={`Imagem ${index + 1}`} loading="lazy" style={{ width: '100%', height: 'auto' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog 
                open={selectedIndex !== null} 
                onClose={handleClose} 
                maxWidth="md"
                PaperProps={{ 
                    sx: { backgroundColor: 'transparent', boxShadow: 'none', overflow: 'hidden'} 
                }}
            >
                <Box sx={{ position: 'relative', backgroundColor: '#000', p: 2 }}>
                    
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 2 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <IconButton
                        onClick={handlePrev}
                        sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', color: '#fff', zIndex: 2 }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', color: '#fff', zIndex: 2 }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>

                    {selectedIndex !== null && (
                        <img
                            key={selectedIndex} src={imgs[selectedIndex]} alt={`Imagem ${selectedIndex + 1}`} 
                            style={{ 
                                maxWidth: '80vw', 
                                maxHeight: '80vh', 
                                display: 'block', 
                                margin: 'auto',
                                opacity: fade ? 1 : 0,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                        />
                    )}
                </Box>
            </Dialog>
        </>
    );
};

export default Galeria;
