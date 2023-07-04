import { styled } from 'styled-components'

export const ContainerTech = styled.div`
    background: #EDFFFF;
    height: 530px;
    /* padding: 0 2em; */
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    flex-direction: column;
     @media (min-width: 1280px) {
        flex-direction: row
    }
`
export const Paragraph = styled.p`
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    max-width: 820px;
    padding: 0 1em;
    /* @media (min-width: 1280px) {
        max-width: 820px;
    } */
`
export const Span = styled.span`
    background-color: ${(props) => props.backgroundColor};
    color: #FFFFFF;
`