import React, { Component } from 'react';

class NameContainer extends Component {
    constructor(){
        super();
        this.state = {
            selected: ""
        }
    }
    render(){
        return <div>
            <h1>Name Container!</h1>
        </div>
    }
    
}


export default NameContainer;