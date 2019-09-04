import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled, {ThemeProvider} from 'styled-components'

const Title = styled.h3`
  font-size: 1.1em;
  margin: 0;
  text-transform: lowercase;
  font-weight: 400;
  color: ${props => props.theme.primacyColor};
`;

export class smallTitle extends Component {
    render() {
        return (
            <ThemeProvider theme={this.props.theme.theme}>
                <Title>{this.props.message}</Title>
                
            </ThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
    }
}


export default connect(mapStateToProps)(smallTitle)
