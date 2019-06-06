import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons'

export class Social extends Component {
    render () {
        return <div id='sociallinks'>
            {/* <Link to="/StackOverflow">StackOverflow</Link> */}
            {/* <SocialIcon target="_blank" url='https://www.linkedin.com/in/xavierolivaresb/' network='linkedin' bgColor='#000000' /> */}
            <SocialIcon target="_blank" url='https://www.linkedin.com/in/xavierolivaresb/' network='linkedin' bgColor="#008080" fgColor="#FFFFFF" />
            <SocialIcon target="_blank" url='https://twitter.com/xavierolivaresb' network='twitter' bgColor="#008080" fgColor="#FFFFFF" />
            <SocialIcon target="_blank" url='https://medium.com/@xavierolivares' network='medium' bgColor="#008080" fgColor="#FFFFFF" />
            <SocialIcon target="_blank" url='https://github.com/xavierolivares' network='github' bgColor="#008080" fgColor="#FFFFFF" />
        </div>
    }
}

module.export = Social