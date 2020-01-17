import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CardList from './components/CardList'
import NavBar from './components/NavBar'
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      atheletes : []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(response => {this.setState({atheletes: response.data})})
    .catch(error => {console.log(error)})
  }

  render() {
  return (
    <div className="App">
      <div className="header">
      <NavBar />
      </div>
      <CardList atheletes={this.state.atheletes}/>
    </div>
  );
}
}

export default App;
