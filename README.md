# xavierolivares.com

What I'm learning from building my portfolio website:

- The dependencies that are required for building it from scratch.
- Being able to structure the application with tiers, but keeping in mind that I want to focus on my gaps in understanding (flexbox, the finer details)

Tier 1:

- Homepage with link to other pages
- About page
- Contact page
- Portfolio page links to profile pages
- Blog page
- Basic Flexbox format structure
- Basic color scheme

Tier 2:
- Add tests to check whether site is production ready
- Link Travis
- Deployed to Heroku
- Link GoDaddy URL to Heroku

Tier 3:
- Is there a way to dynamically load medium posts?
- Hover changeable font, like: https://jacekjeznach.com/

Tier 4: 
- Dark mode
- Mobile friendly
- Exceptional CSS format (shading? get advice from those with exp)
- Three projects on portfolio tab
- SSL Endpoint with Heroku or Netlify? https://devcenter.heroku.com/articles/ssl-endpoint

Tier 5:
- Five projects on portfolio tab

Minor takeaways for further review:
- Index.html is a static file and should be in the public folder
- Added css file, but not sure if it's being loaded into bundle.js
- When trying to implement Heroku, I needed to fix my permissions for deploy script. I needed to run bundle.js for heroku. chmod 755 script/deploy (or) chmod +x script/deploy let me bypass the permissions
https://www.youtube.com/watch?v=b_M6FsPMgyY&t=60s
- Adding a GoDaddy domain to herokuapp https://github.com/IcaliaLabs/guides/wiki/Domain-configuration-using-Heroku-&-GoDaddy
- SSL Certification with Heroku is $7 a month. Looking into Netlify and DigitalOcean
- Used Redirect from 'react-router' to handle default '/' to '/home'
- Not sure how to link images in React. I'm getting a parsing error
- react-social-icons is a great tool for bypassing image social media links. If I need customization, I will need to look elsewhere. http://jaketrent.github.io/react-social-icons/
