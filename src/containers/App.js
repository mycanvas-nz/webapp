import React, { Component } from 'react'

import { connect } from 'react-redux'

import {animateScroll} from 'react-scroll';

import Logo from '../components/titles/Logo'
import MainTitle from '../components/titles/mainTitle'
import SmallTitle from '../components/titles/smallTitle'
import Footer from '../components/titles/Footer'

import AppletGrid from '../components/AppletGrid';

import styled, {ThemeProvider} from 'styled-components'
import {Page} from './style'


const Background = styled.div`
    background: ${props => props.theme.primacyColor};
    background: -moz-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: -webkit-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: linear-gradient(to right,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props => props.theme.primacyColor}', endColorstr='${props => props.theme.primacyColor2}',GradientType=1 );

`;

class App extends Component {
    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
    }
    render() {
        const AppletFav = this.props.applets.filter(function(applet) {
            return applet.fav === true
        })
        const AppletOther = this.props.applets.filter(function(applet) {
            return applet.fav === false
        })
        return (
            <ThemeProvider theme={this.props.theme.theme}>
                <Background>
                    <Logo/>
                    <MainTitle message={"Apps"}/>
                    <Page>
                        <SmallTitle message={"Favorites"} />
                        <AppletGrid applets={AppletFav}/>
                        <SmallTitle message={"Other"} />
                        <AppletGrid applets={AppletOther}/>
                        <Footer/>
                    </Page>
                </Background>
            </ThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
        applets: state.Applets,
    }
}


export default connect(mapStateToProps)(App)
