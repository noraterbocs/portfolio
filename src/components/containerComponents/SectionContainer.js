import { styled } from 'styled-components';

export const SectionContainer = styled.section`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    max-width: 414px;
    background-color: ${(props) => props.backgroundColor};
    /* gap: 1em; */
    @media (min-width: 744px) {
        max-width: 820px;
        flex-direction: ${(props) => (props.tech ? 'row' : 'column')};
        gap:${(props) => (props.tech && '2em')}
    }
    @media (min-width: 1280px) {
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`