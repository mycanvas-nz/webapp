import styled from 'styled-components'

export const Slide = styled.div`
    margin-right: 10px;
    position: relative;
    border-radius: 10px;
    height: 110px;
`;

export const Text = styled.div`
    position: absolute;
    right: 10px;
    top: 0px; 
    width: 40%;
    height: 100%;
    border-radius: 10px;
    z-index: 7;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: 400;
    margin:0;
    color: #fff;
    font-size: 1.6em;
    text-transform: lowercase;
    text-align: right;
`;
