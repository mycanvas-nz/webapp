import React, { Component } from 'react'
import { connect } from 'react-redux'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export class RecommendedSlider extends Component {
    render() {
        return (
            <div>
                <AliceCarousel 
                    mouseDragEnabled
                    buttonsDisabled
                    dotsDisabled
                    autoPlay 
                    autoPlayInterval={4400}   
                >
                    <h1>Test</h1>
                    <h1>TEst2</h1>
                    <h1>Test3</h1>
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
