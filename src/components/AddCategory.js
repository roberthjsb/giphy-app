import React,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(categoryItems=>[category,...categoryItems]);
        setCategory('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={category}
                onChange={handleChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;