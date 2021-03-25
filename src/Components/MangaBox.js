import React from 'react';
import './MangaBox.css';

const MangaBox = ({volume, cover}) => {
    return (
        <div className='manga-box--container'>
            <img className='manga-box--img' src={cover}/>
            <div className='manga-box--text'>
                <p className='manga-box--volume'> Volume {volume}</p>
            </div>
        </div>
    );
}

export default MangaBox;
