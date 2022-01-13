import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left}) => left};
  right: ${({ right }) => right};
  color: ${({ theme }) => `rgba(${theme.textRgba}, 0.13)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const BackgroundTitle = ({ text, top, left, right }) => {
  return (
    <Text top={top} left={left} right={right}>
      {text}
    </Text>
  )
}

export default BackgroundTitle
