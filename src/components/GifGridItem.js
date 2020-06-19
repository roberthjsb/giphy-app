import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ img }) => {
    return (
        <div className="card">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    );
};

GifGridItem.propTypes = {

};

export default GifGridItem;