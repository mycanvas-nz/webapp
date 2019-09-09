import styled from 'styled-components'

export const Page = styled.div`
    background: #fff;
    border-radius: 24px 24px 0px 0px;
    -moz-border-radius: 24px 24px 0px 0px;
    -webkit-border-radius: 24px 24px 0px 0px;
    padding: 20px 30px;
`;


export const Background = styled.div`
    background: ${props => props.theme.primacyColor};
    background: -moz-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: -webkit-linear-gradient(left,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    background: linear-gradient(to right,  ${props => props.theme.primacyColor} 0%, ${props => props.theme.primacyColor2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props => props.theme.primacyColor}', endColorstr='${props => props.theme.primacyColor2}',GradientType=1 );

`;