import React from 'react';
import Swipeable from 'react-swipeable';

import pictures from '../utils/importPictures';
import {
  STEP_1, STEP_2, STEP_3, STEP_4, STEP_5,
} from '../utils/constants';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [STEP_1, STEP_2, STEP_3, STEP_4, STEP_5],
      activeIndex: 1,
      left: 0,
      width: window.innerWidth,
      parameter: 900,
    };
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions = () => {
    this.setState(() => ({ width: window.innerWidth }));
    (this.state.width < 900 && this.state.parameter === 900) ? this.setState(() => (
      { left: 0, activeIndex: 1, parameter: 540 }
    )) : null;
    (this.state.width > 900 && this.state.parameter === 540) ? this.setState(() => (
      { left: 0, activeIndex: 1, parameter: 900 }
    )) : null;
  }

  prevSlide = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + this.state.parameter,
    });
    if (this.state.activeIndex === 1) {
      this.setState(() => ({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: this.state.left - this.state.parameter * (this.state.slider.length - 1),
      }));
    }
  }

  nextSlide = () => {
    this.setState(() => ({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.state.parameter,
    }));
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState(() => ({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0,
      }));
    }
  }

  clickIndicator = (e) => {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.state.parameter - parseInt(e.target.textContent) * this.state.parameter,
    });
  }

  render() {
    const { slider, activeIndex, left } = this.state;
    const style = {
      left,
    };
    return (
      <div className="sliderBlock">
        <div onClick={this.prevSlide}>
          <img className="prevSlide" src={pictures['arrow-left.png']} alt="left-arrow" />
        </div>
        <Swipeable
        onSwipedLeft={this.nextSlide}
        onSwipedRight={this.prevSlide}
        className="slider-indicators-wrapper"
        >
          <div className="slider-wrapper">
              <ul className="slider">
                {slider.map((item, index) => (
                  <li key={item} style={style} className={index + 1 === activeIndex ? 'slider-item' : 'hide'}>
                    <div className="stepNumber">
                      <p>{index + 1}</p>
                    </div>
                    <div className="instructions">
                      <p>{ item }</p>
                    </div>
                  </li>
                ), this)}
              </ul>
          </div>
          <ul className="indicators">
            {this.state.slider.map(function(item, index) {
              return (
                <li className={index+1 === activeIndex ? 'active-indicator' : ''} onClick={this.clickIndicator}>{index+1}</li>
              );
            }, this)}
          </ul>
        </Swipeable>
        <div onClick={this.nextSlide}>
          <img className="nextSlide" src={pictures['arrow-right.png']} alt="right-arrow" />
        </div>
      </div>
    );
  }
}

export default Slider;
