import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { Transition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';


import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 10px;
    
`;

const Image = styled.img`
    width: calc(100% - 10px);
    height: calc(100% - 4px );
    margin-right: 10px;
    object-fit: cover;
    border-radius: 10px;
    display: inline-block;
    border: solid 2px ${props => props.theme.secondaryColor};
`;

const Holder = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;
`;

const Cric = styled.div`
    position: absolute;
    background: ${props => props.theme.circColor1};
    opacity: .75;
    top: 0px;
    left: 0px;
    clip-path: circle(56.5% at 3% 51%);
    width: 100%;
    height: calc(100% - 4px );
    z-index: 5;
    border: solid 2px ${props => props.theme.secondaryColor};
    border-radius: 10px;
`;

const Cric2 = styled.div`
    position: absolute;
    background: ${props => props.theme.circColor2};
    opacity: .65;
    top: 0px;
    left: 0px;
    clip-path: circle(56.5% at 6% 76%);
    width: 100%;
    height: calc(100% - 4px );
    z-index: 4;
    border: solid 2px ${props => props.theme.secondaryColor};
    border-radius: 10px;
`;

const Text = styled.h2`
    margin:0;
    color:#fff;
    padding: 15px;
    width: 50%;
    font-size: 1.7em;
    text-transform: uppercase;
    font-weight: 500;
`;

const Date = styled.strong`
    font-size: 0.8em;
    font-weight: 300;
`;

export class EventSlider extends Component {

    
    RenderEvents(){
        return(
            this.props.events.map(events => 
              <Container key={events.id}>
                  <LazyLoad throttle={200} height={300}>
                    <Transition key="1"
                        timeout={500}>
                            <Image src={events.imgURL} alt={events.name} />
                        </Transition>
                    </LazyLoad>
                  <Cric/>
                  <Cric2/>
                  <Holder className="event-title">
                      <Text>
                          <FontAwesomeIcon icon={faCalendarDay} />
                          <br/>
                          {events.name}
                          <br/>
                          <Date>
                            {events.dateDay}/{events.dateMonth}/{events.dateYear}
                          </Date>
                      </Text>
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
