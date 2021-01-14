import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategory }) => {
    const [inputValue, setInputValue]= useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategory((cats) => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div className="searchBox">
                <label for="searchf">Search GIF category</label>
                <input type="text"
                        name="searchf"
                        value={ inputValue }
                        onChange={ handleInputChange}
                />
            </div>
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default CategoryAdd;