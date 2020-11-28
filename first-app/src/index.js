import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './app'
import HelloWorld from './hello_world/HelloWorld'
import JogoDaVelha from './tic_tac_toe/TicTacToe'
import Notfound from './notFound.js'
import {People} from './getting_started/People'

// Based on https://codeburst.io/getting-started-with-react-router-5c978f70df91

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/helloWorld">Hello World :)</Link>
                </li>
                <li>
                    <Link to="/jogoDaVelha">Tic Tac Toe</Link>
                </li>
                <li>
                    <People />
                </li>
            </ul>
            <Route path="/" component={App} />
            <Route path="/helloWorld" component={HelloWorld} />
            <Route path="/jogoDaVelha" component={JogoDaVelha} />
            <Route component={Notfound} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


