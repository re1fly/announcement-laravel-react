import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RouteApp} from "./Route";

class App extends Component {
    render() {
        return (
            <RouteApp />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
