import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDay,faStar} from '@fortawesome/free-solid-svg-icons';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const Image = styled.img`
    width: calc(100% - 10px);
    height: 500px;
    margin-right: 10px;
    object-fit: cover;
`;

const Holder = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`;

export class EventSlider extends Component {

    RenderEvents(){
        return(
            this.props.events.map(events => 
              <Container key={events.id}>
                  <Image src={events.imgURL} alt={events.name} />
                  <Holder className="event-title">
                      <h2>
                          <FontAwesomeIcon icon={faCalendarDay} />
                          <br/>
                          {events.name}
                          <br/>
                          {[...Array(events.stars)].map((e, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
                      </h2>
                  </Holder>
              </Container>
              )
        )
    }

    render() {
        return (
            <div>
                <AliceCarousel
                    className="slider"
                    mouseDragEnabled
                    buttonsDisabled
                    dotsDisabled
                    autoPlay
                    autoPlayInterval={4500}
                    stagePadding={
                        {paddingRight: 20,}
                    }   
                >
                    {this.RenderEvents()}
                </AliceCarousel>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        events: state.Events,
    }
}


export default connect(mapStateToProps)(EventSlider)
