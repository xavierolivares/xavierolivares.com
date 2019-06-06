import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Social extends Component {
    render () {
        return <div id='sociallinks'>
            <Link className='wrap' to="/https://www.linkedin.com/in/xavierolivaresb/">LinkedIn</Link>
            <Link className='wrap' to="/Twitter">Twitter</Link>
            <Link className='wrap' to="/Github">Github</Link>
            <Link className='wrap' to="/Medium">Medium</Link>
            <Link className='wrap' to="/StackOverflow">StackOverflow</Link>
        </div>
    }

}

module.export = Social