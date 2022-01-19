import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import SpaceMan from '../assets/Images/spaceman.png'
import { motion } from 'framer-motion'
import Loading from '../subcomponent/Loading'

//Components
const SocialIcons = lazy(() => import('../subcomponent/SocialIcons.component'))
const PowerButton = lazy(() => import('../subcomponent/PowerButton.component'))
const LogoContainer = lazy(() => import('../subcomponent/Logo.component'))
const Particle = lazy(() => import('../subcomponent/Particle.component'))
const BackgroundTitle = lazy(() => import('../subcomponent/BackgroundTitle.component'))

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
  0% { transform: translateY(-20px) }
  50% { transform: translate(20px, 20px) }
  100% { transform: translateY(-20px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 15%;
  right: 6%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: auto;
  z-index: 1000;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 8rem;
  left: calc(2.5rem + 5vw);
  font-family: 'Ubuntu Mono', monospace;

  ${mediaQueries(40)`
    width: 60vw;
    top:50%;
    left:45%;
    transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
      backdrop-filter: none;
      margin-top:2rem;

  `};

${mediaQueries(20)`
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  `};
`;


const About = ({ history }) => {

  const handleClick = () => {
    history.push('/')
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoContainer theme='dark' />
          <SocialIcons theme='dark' />
          <PowerButton handleClick={handleClick} />
          <Particle theme='dark' />
          <Spaceman>
            <img src={SpaceMan} alt="" />
          </Spaceman>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            I'm a front-end developer from Nigeria. My coding career began in 2018 when a friend introduced me to front-end programming, and it has enthralled me ever since I wrote my first "Hello, World" in HTML and saw it displayed in the browser. <br /> <br />
            Being self-taught is difficult and frustrating, and the scariest part for me when I first started was coming face to face with a problem that I couldn't solve and couldn't move forward because of. But, over time, I always figured things out, even if it took me days and multiple attempts. I appreciated the challenge, and it kept me motivated throughout my career as a developer.<br /> <br />
            Web programming is an interest of mine. It allows me to push myself and apply a combination of technologies and creativity. I enjoy the ability to see results immediately and the never-ending learning process.
          </Main>
          <BackgroundTitle text='ABOUT MOI' top='7%' right='3%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default About 