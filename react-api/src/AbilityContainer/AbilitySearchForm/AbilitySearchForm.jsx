import React, { Component } from 'react';

class AbilitySearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    render(){
        return <div>
            Search By Ability: <input type="text" name="search"/>
            <input type="submit"/>
        </div>
    }
}

export default AbilitySearchForm;