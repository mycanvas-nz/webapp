import React, { Component } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 30px 10px;
`;


const LinkTo = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 1.8em;
  margin: 0;
  text-transform: uppercase;
  color: #fff;
`;

const MiniTitle = styled.h4`
  font-size: 0.9em;
  margin: 0;
  margin-left: auto;
  text-transform: lowercase;
  color: #fff;
  font-weight: 400;
`;


export default class Logo extends Component {
    
    render() {
        if(this.props.isApplet){
            return (
                <Wrapper>
                    <LinkTo to="/apps">
                        <Title><FontAwesomeIcon icon={faArrowLeft}/> {this.props.title}</Title>
                    </LinkTo>
                    <MiniTitle>closed beta</MiniTitle>
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    <Title>CANVAS</Title>
                    <MiniTitle>closed beta</MiniTitle>
                </Wrapper>
            )
        }
    }
}
