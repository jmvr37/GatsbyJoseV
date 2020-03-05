import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import inhabitent from '../assets/images/inhabitent.jpeg';
import instanews from '../assets/images/instanews.jpeg';
import beyond from '../assets/images/beyond.jpeg';
import boomtown from '../assets/images/boomtown.png';
import dimsum from '../assets/images/dimsum.jpeg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="icons">
          {config.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="actions special">
          {/* <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li> */}
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Know me
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>About me</h2>
          <p>
            Hello! My name is Jose and welcome to my awesome Website!
            <br />
            I have expertise as Full-Stack Web developer by using the most
            awesome technologies and frameworks approved by the software
            industry.
            <br />
            I'm working right now using React-Native and looking forward to
            develope better skills as a developer.
            <br />
            My teammates know me as a highly cooperative developer and a
            hard-worker person by always bringing the most creative and awesome
            solutions for every project that i face. I always try to be a
            cross-functional, business oriented and quality focused developer in
            the team.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={beyond} alt="" />
        </div>
        <div className="content">
          <h2>Beyond the Conversation</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={inhabitent} alt="" />
        </div>
        <div className="content">
          <h2>Inhabitent</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={instanews} alt="" />
        </div>
        <div className="content">
          <h2>Instanews</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={boomtown} alt="" />
        </div>
        <div className="content">
          <h2>Boomtown</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={dimsum} alt="" />
        </div>
        <div className="content">
          <h2>Dim Sum App</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={instanews} alt="" />
        </div>
        <div className="content">
          <h2>Larivo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
          <p>
            I've worked using differents languages like Javascript, HTML, CSS,
            React, React-Native, PHP just to name a few.
            <br />
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-laptop">
            <h3>Front-End</h3>
            <p>HTML, CSS, PHP, JavaScript, JQuery, ReactJs & Node.js</p>
          </li>
          <li className="icon solid fa-code">
            <h3>Back-End</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>

          {/* <li className="icon fa-heart">
            <h3>Favorites</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
