import React, {Component}
from 'react'
import {Redirect} from 'react-router'
import {NavBar} from './components/navbar'
import {Social} from './components/social'
import {Route} from 'react-router-dom'
import {Profile} from './components/profile'
import {Portfolio} from './components/portfolio'
import {Contact} from './components/contact'
import {Home} from './components/home'

export class App extends Component {
    render () {
        return <div>
            {/* <Link to='/'>Home</Link> */}
            <NavBar />
            <Redirect from='/' exact to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            </div>
    }
}

