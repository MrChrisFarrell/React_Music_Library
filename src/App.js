import React, {Component} from 'react';
import MusicTable from './Components/MusicTable/musicTable';
import SongForm from './Components/SongForm/songForm';
import FilterBar from './Components/FilterBar/filterBar';
const axios = require('axios');

class App extends Component {
  state = {
    music: [],
    filteredMusic: []   
  }

  componentDidMount(){
    this.getMusic();
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

  filter=(searchText)=>{
    if(searchText == ''){
      this.getMusic();
      }
    else{
      let filteredMusic = this.state.music.filter((song)=> {
        if(song.title.includes(searchText) || song.artist.includes(searchText) || song.album.includes(searchText) || song.release_date.includes(searchText)){
          return true;
        }
        else{
          return false;
        }
      });
      this.setState({
        music: filteredMusic
      });
    }
  }

  render(){
    return (
      <div className="App">
        <SongForm addSong={this.addSong}/>
        <FilterBar filter={this.filter}/>
        <MusicTable music={this.state.music} delete={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
