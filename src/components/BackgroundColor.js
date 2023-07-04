import styled from 'styled-components'

export const BackgroundColor = styled.div`
    width:100vw;
    height:100%;
    top:0;
    position:absolute;
    background-color: ${(props) => props.backgroundColor};
    z-index:-1
`