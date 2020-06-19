import { useState, useEffect } from 'react';
import GetGif from '../services/getGif'


const useGifFetch = category => {
    const [state, setState] = useState({
        data: [], loading: true
    });
    useEffect(() => {
        GetGif(category)
        .then(imgs=>{
            setState({data:imgs,loading:false});
        });
    }, [category])
    return state;
}

export default useGifFetch
