import React, { Component } from 'react';
import Reccomendations from './Reccomendations';
import NavBar from './NavBar'

class App extends Component {
    // app should render reccomendations page
    render() {
        return (
            <div>
                < NavBar />
                <h2 className='my-reccs'>My restaurant reccomendations</h2>
                < Reccomendations />
            </div>
        )
    }
}

export default App;