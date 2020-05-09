import React from 'react'

export class React16Component extends React.Component {
    static getDerivedStateFromProps(props, state) {
        state.is16 = true
        return state
    }

    constructor(props) {
        super(props);
        this.state = {
            is16: false
        }
    }

    render() {
        return (
            <div>
                <div>(React16Component): current react version is {React.version}</div>
                {this.state.is16 && <div>(React16Component): "getDerivedStateFromProps" is in game</div>}
            </div>
        );
    }
}
