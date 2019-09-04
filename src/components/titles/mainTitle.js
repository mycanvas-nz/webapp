import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
  text-transform: lowercase;
  color: #fff;
  font-weight: 400;
  padding 12px 30px;
`;

export default class mainTitle extends Component {
    render() {
        return (
            <Title>{this.props.message}</Title>
        )
    }
}
