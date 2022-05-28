import React, { Component } from "react";

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <p>salve {this.props.name}!</p>
            </div>
        )
    }
}

export default HelloWorld