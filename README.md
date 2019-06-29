# xavierolivares.com

What I'm learning from building my portfolio website:

- The dependencies that are required for building it from scratch.
- Being able to structure the application with tiers, but keeping in mind that I want to focus on my gaps in understanding (flexbox, the finer details)

Tier 1:

- Navbar
- Homepage
- About page
- Portfolio page
- Blog page
- Contact page
- Basic Flexbox format structure
- Basic color scheme
- Deployed to Heroku
- Link GoDaddy URL to Heroku

Tier 2:

- Add static content to each page
- About page has a picture and small about me
- Portfolio page has a link to Greenhousely
- Blog page: Is there a way to dynamically load medium posts? in Blog?
- Contact page has an email button

Tier 3:

- Add tests to check whether site is production ready
- Link Travis
- Hover changeable font, like: https://jacekjeznach.com/
- Consider Material UI

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
- SSL Certification with Heroku is \$7 a month. Looking into Netlify and DigitalOcean
- Used Redirect from 'react-router' to handle default '/' to '/home'
- Not sure how to link images in React. I'm getting a parsing error
- react-social-icons is a great tool for bypassing image social media links. If I need customization, I will need to look elsewhere. http://jaketrent.github.io/react-social-icons/
- do i need a home page? or do i need x?
- flexbox styling just requires sound structure. break things down into parent and child relationships.
- css animations are the bomb! https://codepen.io/levineuland/pen/AmwCL
- added some flexbox structuring for social links so that they're not spaced so apart. added youtube link for funsies
