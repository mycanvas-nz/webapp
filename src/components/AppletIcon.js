import React, { Component } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Applet = styled.div`
  height: 105px;
  width: 100%;
  position: relative;
  border-radius: 10px;
  background: ${props => props.theme.primacyColor};
`;


const Circ = styled.div`
  background: ${props => props.theme.circColor2};
  position:absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  z-index: 0;
`;

const Circ2 = styled.div`
  background: ${props => props.theme.circColor1};
  position:absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  border-radius: 10px;
  width: 100%;
  z-index: 1;
`;

const Circ2a = styled(Circ2)`
    clip-path: circle(56.7% at 63% 100%);
`;

const Circa = styled(Circ)`
    clip-path: circle(63.7% at 92% 73%);
`;


const Circ2b = styled(Circ2)`
    clip-path: circle(49.8% at 43% 99%);
`;

const Circb = styled(Circ)`
    clip-path: circle(74.7% at 83% 23%);
`;

const Circ2c = styled(Circ2)`
    clip-path: circle(57.6% at 15% 14%);    
`;

const Circc = styled(Circ)`
clip-path: circle(44.1% at 49% 98%);

`;

const Holder = styled.div`
  z-index: 3;
  position:absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;

const Text = styled.h1`
  margin:0 auto;
  padding: 11px 10px;
  color:#fff;
  font-size: 1.7em;
  text-transform: uppercase;
  font-weight: 500;
`;


export class AppletIcon extends Component {

    RenderCirc(){
        if(this.props.type === 0){
            return(
                <React.Fragment>
                    <Circa/>
                    <Circ2a/>
                </React.Fragment>
            )
        } else if (this.props.type === 1){
            return(
                <React.Fragment>
                    <Circb/>
                    <Circ2b/>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <Circc/>
                    <Circ2c/>
                </React.Fragment>
            )
        }
    }

    render() {

        const info = this.props.info
        return (
            <Link to={info.link}>
                <Applet>
                    {this.RenderCirc()}
                    <Holder>
                        <Text>{info.icon} <br/> {info.name}</Text>
                    </Holder>
                </Applet>
            </Link>
        )
    }
}



export default (AppletIcon)
