import React, { Component } from 'react'

import styled from 'styled-components'

const VersionNumber = "v.015180512";

const Label = styled.h5`
    font-size: 1.1em;
    margin: 40px 0px 100px 0px;
    text-transform: lowercase;
    font-weight: 400;
    text-align: center;
    color: ${props => props.theme.secondaryColor};
`;

export default class Footer extends Component {
    render() {
        return (
            <Label>
                canvas
                <br/>
                {VersionNumber}
            </Label>
        )
    }
}
