import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Social } from './social';

export class NavBar extends Component {
    render () {
        return <div id='navbar'>
            <div id='x'>
            <Link to="/home">X</Link>
            </div>
            <div id='navlinks'>
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            </div>
            <div id='social'>
                <Social />
            </div>
        </div>
    }
}

module.export = NavBar