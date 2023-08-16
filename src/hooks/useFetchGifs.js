import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = category => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        images, 
        isLoading
    }
};

export default useFetchGifs;