import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faStar, faCog} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import styled , {ThemeProvider} from 'styled-components'

const Container = styled.div`
    position: fixed;
    width: calc(100% - 60px);
    left: 0px;
    bottom: 0px;
    display: flex;
    padding: 10px 30px;
    z-index: 99;
    background: #fff;
`;

const Name = styled.h5`
    font-size: 1.1em;
    margin: 0;
    text-transform: lowercase;
    font-weight: 400;
`;

const Home = styled(NavLink)`
    color: ${props => props.theme.primacyColor};
    text-align: center;

    &:any-link {
        text-decoration: none;
    }
`;

const Apps = styled(Home)`
    margin-left: 15px;
`;

const Settings = styled(Home)`
    margin-left: auto;
`;




export class Navbar extends Component {
    render() {
        return (
            <ThemeProvider theme={this.props.theme.theme}>
                <Container>
                    <Home exact to="/">
                        <FontAwesomeIcon size="2x" icon={faHome}/>
                        <Name>Home</Name>
                    </Home>
                    <Apps exact to="/apps">
                        <FontAwesomeIcon  size="2x" icon={faStar}/>
                        <Name>Apps</Name>
                    </Apps>
                    <Settings exact to="/settings">
                        <FontAwesomeIcon  size="2x" icon={faCog}/>
                        <Name>Settings</Name>
                    </Settings>
                </Container>
            </ThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {
        theme: state.Theme,
    }
}

export default connect(mapStateToProps)(Navbar)
