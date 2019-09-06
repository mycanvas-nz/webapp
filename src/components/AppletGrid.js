import React, { Component } from 'react'

import styled from 'styled-components'

import AppletIcon from './AppletIcon';

const Grid = styled.div`
  display:grid;
  margin: 10px 0px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
`;


export default class AppletGrid extends Component {

    RenderApplets(){
        return(
            this.props.applets.map(applet => 
              <AppletIcon type={Math.floor(Math.random() * 3)} info={applet} key={applet.id} />
              )
        )
    }

    render() {
        return (
            <Grid>
                {this.RenderApplets()}
            </Grid>
        )
    }
}
