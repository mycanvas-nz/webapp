import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

const Title = styled.h3`
  font-size: 1.1em;
  margin: 10px 0px;
  text-transform: lowercase;
  font-weight: 400;
  color: ${props => props.theme.primacyColor};
`;

export class smallTitle extends Component {
    render() {
        return (
            <Title>{this.props.message}</Title>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
    }
}


export default connect(mapStateToProps)(smallTitle)
