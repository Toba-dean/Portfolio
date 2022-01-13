import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../Components/AllSvg.component'
import { mediaQueries } from '../Components/Themes'


const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fcf6f4;
  padding: .3rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  &>*:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
    width: 2rem;
    height: 2rem;
    svg{
      width:20px;
      height:20px;
    }
  `};
`

const PowerButton = ({ handleClick }) => {
  return (
    <Power onClick={handleClick}>
      <PowerBtn fill='currentColor' width={30} height={30} />
    </Power>
  )
}

export default PowerButton
