import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export class Social extends Component {
    render () {
        return <div id='sociallinks'>
            {/* <Link className='wrap' to="/StackOverflow">StackOverflow</Link> */}
            <SocialIcon className='wrap' target="_blank" url='https://www.linkedin.com/in/xavierolivaresb/' network='linkedin' />
            <SocialIcon className='wrap' target="_blank" url='https://twitter.com/xavierolivaresb' network='twitter' />
            <SocialIcon className='wrap' target="_blank" url='https://medium.com/@xavierolivares' network='medium' />
            <SocialIcon className='wrap' target="_blank" url='https://github.com/xavierolivares' network='github' />
        </div>
    }

}

module.export = Social