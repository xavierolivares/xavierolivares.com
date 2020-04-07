import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavBar } from "./components/navbar";
import { Social } from "./components/social";
import { Route } from "react-router-dom";
import { About } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Blog } from "./components/blog";

export class App extends Component {
  render() {
    return (
      <div>
    <div>
      <header>
      <div className='content-wrap'>    
          <img className='profile-img col-narrow' src="http://tny.im/jrl" alt="Xavier Olivares"/>
          <div className='col-wide'>
              <h1>Xavier Olivares</h1>
              <h2>Software Engineer | Volunteer Teacher | Community Enthusiast</h2>
              <p>Seeking software engineer opportunities! While my background is in eCommerce sales and entrepreneurship, my most recent work included developing software solutions for a multitude of eCommerce clients and content publishers.</p>
              <p>Proficient: JavaScript, jQuery, PHP, Node/Express, React, Redux, Git, Github, Gitlab, CI/CD, HTML, CSS</p>
              <p>Knowledgeable: Heroku, Travis, Postgres, Sequelize, Postman, ESP Integrations (authentication, posting via XML/JSON), Error Handling.</p>
          </div>
      </div>
  </header>
  </div>
  <div>
  <main> 
      {/* <!-- // Work Experience --> */}
      <section className='work'>
          <div className='content-wrap'>
              <h2>Work Experience</h2>
              <div className='col-narrow'>
              {/* <!-- Job Details: copy this whole block to add more jobs --> */}
              <h3>Software Engineer</h3>
              <p>BounceX (soon to be Wunderkind)</p>
              <p>09/2019 - 04/2020</p>
          </div> 
              {/* <!-- Add as many paragraphs as you need. -->
              <!-- <p>Providing online competitive prices for greenhouses using a drop-shipping business model. Built with Shopify. Setup business and tax credentials for sale of goods within the contiguous U.S. Illustrates a start-to-finish approach for a seasonal business containing a complete eCommerce workflow.</p> --> */}
          <div className='col-wide'>
              {/* <!-- This list can be deleted if you don't want to use it. --> */}
              <p>Summary:</p>
              <ul>
                <li>Integrated BounceX’s products and API functionality to a multitude of eCommerce stores and publishers.</li>
                <li>Client onboarding required identifying the structural framework of websites so we could inject our product solution via a script on the DOM.</li>
                <li>Inspected client-side bugs and developed custom patches based on the structural updates to client websites.</li>
                <li>Backend work involved testing and building API integrations with Email Service Providers.</li>
                <li>Implemented safety procedures in test environments that were followed by a rigorous QA process, which was essential for the successful deployment of production-level code.</li>
              </ul>
              {/* <!-- end of Job Details block. --> */}
          </div> 
          <div className='col-narrow'>
              {/* <!-- Job Details: copy this whole block to add more jobs --> */}
              <h3>Founder | Owner</h3>
              <p>Greenhousely</p>
              <p>03/2017 - 03/2020</p>
          </div> 
              {/* <!-- Add as many paragraphs as you need. -->
              <!-- <p>Providing online competitive prices for greenhouses using a drop-shipping business model. Built with Shopify. Setup business and tax credentials for sale of goods within the contiguous U.S. Illustrates a start-to-finish approach for a seasonal business containing a complete eCommerce workflow.</p> --> */}
          <div className='col-wide'>
              {/* <!-- This list can be deleted if you don't want to use it. --> */}
              <p>Summary:</p>
              <ul>
                <li>Provided online competitive prices for greenhouses using a drop-shipping business model.</li>
                <li>Fully operational Shopify business made for the sale of goods within the United States.</li>
                <li>Contained a complete eCommerce workflow including: Niche Selection, Website Build, Domain Acquisition, Marketing, Paid Advertising, Email Service Provider Integration, Business and Tax Preparation, Dropship Contracting (Remote Warehouse Fulfillment), and eCommerce Checkout</li>
              </ul>
              {/* <!-- end of Job Details block. --> */}
          </div>   
          
          <div className='col-narrow'>
                  {/* <!-- Job Details: copy this whole block to add more jobs --> */}
                  <h3>Software Engineering Student</h3>
                  <p>Fullstack Academy of Code</p>
                  <p>04/2019 - 07/2019</p>
              </div>
                  {/* <!-- Add as many paragraphs as you need. -->
                  <!-- <p>Tested functionality over three website redesigns to help ensure a positive consumer experience. Continuously tested and shared logs with development teams: Salesforce, Apprise/Aptean, and Blue Acorn. Played a significant role in implementing Zendesk for the newest iteration of the website. Improved customer service satisfaction by 7-8% and developed new hire training protocols. Reduced chargeback rate by 95% with a self-developed risk protocol prior to implementing Kount software.</p> --> */}
              <div className='col-wide'>
                  {/* <!-- This list can be deleted if you don't want to use it. --> */}
                  <p>Summary:</p>
                  <ul>
                      <li>Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago.</li>
                      <li>Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program.</li>
                  </ul>
                  {/* <!-- end of Job Details block. --> */}
              </div>    
          <div className='col-narrow'>
                  {/* <!-- Job Details: copy this whole block to add more jobs --> */}
                  <h3>eCommerce Customer Service</h3>
                  <p>Peter Thomas Roth Clinical Skincare</p>
                  <p>03/2015 - 04/2019</p>
              </div> 
                  {/* <!-- Add as many paragraphs as you need. --> */}
                  {/* <!-- <p>Providing online competitive prices for greenhouses using a drop-shipping business model. Built with Shopify. Setup business and tax credentials for sale of goods within the contiguous U.S. Illustrates a start-to-finish approach for a seasonal business containing a complete eCommerce workflow.</p> --> */}
              <div className='col-wide'>
                  {/* <!-- This list can be deleted if you don't want to use it. --> */}
                  <p>Summary:</p>
                  <ul>
                          <li>Tested functionality over three website redesigns to help ensure a positive UX/UI experience. Associated teams were Salesforce, Apprise/Aptean, and Blue Acorn.</li>
                          <li>Played a significant role in implementing Zendesk for the newest iteration of the website, improving customer service satisfaction by 7-8%.</li>
                  </ul>
                  {/* <!-- end of Job Details block. --> */}
              </div>
          </div>
      </section>


      {/* <!-- // Education --> */}
      <section className='education'>
          <div className='content-wrap'>
              <h2>Education</h2>
              {/* <!-- School details: copy this whole block to add more schools. --> */}
              <h3>Fullstack Academy of Code - New York, NY</h3>
              <p>Certificate of Completion: React, Redux, Node, Express, Sequelize, Postgres</p>
              {/* <!-- Add as many paragraphs as you need. --> */}
              {/* <!-- End of school details. --> */}

              {/* <!-- School details: copy this whole block to add more schools. --> */}
              <h3>Muhlenberg College - Allentown, PA</h3>
              <p>Bachelor of Arts in Business Administration, Concentration: Entrepreneurship</p>
              {/* <!-- Add as many paragraphs as you need. --> */}
              {/* <!-- End of school details. --> */}
          </div>
      </section>
  </main>
  </div>
  {/* <!-- // Footer & contact info --> */}
  <footer>
      <div className="content-wrap">
          <h2>Keep in Touch!</h2>
          
          {/* <!-- Social media and contact links. Add or remove any networks. --> */}
          <div className='contactinfo'>
              <a target="_blank" href="mailto:xm.olivares@gmail.com">Email Me</a>
              {/* <!-- <a href="http://xavierolivares.com" target="_blank">xavierolivares.com</a> --> */}
              <a href="https://www.linkedin.com/in/xavierolivaresb/" target="_blank">LinkedIn</a>
              <a href="https://github.com/xavierolivares" target="_blank">Github</a>
          </div>
        </div>
  </footer>
  </div>
    );
  }
}
