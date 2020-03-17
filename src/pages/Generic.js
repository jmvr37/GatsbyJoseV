import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Resume</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Jose Valenzuela</h3>
          <p>
            Updating Resume send me an email if you want to check out my resume
            :)
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
