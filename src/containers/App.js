import React, { Component } from 'react'

import { connect } from 'react-redux'

import {animateScroll} from 'react-scroll';

import {SHOW_NAVBAR} from '../redux/actionTypes';

import Logo from '../components/titles/Logo'
import MainTitle from '../components/titles/mainTitle'
import SmallTitle from '../components/titles/smallTitle'
import Footer from '../components/titles/Footer'

import AppletGrid from '../components/AppletGrid';

import {Page,Background} from './style'

class App extends Component {
    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
        this.props.showNav();
    }

    render() {
        const AppletFav = this.props.applets.filter(function(applet) {
            return applet.fav === true
        })
        const AppletOther = this.props.applets.filter(function(applet) {
            return applet.fav === false
        })
        return (
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
        )
    }
}

function mapStateToProps(state){
    return {
        applets: state.Applets,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNav: () => { dispatch({type: SHOW_NAVBAR, value: null})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
