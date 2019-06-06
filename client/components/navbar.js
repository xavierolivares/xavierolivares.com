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
            <Link className='wrap' to="/home">Home</Link>
            <Link className='wrap' to="/about">About</Link>
            <Link className='wrap' to="/portfolio">Portfolio</Link>
            <Link className='wrap' to="/contact">Contact</Link>
            </div>
            <div id='social'>
                <Social />
            </div>
        </div>
    }
}

module.export = NavBar