import React from "react";

export default class Conditional extends React.Component{
    render(){
        const isLogin = true;
        if (isLogin){
            return(
                <div>
                    Anda harus Login 
                </div>
            )
        } else{

        }

        return(
            <div>
                <h1>Silahkan Login Terlebih Dahulu</h1>
            </div>
        )
    }
}