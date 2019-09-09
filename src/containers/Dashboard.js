import React, { Component } from 'react'

import { connect } from 'react-redux'

import {animateScroll} from 'react-scroll';

import {SHOW_NAVBAR} from '../redux/actionTypes';

import Logo from '../components/titles/Logo'
import MainTitle from '../components/titles/mainTitle'
import SmallTitle from '../components/titles/smallTitle'
import Footer from '../components/titles/Footer'

import EventSlider from '../components/EventSlider'
import RecommendedSlider from '../components/RecommendedSlider';

import AppletGrid from '../components/AppletGrid';

import {Page,Background} from './style'

class Dashboard extends Component {
    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
        this.props.showNav();
    }

    render() {

        const AppletTop = [this.props.applets[0], this.props.applets[1]]

        return (
                <Background>
                    <Logo/>
                    <MainTitle message={"My Dashboard"}/>
                    <Page>
                        <SmallTitle message={"Try Theses"} />
                        <RecommendedSlider/>
                        <SmallTitle message={"Quick Access"} />
                        <AppletGrid applets={AppletTop}/>
                        <SmallTitle message={"nearby events"} />
                        <EventSlider/>
                        <Footer/>
                    </Page>
                </Background>
        )
    }
}

function mapStateToProps(state){
    return {
        applets: state.Applets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNav: () => { dispatch({type: SHOW_NAVBAR, value: null})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
