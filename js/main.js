import './../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './components/PhotoGallery';

const images = [
  {url: 'url1', caption: 'cap1'},
  {url: 'url2', caption: 'cap2'},
  {url: 'url3', caption: 'cap3'},
]

ReactDOM.render(
  <PhotoGallery images={images} />,
  document.getElementById('app')
);