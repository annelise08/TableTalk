// Reccomendations page should request data from the database, then render all data as cards
import React, { Component } from 'react';
import ReccCard from './ReccCard';
import {CardGroup} from 'react-bootstrap';
import AddReccCard from './AddReccCard';

class Reccomendations extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateReccs = this.handleUpdateReccs.bind(this);
        // state should hold all user's reccs from db
        this.state = {
            fetchedReccs: false,
            reccs: []
        }
    }
    // when component mounts, make a fetch request to get reccommendations from database
    // separate fetching code from code to render recc card
    componentDidMount() {
        fetch('/recc/')
            .then(res => res.json())
            .then((reccs) => {
                if (!Array.isArray(reccs)) reccs = [];
                console.log(`Got reccs: ${reccs}`);
                return this.setState({
                    reccs,
                    fetchedReccs: true
                })
            })
    }

    // when we make a post request, update state with new recc

    // interact with backend as high up on tree as possible
    // app component is your starting place
    // try to avoid cluttering the app
    // keep components as small as possible- so each component has its own job
    // have one component to manage displaying list of reccomendation card
    // move add recc card to app, app would have code to handle on form submit

    // this function updates the state when a new recommendation is added
    handleUpdateReccs(newRecc){
        const newReccs = this.state.reccs.slice();
        newReccs.push(newRecc);
        this.setState({reccs: newReccs});
    }

    render() {
        // create a recc card for each recc component stored in the state
        if (this.state.fetchedReccs && this.state.reccs !== []) {
            const { reccs } = this.state;
            const reccElements = reccs.map((recc, i) => {
                return (
                    <ReccCard
                    key={i}
                    info={recc}
                    />
                )
            })
            return (
                // render the recc cards and the add recc card component
                <div className='recc-container'>
                <AddReccCard onReccsChange={this.handleUpdateReccs}/>
                {reccElements}
                </div>
            )
        } else return (
            <div>
            <div>No reccomendations found</div>
            </div>
        )
    }
}



export default Reccomendations;