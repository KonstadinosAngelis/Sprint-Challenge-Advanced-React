import React from 'react';
import Card from './Card'

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const CardList = props => {
  return(
    <Wrapper>
      {props.atheletes.map(user => (
        <Card athelete={user}/>
      ))}
    </Wrapper>
  )}

export default CardList;