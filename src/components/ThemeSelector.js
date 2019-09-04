import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Theme1Colors, Theme2Colors, Theme3Colors} from '../constants'

import SmallTitle from './titles/smallTitle'

import {CHANGE_THEME} from '../redux/actionTypes';

import styled from 'styled-components'

const Block1 = styled.div`
  display: inline-block;
  padding: 15px;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  background: ${Theme1Colors.primacyColor};
  border: solid ${Theme1Colors.secondaryColor} 4px;
`;

const Block2 = styled(Block1)`
    background: ${Theme2Colors.primacyColor};
    border: solid ${Theme2Colors.secondaryColor} 4px;
`;

const Block3 = styled(Block1)`
    background: ${Theme3Colors.primacyColor};
    border: solid ${Theme3Colors.secondaryColor} 4px;
`;


export class ThemeSelector extends Component {
    render() {
        return (
            <div>
                <SmallTitle message={"App Theme"}/>
                <Block1 onClick={() => this.props.changeTheme("1")} />
                <Block2 onClick={() => this.props.changeTheme("2")} />
                <Block3 onClick={() => this.props.changeTheme("3")} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (value) => { dispatch({type: CHANGE_THEME, value: value})}
    }
}

export default connect(null, mapDispatchToProps)(ThemeSelector)
