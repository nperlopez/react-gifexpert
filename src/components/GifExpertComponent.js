import React, { useState } from 'react';
import CategoryAdd from './CategoryAdd';
import GifCard from './GifCard';

const GifExpertComponent = () => {
    const [category, setCategory] = useState(['Cats']);
    
    // const handleAdd = () => {
    //     // setCategory([...category, 'Meneíllos']);
    //     setCategory(cat => [...cat, 'Meneíllos']);
    // }

    return (
        <>
            <h1>GifExpert App</h1>
            <CategoryAdd setCategory={ setCategory } />
            <hr/>

            <ol>
                {
                    category.map(cat => (
                        <GifCard
                            key={ cat }
                            category={ cat }
                        />
                    ))
                }
            </ol>
            
        </>
    );
}

export default GifExpertComponent;