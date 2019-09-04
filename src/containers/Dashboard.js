import React, { Component } from 'react'

import { connect } from 'react-redux'

import {animateScroll} from 'react-scroll';

import Logo from '../components/titles/Logo'
import MainTitle from '../components/titles/mainTitle'
import SmallTitle from '../components/titles/smallTitle'

import styled, {ThemeProvider} from 'styled-components'
import {Page} from './style'

const Background = styled.div`
    background: ${props => props.theme.primacyColor};
    background: -moz-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: -webkit-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: linear-gradient(to right,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props => props.theme.primacyColor}', endColorstr='${props => props.theme.primacyColor2}',GradientType=1 );

`;

class Dashboard extends Component {
    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme.theme}>
                <Background>
                    <Logo/>
                    <MainTitle message={"My Dashboard"}/>
                    <Page>
                        <SmallTitle message={"Try Theses"} />
                        <SmallTitle message={"Quick Access"} />
                        <SmallTitle message={"nearby events"} />
                    </Page>
                </Background>
            </ThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
    }
}


export default connect(mapStateToProps)(Dashboard)
