import React from 'react';

const Photo = ({ url, caption }) => (
  <div>
    <h4>{url}</h4>
    <h4>{caption}</h4>
  </div>
);

const PhotoGallery = ({ photos }) => (
  <div>{photos.map(photo => <Photo {...photo} />)}</div>
);

export default PhotoGallery;
