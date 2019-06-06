import React, {Component}
from 'react'
import {Link} from 'react-router-dom'
import {Home} from './components/home'
import {NavBar} from './components/navbar'
import {Social} from './components/social'

export class App extends Component {
    render () {
        return <div>
            {/* <Link to='/'>Home</Link> */}
            <NavBar />
            <Home />
            </div>
    }
}

