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
              <h2>Coder | Entrepreneur | Community Enthusiast</h2>
              <p>Coming from eCommerce and starting an online business, my move into software engineering has been nothing short of extraordinary.</p>
              <p>Specializing in Javascript, I aim to create software that will help serve the world in meaningful and everlasting ways.</p>
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
              <h3>Founder | Owner</h3>
              <p>Greenhousely</p>
              <p>03/2017 - Present</p>
          </div> 
              {/* <!-- Add as many paragraphs as you need. -->
              <!-- <p>Providing online competitive prices for greenhouses using a drop-shipping business model. Built with Shopify. Setup business and tax credentials for sale of goods within the contiguous U.S. Illustrates a start-to-finish approach for a seasonal business containing a complete eCommerce workflow.</p> --> */}
          <div className='col-wide'>
              {/* <!-- This list can be deleted if you don't want to use it. --> */}
              <p>Summary:</p>
              <ul>
                  <li>Providing online competitive prices for greenhouses using a drop-shipping business model.</li>
                  <li>Built with Shopify. Setup business and tax credentials for sale of goods within the contiguous U.S.</li>
                  <li>Illustrates a start-to-finish approach for a seasonal business containing a complete eCommerce workflow.</li>
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
                          <li>Tested functionality over three website redesigns to help ensure a positive consumer experience.</li>
                          <li>Continuously tested and shared logs with development teams: Salesforce, Apprise/Aptean, and Blue Acorn.</li>
                          <li>Played a significant role in implementing Zendesk for the newest iteration of the website.</li>
                          <li>Improved customer service satisfaction by 7-8% and developed new hire training protocols.</li>
                          <li>Reduced chargeback rate by 95% with a self-developed risk protocol prior to implementing Kount software.</li>
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
              <p>Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago. Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program</p>
              {/* <!-- End of school details. --> */}
              {/* <!-- School details: copy this whole block to add more schools. --> */}
              <h3>Muhlenberg College - Allentown, PA</h3>
              <p>Bachelor of Arts in Business Administration, Concentration: Entrepreneurship</p>
              
              {/* <!-- Add as many paragraphs as you need. --> */}
              <p>Muhlenberg College is a private liberal arts college in Allentown, Pennsylvania. Founded in 1848, Muhlenberg is affiliated with the Evangelical Lutheran Church in America and is named for Henry Melchior Muhlenberg, the German patriarch of the Lutheran Church in America.</p>
              {/* <!-- End of school details. --> */}
          </div>
      </section>
  </main>
  </div>
  {/* <!-- // Footer & contact info --> */}
  <footer>
      <div className="content-wrap">
          <h2>Let's Keep in Touch!</h2>
          
          {/* <!-- Social media and contact links. Add or remove any networks. --> */}
          <div className='contactinfo'>
              <a target="_blank" href="mailto:xm.olivares@gmail.com">Email Me</a>
              {/* <!-- <a href="http://xavierolivares.com" target="_blank">xavierolivares.com</a> --> */}
              <a href="https://www.linkedin.com/in/xavierolivaresb/" target="_blank">LinkedIn</a>
              <a href="https://github.com/xavierolivares" target="_blank">Github</a>
              <a href="https://twitter.com/xavierolivaresb" target="_blank">Twitter</a>
          </div>
  
          <p>Copyright 2019 by Xavier Olivares</p>
      </div>
  </footer>
  </div>
    );
  }
}
