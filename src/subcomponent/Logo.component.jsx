import styled from 'styled-components'
import { DarkTheme, mediaQueries } from '../Components/Themes'


const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`

const LogoContainer = (props) => {
  return (
    <Logo color={props.theme}>
      TD
    </Logo>
  )
}

export default LogoContainer
