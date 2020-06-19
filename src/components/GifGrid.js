import React ,{useState} from 'react';
import GifGridItem from './GifGridItem';
import useGifFetch from '../hooks/useGifFetch'
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
    const {data:images,loading} = useGifFetch(category);
    return (
        <div>
            <h3>{category}</h3>
            {loading && <p>loading...</p>}
            <div className="card-grid">
                {  images.map(img => <GifGridItem key={img.id} img={img}/>) }
            </div>
        </div>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;