import React from 'react';
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifApp  = () => {
    // const categories =['One Punch','Samurai X','Dragon ball']
    const [categories, setCategories] = React.useState([]);

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                    <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    );
};

export default GifApp;