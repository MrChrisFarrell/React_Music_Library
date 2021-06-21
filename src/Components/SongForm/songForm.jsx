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
                    <label>Superhero I.D.</label>
                    <input type="text" name="superheroId" onChange={this.handleChange} value={this.state.superheroId}/>
                    {this.state.errors.superheroId ? <p style={{color:'red'}}>{this.state.errors.superheroId}</p> : ''}
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    {this.state.errors.name ? <p style={{color:'red'}}>{this.state.errors.name}</p> : ''}
                </div>
                <div>
                    <label>Primary Ability</label>
                    <input type="text" name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                    {this.state.errors.primaryAbility ? <p style={{color:'red'}}>{this.state.errors.primaryAbility}</p> : ''}
                </div>
                <div>
                    <label>Secondary Ability</label>
                    <input type="text" name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}/>
                    {this.state.errors.secondaryAbility ? <p style={{color:'red'}}>{this.state.errors.secondaryAbility}</p> : ''}
                </div>
                <button type="submit">Add Superhero</button>
            </form>
        );
    }
}

export default SongForm;