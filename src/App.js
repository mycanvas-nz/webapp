import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';

const baseURL = "/webapp/";


class App extends Component {

  render() {
    return (
      
        <BrowserRouter basename={baseURL}>
            <Routes/> 
        </BrowserRouter>

    )
  }
}


export default App;

