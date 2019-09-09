import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h2`
    font-size: 0.8em;
    margin: 0;
    text-align: justify;
    text-transform: lowercase;
    color: #fff;
    font-weight: 400;
    padding: 10px 30px 26px;
`;

export default class infoText extends Component {
    render() {
        return (
            <Title>{this.props.message}</Title>
        )
    }
}
