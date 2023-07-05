import styled from 'styled-components'

export const Button = styled.button`
    font-family: var(--primary-font-family);
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    height: 48px;
    border-radius: 40px;
    background-color: #F5F5F5;
    color: #333333;
    border-style: none;
    margin: 12px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 7px;
    padding: 0px 16px 0px 8px;
    width: 200px;
    text-decoration: none;
    @media (min-width: 744px) {
    grid-area: ${(props) => props.gridArea};
     }
    &&:hover {
    color: #FFFFFF;
    background-color: ${(props) => (props.github ? '#EB5577' : '#0B24F5')};
    cursor:pointer
    }


`