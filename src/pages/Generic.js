import React from 'react';
import Resume_1 from "../assets/images/Resume_1.png";
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Resume</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          
          <img className="image-res" src={Resume_1} alt="resume" />
        
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
