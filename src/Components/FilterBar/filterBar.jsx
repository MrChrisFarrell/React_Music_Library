import React, { Component } from 'react';

class FilterBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value
        })
        this.props.filter(event.target.value);
    };

    render(){
        return(
            <form onSubmit={(event)=> this.handleSubmit(event, this.props)}>
                <div>
                    <label>Search:</label>
                    <input type="text" name="searchText" onChange={this.handleChange} value={this.state.searchText}/>
                </div>
            </form>
        );
    }
}

export default FilterBar;