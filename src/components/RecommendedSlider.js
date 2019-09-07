import React, { Component } from 'react'
import { connect } from 'react-redux'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import AfternoonSlide from './recommendedSliders/Afternoon'
import NightSlide from './recommendedSliders/Night'

export class RecommendedSlider extends Component {
    render() {
        return (
            <div>
                <AliceCarousel 
                    className="slider"
                    mouseDragEnabled
                    buttonsDisabled
                    dotsDisabled
                    autoPlay
                    autoPlayInterval={4200}
                    stagePadding={
                        {paddingRight: 20,}
                    }  
                >
                    <AfternoonSlide/>
                    <NightSlide/>
                    <AfternoonSlide/>
                    <NightSlide/>
                </AliceCarousel>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
    }
}


export default connect(mapStateToProps)(RecommendedSlider)
