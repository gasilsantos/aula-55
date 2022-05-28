import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "red",
            model: "challenger",
            velocity: 237,
            owner: this.props.owner


        }
    }

    render() {
        return (
        <div>
            <p>color:{this.state.color}</p>
            <p>model:{this.state.model}</p>
            <p>velocity:{this.state.velocity}</p>
            <p>owner: {this.state.owner}</p>


        </div>
        )

    }
}

export default Car
