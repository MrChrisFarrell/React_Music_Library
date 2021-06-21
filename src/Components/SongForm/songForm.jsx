import React, { Component } from 'react';

class SongForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            releaseDate: '',
            errors: {
                title: '',
                artist: '',
                album: '',
                releaseDate: ''
            }
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'title':
                errors.title = event.target.value.length < 1 ? "Title must be at least 1 character" : null;
                break;
            case 'artist':
                errors.artist = event.target.value.length < 1 ? "Artist must be at least 1 character" : null;
                break;
            case 'album':
                errors.album = event.target.value.length < 1 ? "Album must be at least 1 character" : null;
                break;
        }
        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    };

    handleSubmit = (event, props)=>{
        event.preventDefault();
        let song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            releaseDate: this.state.releaseDate
        };
        alert(`Title: ${this.state.title}\n
        Artist: ${this.state.artist}\n
        Album: ${this.state.album}\n
        Release Date: ${this.state.releaseDate}`)
        props.addSong(song)
    };

    render(){
        return(
            <form onSubmit={(event)=> this.handleSubmit(event, this.props)}>
                <div>
                    <label>Song Title:</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    {this.state.errors.title ? <p style={{color:'red'}}>{this.state.errors.title}</p> : ''}
                </div>
                <div>
                    <label>Artist:</label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                    {this.state.errors.artist ? <p style={{color:'red'}}>{this.state.errors.artist}</p> : ''}
                </div>
                <div>
                    <label>Album:</label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                    {this.state.errors.album ? <p style={{color:'red'}}>{this.state.errors.album}</p> : ''}
                </div>
                <div>
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/>
                    {this.state.errors.releaseDate ? <p style={{color:'red'}}>{this.state.errors.releaseDate}</p> : ''}
                </div>
                <button type="submit">Add Song</button>
            </form>
        );
    }
}

export default SongForm;