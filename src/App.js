import React, {Component} from 'react';
import MusicTable from './Components/MusicTable/musicTable';
const axios = require('axios');

class App extends Component {
  state = {
    music: [],   
  }

  componentDidMount(){
    this.getMusic()
  }

  async getMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      music: response.data
    });
  }

  deleteSong= async (songId)=>{
    await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
    this.getMusic(); 
  }

  render(){
    return (
      <div className="App">
        <MusicTable music={this.state.music} delete={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
