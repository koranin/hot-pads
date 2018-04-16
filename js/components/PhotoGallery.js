import react from 'react';

const Photo = ({ url, caption }) => (
  <div>
    <h4>{url}</h4>
    <h4>{caption}</h4>
  </div>
);

const PhotoGallery = ({ images }) => (
  <div>
    {images.map((image) => <Photo {...image} />)}
  </div>
);

export default PhotoGallery;