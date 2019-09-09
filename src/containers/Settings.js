import React, { Component } from 'react'

import { connect } from 'react-redux'

import {animateScroll} from 'react-scroll';

import {SHOW_NAVBAR} from '../redux/actionTypes';

import Logo from '../components/titles/Logo'
import MainTitle from '../components/titles/mainTitle'
import Footer from '../components/titles/Footer'

import ThemeSelector from '../components/ThemeSelector'

import {Page,Background} from './style'

class Settings extends Component {
    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
        this.props.showNav();
    }

    render() {
        return (
                <Background>
                    <Logo/>
                    <MainTitle message={"Settings"}/>
                    <Page>
                        <ThemeSelector/>
                        <Footer/>
                    </Page>
                </Background>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        showNav: () => { dispatch({type: SHOW_NAVBAR, value: null})}
    }
}


export default connect(null,mapDispatchToProps)(Settings)
