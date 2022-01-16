import React, { useRef, useEffect, lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import { Work } from '../data/WorkData'
import WorkCard from '../subcomponent/WorkCard.component'
import { YinYang } from './AllSvg.component'
import { motion } from 'framer-motion'
import Loading from '../subcomponent/Loading'

const SocialIcons = lazy(() => import('../subcomponent/SocialIcons.component'))
const PowerButton = lazy(() => import('../subcomponent/PowerButton.component'))
const LogoContainer = lazy(() => import('../subcomponent/Logo.component'))
const BackgroundTitle = lazy(() => import('../subcomponent/BackgroundTitle.component'))

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  height: 280vh;
  position: relative;
  overflow: hidden;
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 15rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  ${mediaQueries(50)`
     left:calc(5rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 30%;   
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`     
      left:calc(2rem + 15vw);
  `};
  ${mediaQueries(25)`    
      left:calc(1rem + 15vw);
  `};
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  height: 80px;
  width: 80px;
  z-index: 1000;

  ${mediaQueries(40)`
     width:60px;
     height:60px;   
     svg{
      width:60px;
      height:60px;
     }
  `};
  ${mediaQueries(25)`
      width:50px;
      height:50px;
      svg{
         width:50px;
         height:50px;
       }
  `};
`;

// Framer congig
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      duration: 0.5
    }
  }
}

const PersonnalProjects = ({history }) => {

  const ref = useRef(null);
  const yingyang = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let yangElement = yingyang.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yangElement.style.transform = `rotate(` + -window.pageYOffset + `deg)`
    }

    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  }, [])

  const handleClick = () => {
    console.log('i clicked power');
    history.push('/')
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoContainer theme='dark' />
          <SocialIcons theme='dark' />
          <PowerButton handleClick={handleClick} />
          <Main ref={ref} variants={container} initial='hidden' animate='show'>
            {
              Work.map(({ id, ...otherProps }) => (
                <WorkCard key={id} {...otherProps} />
              ))
            }
          </Main>
          <Rotate ref={yingyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>
          <BackgroundTitle top='10%' left='10%' text='WORKS' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default PersonnalProjects
 