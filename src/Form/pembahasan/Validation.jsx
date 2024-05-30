import React from "react";
const Input = ({label, type, name, onChange}) =>{
    return(
        <div>
            <label> {label} : </label>
        <br />
        <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}

export default class Validation extends React.Component{
    state ={
        email :'',
        password :'',
        errors : []
    }
    handleSubmit = event =>{
      event.preventDefault();
     const {email, password} = this.state;
     let message = [];
     if (email.length === 0){
       message = [...message, 'Email Tidak Boleh Kosong'];
       
     }
     if (password.length === 0){
        message = [...message, 'Password Tidak Boleh Kosong'];
        
      }

      if (message.length >0){
        this.setState({
            errors:message
        }

        )
      }
    }
    render(){
        const style ={
            widht : '400px',
            margin :'100px auto 0',
            border : '1px solid black',
            padding : '10px'
        }
        return(
            <div style={style}>
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" label="email"onChange={value => this.setState({email:value})}/>
                    <input type="password" name="password" label="password" onChange={value => this.setState({password:value})}/>
                    <br />
                    <button type="submit">Login</button>

                </form>
            </div>
        )
    }
}