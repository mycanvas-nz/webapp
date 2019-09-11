import React, { Component } from 'react'
import { connect } from 'react-redux'

import {MusicGenres} from '../constants';

import {animateScroll} from 'react-scroll';

import {HIDE_NAVBAR} from '../redux/actionTypes';

import AlbumSlider from '../components/AlbumSlider';

import Logo from '../components/titles/Logo'
import InfoText from '../components/titles/infoText'
import Footer from '../components/titles/Footer'
import SmallTitle from '../components/titles/smallTitle'

import {Page,Background} from './style'

export class Music extends Component {

    componentDidMount() {
        document.title = "Canvas - Mental Health App!"
        animateScroll.scrollToTop();
        this.props.hideNav();
    }

    render() {

        const collections = this.props.albums.albumsList.filter(function(albums) {
            return albums.isCollection === true
        })
        const rock = this.props.albums.albumsList.filter(function(albums) {
            return albums.genres === MusicGenres.Rock
        })

        return (
            <Background>
                <Logo isApplet title={"Music"}/>
                <InfoText message={"some songs have been added by other users and some have been added by canvas."}/>
                <Page>
                    <SmallTitle message={"All"}/>
                    <AlbumSlider albums={this.props.albums.albumsList}/>
                    <SmallTitle message={"collections"}/>
                    <AlbumSlider albums={collections}/>
                    <SmallTitle message={"rock"}/>
                    <AlbumSlider albums={rock}/>
                    <Footer/>
                </Page>
            </Background>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
        albums: state.Albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideNav: () => { dispatch({type: HIDE_NAVBAR, value: null})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Music)
