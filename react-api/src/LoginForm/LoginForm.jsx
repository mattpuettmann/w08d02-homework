import React, { Component } from 'react';


class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        this.props.handleLogin(this.state);

    }
    render(){
        return <div>
            <form onSubmit = {this.handleSubmit}>
                Username: <input onChange = {this.handleChange} type="text" name="username"/>
                Password: <input onChange = {this.handleChange} type="password" name="password"/>
                <input type="submit"/>
            </form>
        </div>
    }
}


export default LoginForm;