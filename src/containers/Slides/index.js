import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Slides extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-media1.fl.yelpcdn.com/bphoto/t2aQbOKkPGXTGq6cWSAkKA/o.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-media3.fl.yelpcdn.com/bphoto/9TXLp6NVh-vqAJiTbJSXXA/o.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-media2.fl.yelpcdn.com/bphoto/c1uGlXumvKhSniJIkXF0bg/o.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-media2.fl.yelpcdn.com/bphoto/og0kvFeNsylvbQXQDdrR9w/o.jpg"
              alt="Forth slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
}
  
export default Slides;