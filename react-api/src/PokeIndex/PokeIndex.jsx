import React, { Component } from 'react';
import NameContainer from '../NameContainer/NameContainer';
import TypeContainer from '../TypeContainer/TypeContainer';
import AbilityContainer from '../AbilityContainer/AbilityContainer';

class PokeIndex extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true
        }
    }
    changePage = (e) => {
        console.log(e.target.id);
        this.setState({
          chosenPage: e.target.id
        })
    }
    render(){
        return <div>
            <h3>Welcome to your PokeDex, {this.props.username}!</h3>
            <button onClick={this.changePage} id="name">Search by Name</button>
            <button onClick={this.changePage} id="type">Search by Type</button>
            <button onClick={this.changePage} id="ability">Search by Ability</button>
            {
                this.state.chosenPage === null ?
                    null
                    :
                    this.state.chosenPage === "name" ?
                        <NameContainer></NameContainer>
                        :
                        this.state.chosenPage === "type" ?
                            <TypeContainer></TypeContainer>
                            :
                            this.state.chosenPage === "ability" ?
                                <AbilityContainer></AbilityContainer>
                                :
                                null
            }
        </div>
    }
}


export default PokeIndex;