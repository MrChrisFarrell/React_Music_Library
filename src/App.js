import React, {Component} from 'react';
import MusicTable from './Components/MusicTable/musicTable';
import SongForm from './Components/SongForm/songForm';
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

  addSong= async (song)=>{
    await axios.post(`http://127.0.0.1:8000/music/`, song);
    this.getMusic();
  }

  deleteSong= async (songId)=>{
    await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
    this.getMusic(); 
  }

  render(){
    return (
      <div className="App">
        <SongForm addSong={this.addSong}/>
        <MusicTable music={this.state.music} delete={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
