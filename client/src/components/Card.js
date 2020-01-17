import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black; 
  padding: 1%;
  margin: 1%;
  width: 10%;
`

const Card = props => {
  return(
    <Wrapper>
      <p>{props.athelete.name}</p>
      <p>{props.athelete.country}</p>
    </Wrapper>
  )}

export default Card