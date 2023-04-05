import React, { Component } from 'react';
import Reccomendations from './Reccomendations';

class App extends Component {
    // app should render reccomendations page
    render() {
        return (
            <div>
                <nav>
                    <span>TableTalk</span>
                </nav>
                < Reccomendations />
            </div>
        )
    }
}

export default App;