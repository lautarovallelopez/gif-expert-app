import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs';

const GifGrid = ({ category }) => {
    const gifs = getGifs(category);
    console.log(gifs);
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