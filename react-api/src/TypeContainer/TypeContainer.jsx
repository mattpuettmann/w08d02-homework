import React, { Component } from 'react';
import TypeSearchForm from './TypeSearchForm/TypeSearchForm';

class TypeContainer extends Component {
    constructor(){
        super();
        this.state = {
            type: []
        }
    }
    componentDidMount(){
        this.searchPokemon({type: ""});
    }

    searchPokemon = async (formData) => {
        const searchURL = `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/type`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult)
        this.setState({
            type: parsedResult.results
        })
    }
    

    render(){
        const pokemonList = this.state.type.map((pokemon)=>{
            console.log(this.state.type);
            return <div>
                <h4>{pokemon.type}</h4>
            </div>
        })
        return <div>
            <h1>Type Container!</h1>
            <TypeSearchForm searchPokemon={this.searchPokemon}></TypeSearchForm>
            {pokemonList}
        </div>
    }   
}


export default TypeContainer;