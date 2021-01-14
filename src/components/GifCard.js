import React from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifCard = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card">
                {
                    images.map(gif => (
                        <GifItem 
                            key={gif.id}
                            { ...gif }
                            img={gif} />
                    ))
                }
            </div>
        </>
    )
}

export default GifCard;