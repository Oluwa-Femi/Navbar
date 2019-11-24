import React from 'react'
import styled from "styled-components";

import Picture from "../../assets/femi-oluwatola.jpg";

const Brand = () => {
  return (
    <Image src={Picture} alt="Oluwafemi Oluwatola" />
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;