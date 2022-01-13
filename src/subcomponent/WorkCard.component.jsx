import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Github } from '../Components/AllSvg.component';


const Box = styled(motion.li)`
  width: 20rem;
  height: 45vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  margin-right: 8rem;
  padding: 1.5rem 2rem;
  border-radius: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.h2`
  font-size: calc(0.6em + 0.5vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top:2px solid ${props => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(1.5rem + 1vw); 
  border-radius: 50px;

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;
const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    fill: ${props => props.theme.text};
  }
`;

// Framer config
const item = {
  hidden: { scale: 0},
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const WorkCard = ({ name, description, tags, demo, github, id }) => {
  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {
          tags.map(tag => (
            <Tag key={id}>#{tag}</Tag>
          ))
        }
      </Tags>
      <Footer>
        <Link to={{pathname: `${demo}`}} target='_blank'>Visit</Link>
        <Git to={{pathname: `${github}`}} target='_blank'>
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  )
}

export default WorkCard
