import './../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './components/PhotoGallery';
import images from './images';

ReactDOM.render(
  <PhotoGallery images={images} />, 
  document.getElementById('app')
);
