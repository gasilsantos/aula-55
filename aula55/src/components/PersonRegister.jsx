import React from "react";

class PersonRegister extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name:this.props.name,
            age:this.props.age,
            lastname:this.props.lastname,
            job:this.props.job,
        }
    }

    render(){
        return(
            <div>
            <p>name:{this.state.name}</p>
            <p>age:{this.state.age}</p>
            <p>sobrenome:{this.state.lastname}</p>
            <p>cargo: {this.state.job}</p>

            </div>
        )
    }
}

export default PersonRegister