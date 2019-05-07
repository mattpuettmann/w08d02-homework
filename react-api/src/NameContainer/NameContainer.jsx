import React, { Component } from 'react';
import NameSearchForm from './NameSearchForm/NameSearchForm'


class NameContainer extends Component {
    constructor(){
        super();
        this.state = {
            pokemon: []
        }
    }
    componentDidMount(){
        this.searchPokemon({pokemon: ""});
    }

    searchPokemon = async (formData) => {
        const searchURL = `https://pokeapi.co/GET/api/v2/pokemon?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult)
        this.setState({
            pokemon: parsedResult.results
        })
    }
    

    render(){
        const pokemonList = this.state.pokemon.map((pokemon)=>{
            return <div>
                <h4>{pokemon.name}</h4>
            </div>
        })
        return <div>
            <h1>Name Container!</h1>
            <NameSearchForm searchPokemon={this.searchPokemon}></NameSearchForm>
            {pokemonList}
        </div>
    }
    
}


export default NameContainer;