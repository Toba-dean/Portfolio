import React, { useState, lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { YinYang } from './AllSvg.component';
import Intro from './Intro.component';
import { motion } from 'framer-motion';
import Loading from '../subcomponent/Loading';
import { mediaQueries } from './Themes';

const LogoContainer = lazy(() => import('../subcomponent/Logo.component'));
const PowerButton = lazy(() => import('../subcomponent/PowerButton.component')) ;
const SocialIcons = lazy(() => import('../subcomponent/SocialIcons.component'));


const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'karia', sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;
const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled(NavLink)`
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 100;
  cursor: pointer;
`;
const SKILLS = styled(NavLink)`
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 100;
  cursor: pointer;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    color: ${props => props.click ? props.theme.body : props.theme.text};
  }
`;
const ABOUT = styled(NavLink)`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  left: calc(1rem + 2vw);
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 100;
  cursor: pointer;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PROJECTS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 100;
  cursor: pointer;
`;
const SPAN = styled.span`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  margin-left: ${props => props.click ? '-10px' : '0'};

  @media only screen and (max-width: 50em) {
  color: black;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '90%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  z-index: 100;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotate} 2s linear infinite;
  }

  &>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  background-color: #000;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
       right:0;
       width: 100%;
       transition: width 0.5s ease, height 1s ease 0.5s;`
      : mediaQueries(50)`
        height: 0;
        width: 0;
    `};
`;


const Main = () => {

  const [click, setClick] = useState(false)
  const [path, setpath] = useState("");

  const handleHome = () => {
    setClick(false)
  }

  const handleState = () => setClick(!click)

  const moveY = { y: "-100%",};
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <PowerButton handleClick={handleHome} />
          <LogoContainer theme={click ? 'dark' : 'light'} />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}
          <Center click={click}>
          {mq ? (
              <YinYang
                onClick={handleState}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="currentColor"
              />
            ) : (
              <YinYang
                onClick={handleState}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
            )}

            <span style={{fontStyle: 'italic', fontWeight: '600'}}>Clich Here</span>
          </Center>
          {
            mq ? ( <Contact to={{pathname:" mailto:tobaogundimu@gmail.com"}}   target='_blank' click={+click}>
              <motion.h3 
                initial={{
                  y: -200,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >Say Hi...</motion.h3>
            </Contact> ) : (
              <Contact to={{pathname:" mailto:tobaogundimu@gmail.com"}}   target='_blank' click={+false}>
              <motion.h3 
                initial={{
                  y: -200,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >Say Hi...</motion.h3>
            </Contact>
            )
          }
          <SKILLS to='/skills' click={+click}>
            <motion.h2 
              initial={{
                y: -200,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1
                }
              }}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              Skills
            </motion.h2>
          </SKILLS>
          <ABOUT to='/about' click={click}>
              <motion.h2 
                initial={{
                  y: -200,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >About</motion.h2>
          </ABOUT>
          <BottomBar>
            <PROJECTS to='/project'>
              <motion.h2 
                initial={{
                  y: 200,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    delay: 1
                  }
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              ><SPAN click={click}>Personal</SPAN> Projects</motion.h2>
            </PROJECTS>
          </BottomBar>
        </Container>
        {
          click ? <Intro click={click} /> : null
        }
      </MainContainer>
    </Suspense>
  )
}

export default Main
