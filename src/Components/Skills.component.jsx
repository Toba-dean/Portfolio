import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme, mediaQueries } from './Themes'
import { Develope} from './AllSvg.component'
import Loading from '../subcomponent/Loading'
import { motion } from "framer-motion";

//Components
const SocialIcons = lazy(() => import('../subcomponent/SocialIcons.component'))
const PowerButton = lazy(() => import('../subcomponent/PowerButton.component'))
const LogoContainer = lazy(() => import('../subcomponent/Logo.component'))
const Particle = lazy(() => import('../subcomponent/Particle.component'))
const BackgroundTitle = lazy(() => import('../subcomponent/BackgroundTitle.component'))

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries(50)`
      flex-direction:column;  
      padding:8rem 0;
      height:auto;
      &>*:nth-child(5){
        margin-bottom:5rem;
      }
  `};
  ${mediaQueries(30)`
      &>*:nth-child(5){
        margin-bottom:4rem;
      }
  `};
`;
const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 35vw;
  height: auto;
  z-index: 1;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  ${mediaQueries(60)`
      height: 55vh;
  `};

  ${mediaQueries(50)`
      width: 70vw;
      height: max-content;
  `};

`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    &>* {
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child {
    margin-right: 2rem;
  }

  ${mediaQueries(60)`
      font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
      font-size:calc(1em + 2vw);
      margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
      font-size:calc(0.8em + 1vw);
      svg{
          width:30px;
          height:30px;
        }
  `};
`;
const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0%.5rem 0;

  strong {
    margin: 1rem 0;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 2rem;
  }

  li {
    list-style: none;
  }
  
  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  ${mediaQueries(50)`
      font-size: calc(0.8em + 1vw);
    `};

  ${mediaQueries(30)`
      font-size:calc(0.7em + 1vw);
    `};

  ${mediaQueries(25)`
      font-size:calc(0.5em + 1vw);
   `};
`;

const Skills = ({ history }) => {

  const handleClick = () => {
    history.push('/')
  }

  return (
    <ThemeProvider theme={LightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoContainer />
          <SocialIcons />
          <PowerButton handleClick={handleClick} />
          <Particle theme='light' />
          <Main>
            <Title>
              <Develope width={40} height={40} /> <span>Frontend Developer</span>
            </Title>
            <Description>
              I value business or brand for which i am creating, thus i enjoy bringing new ideas to life.
            </Description>
            <Description>
              <strong>Technologies i use:</strong>
              <ul>
                <li>- HTML, CSS.</li>
                <li>- Javascript (ES6+).</li>
                <li>- React, Redux.</li>
                <li>- Firebase.</li>
              </ul>
              <strong>Tools</strong>
              <p>VScode, Git and GitHub.</p>
            </Description>
          </Main>
          <BackgroundTitle text='SKILLS' top='78%' right='10%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default Skills
