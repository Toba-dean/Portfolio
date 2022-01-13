import { motion, transform } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, LinkedIn } from '../Components/AllSvg.component'
import { DarkTheme } from '../Components/Themes'


const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 10rem;
  background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icon>
      <motion.div
        initial={{transform: 'scale(0)'}}
        animate={{scale: [0,1,1.5,1]}}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 1.2
        }}
      >
        <NavLink to={{pathname: 'https://github.com/Toba-dean'}} style={{color: 'inherit'}} target='_blank'>
          <Github width={25} height={35} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{transform: 'scale(0)'}}
        animate={{scale: [0,1,1.5,1]}}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 1.4
        }}
      >
        <NavLink to={{pathname: 'https://linkedin.com/in/toba-ogundimu'}} style={{color: 'inherit'}} target='_blank'>
          <LinkedIn width={25} height={35} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>
      <Line color={props.theme}
        initial={{height: 0}}
        animate={{height: '10rem'}}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8
        }}
      />
    </Icon>
  )
}

export default SocialIcons
