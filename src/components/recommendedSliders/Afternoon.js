import React, { Component } from 'react'

import styled, {keyframes} from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';

import {Slide, Text , Title} from './style'

const Background = styled(Slide)`
    background: #01c6c0;
    background: -moz-linear-gradient(top,  #01c6c0 0%, #00c748 100%);
    background: -webkit-linear-gradient(top,  #01c6c0 0%,#00c748 100%);
    background: linear-gradient(to bottom,  #01c6c0 0%,#00c748 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#01c6c0', endColorstr='#00c748',GradientType=0 );
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Sun = styled(FontAwesomeIcon)`
    color: #F9E20E;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 5;
    animation: ${spin} 12s linear infinite;
`;

const Mount = styled.div`
    position: absolute;
    background: #00FF2B;
    left: 0px;
    bottom: 0px; 
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

const SmallMount = styled(Mount)`
    clip-path: polygon(20% 55%, 5% 100%, 36% 100%);
    z-index: 2;
`;

const BigMount = styled(Mount)`
    clip-path: polygon(47% 26%, 25% 100%, 67% 100%);
    z-index: 3;
`;


export default class Afternoon extends Component {
    render() {
        return (
            <Background>
                <Sun size="2x" icon={faSun}/>
                <SmallMount/>
                <BigMount/>
                <Text>
                    <Title>Afternoon Vibes</Title>
                </Text>
            </Background>
        )
    }
}
