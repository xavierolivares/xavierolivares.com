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

Tier 5:
- Five projects on portfolio tab

Minor takeaways for further review:
- Index.html is a static file and should be in the public folder
- Added css file, but not sure if it's being loaded into bundle.js
- When trying to implement Heroku, I needed to fix my permissions for deploy script. I needed to run bundle.js for heroku. chmod 755 script/deploy (or) chmod +x script/deploy let me bypass the permissions