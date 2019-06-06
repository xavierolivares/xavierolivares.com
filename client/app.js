import React, {Component}
from 'react'
import {Redirect} from 'react-router'
import {NavBar} from './components/navbar'
import {Social} from './components/social'
import {Route} from 'react-router-dom'
import {About} from './components/about'
import {Portfolio} from './components/portfolio'
import {Contact} from './components/contact'
import {Home} from './components/home'

export class App extends Component {
    render () {
        return <div id='main'>
            {/* <Link to='/'>Home</Link> */}
            <div id='navstruc'>
                <NavBar />
            </div>
            <div id='contentstruc'>
                <Redirect from='/' exact to='/home' />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
            </div>
            </div>
    }
}

