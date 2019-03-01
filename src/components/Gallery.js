import React from 'react';
import Image from './Image';

const Gallery = (props) => {

    const photos = props.data;
     let imgs = photos.map( photo => 
        <Image key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
        ); 

    return (
        <div className="photo-container">
            <ul>
                {imgs}
            </ul>
        </div>
    );
}

export default Gallery;