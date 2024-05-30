import React from "react";

 export default class List extends React.Component{
    state = {
        users: ['fajri','fira','algi','ibnu','hafiz']
    }
    render(){
        return(
            <div>
                <ul>
                {
                    this.state.users.map((user, i) => <li key={i}>(users)</li> )
                }
                </ul>
               
            </div>
        )
    }

}