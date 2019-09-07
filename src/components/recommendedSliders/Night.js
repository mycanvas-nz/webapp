import React, { Component } from 'react'

import styled, {keyframes} from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCloud} from '@fortawesome/free-solid-svg-icons';

import {Slide, Text , Title} from './style'

const Background = styled(Slide)`
    background: rgb(0,0,0);
    background: -moz-linear-gradient(top,  rgba(0,0,0,1) 0%, rgba(73,73,73,1) 100%);
    background: -webkit-linear-gradient(top,  rgba(0,0,0,1) 0%,rgba(73,73,73,1) 100%);
    background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(73,73,73,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#494949',GradientType=0 );
`;

const Shift = keyframes`
  0% {
    left: 15px;
  }

  50% {
    left: 35px;
  }

  100% {
    left: 15px;
  }
`;

const Shift2 = keyframes`
  0% {
    left: 35px;
  }

  50% {
    left: 15px;
  }

  100% {
    left: 35px;
  }
`;

const Moon = styled(FontAwesomeIcon)`
    color: #F9E20E;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 5;
`;

const Cloud = styled(FontAwesomeIcon)`
    color: #fff;
    position: absolute;
    top: 48px;
    left: 25px;
    z-index: 6;
    animation: ${Shift} 5s ease-in-out infinite;
`;

const Cloud2 = styled(FontAwesomeIcon)`
    color: #fff;
    position: absolute;
    top: 20px;
    left: 25px;
    z-index: 4;
    animation: ${Shift2} 5s ease-in-out infinite;
`;



export default class Night extends Component {
    render() {
        return (
            <Background>
                <Moon size="4x" icon={faMoon}/>
                <Cloud size="3x" icon={faCloud}/>
                <Cloud2 size="2x" icon={faCloud}/>
                <Text>
                    <Title>Night Vibes</Title>
                </Text>
            </Background>
        )
    }
}
