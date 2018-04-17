import React from 'react';

const Image = ({ url, caption }) => (
  <div className="image">
    <img src={url} />
    <h4>{caption}</h4>
  </div>
);

export default Image;