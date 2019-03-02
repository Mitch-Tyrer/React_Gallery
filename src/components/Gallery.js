import React from 'react';
import Image from './Image';
import NoResults from './NoResults';

const Gallery = (props) => {

    const photos = props.data;
     let imgs;

     if(photos.length > 0) {
         imgs = photos.map( photo => 
            <Image key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
            ); 
     } else {
         imgs = <NoResults />
     }

    return (
        <div className="photo-container">
            <ul>
                {imgs}
            </ul>
        </div>
    );
}

export default Gallery;