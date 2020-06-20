import React,{useState} from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ img }) => {
    const [loading, setLoading] = useState(true)
    return (
        <div className="card">
            <img 
                src={img.url} 
                alt={img.title} 
                style={!loading ? {} : {display: 'none'}}
                onLoad={() => setLoading(false)}
            />
            {loading ? <p>loading...</p> :<p>{img.title}</p>}
        </div>
    );
};

GifGridItem.propTypes = {

};

export default GifGridItem;