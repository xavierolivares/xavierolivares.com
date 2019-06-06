import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render () {
        return <div id='navbar'>
            <Link style={{textDecoration: 'none'}} to="/home">Home</Link>
            <Link style={{textDecoration: 'none'}} to="/about">About</Link>
            <Link style={{textDecoration: 'none'}} to="/portfolio">Portfolio</Link>
            <Link style={{textDecoration: 'none'}} to="/contact">Contact</Link>
        </div>
    }
}

module.export = NavBar