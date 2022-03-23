import React from 'react';
import Banner from '../components/Banner';
import PhotoGallery from '../components/PhotoGallery';


function Photo() {
  return (
    <div>
        <Banner title="Photo Gallery" text="View Our Past Events" bgImage="photo.png" />
        <PhotoGallery />
    </div>
  )
}

export default Photo