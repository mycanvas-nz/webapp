import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';

import Navbar from './components/Navbar'

const baseURL = "/webapp/";


class App extends Component {

  render() {
    return (
      
        <BrowserRouter basename={baseURL}>
            <Routes/> 
            <Navbar/>
        </BrowserRouter>

    )
  }
}


export default App;

