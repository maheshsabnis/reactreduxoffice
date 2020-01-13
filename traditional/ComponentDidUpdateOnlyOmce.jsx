import React, { Component } from 'react';

class MouseMovementComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }

    detectMousePosition = (evt) => {
        this.setState({ x: evt.clientX });
        this.setState({ y: evt.clientY });
    }

    // setting up mousemove event only once for componentDidMount
    componentDidMount = () => {
        window.addEventListener('mousemove', this.detectMousePosition);
    };
    render = () => {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        );
    }
}

export default MouseMovementComponent;