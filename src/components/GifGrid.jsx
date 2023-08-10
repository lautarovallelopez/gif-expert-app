import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs';
import { useEffect } from 'react';

const GifGrid = ({ category }) => {
    useEffect(() => {
        getGifs(category);
    }, []);
    return (
        <>
            <h3>{category}</h3>
            <p>hola mundo</p>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;