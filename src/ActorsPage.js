import React, {Component} from 'react'
import * as axios from "axios";
import ActorPage from "./ActorPage";

class ActorsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actors: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                console.log(res.data.results)
                this.setState({actors: res.data.results})
            })
    }

    removeActor = (name) => {
        console.log('Remove Actor '+name)
    };
    addActor = (FullName) => {
        console.log('Add new Actor '+FullName)
    };

    render() {
        return (
            <div>
                {
                    this.state.actors.map((el) => {
                        return (
                            <div key={el.name}>
                                <ActorPage name={el.name} removeActor={this.removeActor}/>
                            </div>
                        )

                    })
                }
                <div>
                    <input type="text" placeholder={' Write FullName Actor'} ref={(FullName) => {
                        this.FullNameActor = FullName
                    }}/>
                    <button onClick={() => {
                        this.addActor(this.FullNameActor.value)
                    }}>Add New Actor
                    </button>
                </div>
            </div>
        )

    }
}

export default ActorsPage