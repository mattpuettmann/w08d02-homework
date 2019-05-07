import React, { Component } from 'react';

class TypeSearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchPokemon(this.state);
    }
    render(){
        return <div>
            Search By Type: <input type="text" name="search"/>
            <input type="submit"/>
        </div>
    }
}

export default TypeSearchForm;