import React, { Component } from 'react';
import NameContainer from '../NameContainer/NameContainer';
import TypeContainer from '../TypeContainer/TypeContainer';
import AbilityContainer from '../AbilityContainer/AbilityContainer';
import PokeContainer from '../PokeContainer/PokeContainer';

class PokeIndex extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true,
            name: null,
            url: null,
            type: null
        }
    }

    componentDidMount(){
        this.showPokemon();
    }
    showPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        console.log(parsedResponse.results)
        console.log(parsedResponse.results[0].name)
        this.setState({
            name: parsedResponse.results[0].name,
            url: parsedResponse.results[0].url
        })
        const typeResponse = await fetch('https://pokeapi.co/api/v2/type')
        const parsedTypeResponse = await typeResponse.json();
        console.log(parsedTypeResponse.results[11].name)
        this.setState({
            type: parsedTypeResponse.results[11].name
        })
    }

    render(){
        console.log(this.state)
        return <div>
            <h3>Welcome to your PokeDex, {this.props.username}!</h3>
            <h4>Crikey! Take a look at this one!</h4>
            Name: {this.state.name}<br/>
            URL: {this.state.url}<br/>
            Type: {this.state.type}



        </div>
    }
}


export default PokeIndex;