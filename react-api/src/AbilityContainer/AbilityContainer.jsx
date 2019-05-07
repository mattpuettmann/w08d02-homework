import React, { Component } from 'react';
import AbilitySearchForm from "./AbilitySearchForm/AbilitySearchForm";

class AbilityContainer extends Component {
    constructor(){
        super();
        this.state = {
            selected: ""
        }
    }
    render(){
        return <div>
            <h1>Ability Container!</h1>
            <AbilitySearchForm></AbilitySearchForm>
        </div>
    }
    
}


export default AbilityContainer;