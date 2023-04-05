// Reccomendations page should request data from the database, then render all data as cards
import React, { Component } from 'react';
import ReccCard from './ReccCard';
import {CardGroup} from 'react-bootstrap';
import AddReccCard from './AddReccCard';

class Reccomendations extends Component {
    constructor(props) {
        super(props);
        // state should hold all user's reccs from db
        this.state = {
            fetchedReccs: false,
            reccs: []
        }
    }
    // when component mounts, make a fetch request
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

    render() {

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
    
                <div className='recc-container'>
                {reccElements}
                <AddReccCard/>
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