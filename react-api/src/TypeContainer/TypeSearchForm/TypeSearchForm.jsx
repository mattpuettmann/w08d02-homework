import React, { Component } from 'react';

class TypeSearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    render(){
        return <div>
            Search By Type: <input type="text" name="search"/>
            <input type="submit"/>
        </div>
    }
}

export default TypeSearchForm;