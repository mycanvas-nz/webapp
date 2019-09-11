import React, { Component } from 'react'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import LazyLoad from 'react-lazyload';

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Cover = styled.img`
    width: 130px;
    height: auto;
    border-radius: 8px;
`;

const LinkObject = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};

    h2 {
        margin:0;
        font-size: 1.2em;
        text-transform: lowercase;
        font-weight: 400;
    }
`;


export default class AlbumSlider extends Component {
    RenderEvents(){
        return(
            this.props.albums.map(album =>
                <LinkObject to={"/music/album/"+album.id} key={album.id}>
                    <LazyLoad>
                        <Cover src={album.albumCoverUrl} alt={album.name}/>
                    </LazyLoad>
                    <h2>{album.name}</h2>
                </LinkObject>
                )
        )
    }

    render() {
        return (
            <div>
                 <AliceCarousel
                    className="slider"
                    fadeOutAnimation 
                    responsive={{
                        0:{
                            items:1,
                        },
                        370:{
                            items:2,
                            paddingRight: 100,
                        },
                        500:{
                            items:3,
                            paddingRight: 100,
                        }
                    }}
                    mouseDragEnabled
                    buttonsDisabled
                    dotsDisabled
                    autoPlay
                    infinite={false}
                    autoPlayInterval={4500}
                    stagePadding={
                        {paddingRight: 65,}
                    }   
                >
                    {this.RenderEvents()}
                </AliceCarousel>
            </div>
        )
    }
}
