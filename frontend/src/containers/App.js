import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList/ItemList.js';
const AWS_LAMBDA_URL = 'http://localhost:4000/';

class App extends Component {
 
  render() {
    return (
     <ItemList URL = {AWS_LAMBDA_URL}></ItemList>
    );
  }
}

export default App;
