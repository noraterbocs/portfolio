import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.flexDirection || 'column')};
    justify-content: ${(props) => (props.justifyContent || 'center')};
    align-items: ${(props) => (props.alignItems || 'center')};
    grid-area: ${(props) => props.gridArea};
    gap: ${(props) => props.gap || '1em'};
    margin:${(props) => props.margin || '0'};
    flex-wrap:${(props) => props.flexWrap || 'no-wrap'};
`