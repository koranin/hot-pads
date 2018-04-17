import React, { Component } from 'react';
import Image from './Image';
import SwipeableViews from 'react-swipeable-views';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {imageIndex: 0}
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleImageClick() {
    const lastImageIndex = this.props.images.length - 1;
    this.setState(previousState => {
      const previousImageIndex = previousState.imageIndex;
      const imageIndex = previousImageIndex === lastImageIndex ?
        0 : 
        previousImageIndex + 1;
     
      return {
        imageIndex
      };
    });
  }

  handleChangeIndex(index) {
    this.setState({
      imageIndex: index
    });
  };

  render() {
    console.log('render');
    const { imageIndex } = this.state;

    return (
      <SwipeableViews index={imageIndex} 
                      onChangeIndex={this.handleChangeIndex} 
                      enableMouseEvents>
        {this.props.images.map(image => (
          <div onClick={this.handleImageClick}>
            <Image {...image} />
          </div>
        ))}
      </SwipeableViews>
    );
  }
}

export default PhotoGallery;
