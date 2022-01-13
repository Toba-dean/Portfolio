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
  height: 80vh;
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
    height: 50vh;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
      height: auto;
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
    console.log('i clicked power');
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sit sunt, distinctio quasi illum aperiam ex autem placeat nesciunt vero mollitia maxime officia iure accusamus temporibus ratione aspernatur. Sequi aperiam quas temporibus <br /> <br />
            debitis aliquam placeat dolor hic magni eveniet perspiciatis quidem dolorum voluptatibus modi, nam consectetur. Cumque eveniet ab, harum explicabo incidunt eius asperiores alias porro beatae excepturi dolorem, vitae possimus fugiat quae officia sequi<br /> <br />
            vel non maxime, perspiciatis expedita temporibus enim sed quisquam magni? Impedit in eum soluta doloremque et consequatur incidunt quidem ea itaque sapiente, hic neque porro provident illum dolores nisi magni laboriosam minima! Perspiciatis, dicta saepe.
          </Main>
          <BackgroundTitle text='ABOUT MOI' top='7%' right='3%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default About