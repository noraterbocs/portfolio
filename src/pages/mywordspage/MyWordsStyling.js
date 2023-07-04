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