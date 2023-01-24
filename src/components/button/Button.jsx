import styled, { css } from 'styled-components'

const Button = styled.button `
background: linear-gradient(120.92deg, rgb(20, 134, 198) 20.34%, rgb(130, 208, 252) 151.52%);
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.25);
    width: 289px;
    height: 67px;
    border: none;
    border-radius: 60px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        -webkit-transform: translateY(-7px);
        transform: translateY(-7px);
      }
`

export default Button