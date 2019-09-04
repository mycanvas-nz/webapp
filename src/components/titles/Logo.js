import React, { Component } from 'react'

import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
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
        return (
            <Wrapper>
                <Title>CANVAS</Title>
                <MiniTitle>closed beta</MiniTitle>
            </Wrapper>
        )
    }
}
