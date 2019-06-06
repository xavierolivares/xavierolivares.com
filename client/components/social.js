import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Social extends Component {
    render () {
        return <div>
            <Link to="/https://www.linkedin.com/in/xavierolivaresb/">LinkedIn</Link>
            <Link to="/Twitter">Twitter</Link>
            <Link to="/Github">Github</Link>
            <Link to="/Medium">Medium</Link>
            <Link to="/StackOverflow">StackOverflow</Link>
        </div>
    }

}

module.export = Social