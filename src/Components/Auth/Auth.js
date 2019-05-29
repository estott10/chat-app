import React, {Component} from 'react';
import Axios from 'axios';

export default class Auth extends Component{
    
    constructor(){
    super();
    
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange.bind = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    addUser(){
        Axios.post( )
        .then(
            result => {

            })
        .catch()
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        Logo 
                        <h1>MentorMe</h1>
                    </div>
                    <div>
                        Username: <input name = "username" onChange = {(e) => this.handleChange(e)}></input>
                        Password: <input name = "password" onChange = {(e) => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>


            </div>
        )
    }    
}
