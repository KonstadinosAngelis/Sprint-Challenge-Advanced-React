import React from 'react';
import Card from './Card'

const CardList = props => {
  return(
    <div>
      {props.atheletes.map(user => (
        <Card athelete={user}/>
      ))}
    </div>
  )}

export default CardList;