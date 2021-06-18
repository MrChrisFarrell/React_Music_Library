import React, {Component} from 'react';
const axios = require('axios');
import './App.css';

class App extends Component {
  state = {
    music: [],   
  }

  async getMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      music: response.data
    });
  }

  render(){
    return (
      <div className="App">     
      </div>
    );
  }
}

export default App;
