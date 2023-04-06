import React, { Component } from 'react';
import Reccomendations from './Reccomendations';
import NavBar from './NavBar'

class App extends Component {
    // app should render reccomendations page
    render() {
        return (
            <div>
                {/* <nav>
                    <span>TableTalk</span>
                </nav> */}
                < NavBar />
                < Reccomendations />
            </div>
        )
    }
}

export default App;