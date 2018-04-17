import React, { Component } from 'react';
import Image from './Image';
import SwipeableViews from 'react-swipeable-views';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      handleSwipe: false
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleSwitching = this.handleSwitching.bind(this);
  }

  handleImageClick() {

    console.log('state', this.state);
    if (this.state.handleSwipe) {
      this.setState(previousState => 
        Object.assign({}, previousState, {handleSwipe: false}));
      return;
    }
    const lastImageIndex = this.props.images.length - 1;
    this.setState(previousState => {
      const previousImageIndex = previousState.imageIndex;
      const imageIndex = previousImageIndex === lastImageIndex ?
        0 : 
        previousImageIndex + 1;
     
      return this.setState(previousState => 
        Object.assign({}, previousState, { imageIndex }));
    });
  }

  handleChangeIndex(index) {
    this.setState(previousState => 
      Object.assign({}, previousState, {imageIndex: index}));
  };

  handleSwitching(index) {
    this.setState(previousState => 
      Object.assign({}, previousState, {handleSwipe: true}));
  }

  render() {
    const { imageIndex } = this.state;

    return (
      <SwipeableViews index={imageIndex} 
                      onChangeIndex={this.handleChangeIndex}
                      onSwitching={this.handleSwitching} 
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
