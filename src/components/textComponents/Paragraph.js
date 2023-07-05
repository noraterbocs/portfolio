import { styled } from 'styled-components'

export const Paragraph = styled.p`
 font-size: 22px;
    font-weight: 400;
    line-height: ${(props) => props.lineHeight || '29px'};
    padding: 9px 0 10px 0;
`