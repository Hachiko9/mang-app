import React from "react";
import MangaBox from "./MangaBox";

const Collection = ({collection}) => {
    const getLastVolume = () => {
        return collection.volumes.sort((a, b) => b - a)[0]
    }

    return (
        <div className='collection--container'>
            <img className='collection--img' src={collection.cover} alt="manga's cover"/>
            <div className='collection--info'>
                <h1 className='collection--title'>{collection.title}</h1>
                <p>Last bought volume: {getLastVolume()}</p>
                {collection.missingVolumes.length > 0 &&
                    <div>Missing volumes:
                        <ul>
                            {collection.missingVolumes.map(volume =>
                                <li>{volume}</li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Collection;
