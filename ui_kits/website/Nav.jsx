/* global React */
const { useState } = React;

function Nav() {
  return (
    <nav className="site-nav" aria-label="primary">
      <a className="brand" href="#top" aria-label="y[AI]r studio — home">
        <img className="brand-logo" src="../../assets/wordmark.svg" alt="" aria-hidden="true" />
      </a>
      <div className="nav-links">
        <a href="#proof">proof</a>
        <a href="#services">services</a>
        <a href="#approach">approach</a>
        <a href="#tools">stack</a>
      </div>
      <a href="#contact" className="btn btn-primary nav-cta">map my first <span className="btn-cap">AI</span> system</a>
    </nav>
  );
}

window.Nav = Nav;
