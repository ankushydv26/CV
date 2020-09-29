import React, { Component } from "react";

import "./Style/Page.css";

import Feedback from "./feedback"
import Email from "./email"


class Page extends Component {
  render() {
    return (
      <div className="content" >
        <section >
          <div className="post markdown" >
          <div className="markdown" ><h1 id="oleg-smetanin-cv">Ankush Kumar CV</h1>
            <p>Hi, I’m Ankush, an enthusiastic and self-motivated web developer.</p>
            <Email/>
            <h2 id="considerable-knowledge-of-front-end-stack-">Considerable knowledge of front-end stack:</h2>
            <ul>
              <li>JavaScript, ES5, ES6, ES7 (async await with babel)</li>
              <li>HTML5 Canvas</li>
              <li>CSS, CSS3 </li>
              <li>React.js</li>
            </ul>
            <h2 id="considerable-knowledge-of-back-end-stack-">Considerable knowledge of back-end stack:</h2>
            <ul >
              <li>JavaScript in Node.js</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
            <h2 id="last-projects">Last projects</h2>
            <h3 id="structured-way-task-manager-https-structuredway-com-span-className-gray-2014-present-span-">Logistic Website (<a href="https://customer.logycode.com/">https://customer.logycode.com/</a>) <span className="gray">2019-2020</span></h3>
            <p>Client-side: ES6, ReactJS, Redux, TypeScript, Socket.IO, Bootstrap custom theme</p>
            <p>Server-side: ES6, Node.js, PostgreSQL,MongoDB</p>

                <h2 id="education">Education</h2>
                <p>Bansal Institute of Science and Technology, Bhopal
                ( 2014 – 2018)</p>
                <p>Bachelor of engineering in Computer Science</p>
                <Feedback style={{display:"flex", justifyContent:"end"}}/>
              </div>
            </div>
            
         </section>
          </div>
    );
  }
}

export default Page;
