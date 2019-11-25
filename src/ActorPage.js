import React, {Component} from 'react'

class ActorPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let {name, removeActor} = this.props;
        return (
            <div>
                <b>Name Actor</b>: {name}
                <button onClick={() => removeActor(name)}>x
                </button>
            </div>
        )
    }
}


export default ActorPage