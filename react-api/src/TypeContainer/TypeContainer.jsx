import React, { Component } from 'react';
import TypeSearchForm from './TypeSearchForm/TypeSearchForm';

class TypeContainer extends Component {
    constructor(){
        super();
        this.state = {
            type: ""
        }
    }
    render(){
        return <div>
            <h1>Type Container!</h1>
            <TypeSearchForm></TypeSearchForm>
        </div>
    }
    
}


export default TypeContainer;