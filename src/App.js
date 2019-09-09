import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';

import Navbar from './components/Navbar'

import {ThemeProvider} from 'styled-components'

import { connect } from 'react-redux'

const baseURL = "/webapp/";


class App extends Component {

  render() {
    return (
        <ThemeProvider theme={this.props.theme.theme}>
          <BrowserRouter basename={baseURL}>
              <Routes/> 
              <Navbar/>
          </BrowserRouter>
        </ThemeProvider>

    )
  }
}

function mapStateToProps(state){
  return {
      theme: state.Theme,
      applets: state.Applets
  }
}

export default connect(mapStateToProps)(App)

