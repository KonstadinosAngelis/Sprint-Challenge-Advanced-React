import React from 'react';
import NavBar from './NavBar';
import ReactDOM from 'react-dom';

it('it renders', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
})