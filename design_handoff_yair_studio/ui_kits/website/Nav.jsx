/* global React */
const { useState } = React;

function Nav() {
  return (
    <nav className="site-nav">
      <a className="brand" href="#top">
        <span className="wordmark-group" aria-label="y[AI]r studio">
          <span className="wordmark">
            <span className="wordmark-y">y</span>
            <span className="wordmark-bracket">[</span>
            <span className="wordmark-ai">AI</span>
            <span className="wordmark-bracket">]</span>
            <span className="wordmark-r">r</span>
          </span>
          <span className="wordmark-studio">studio</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#services">services</a>
        <a href="#approach">approach</a>
        <a href="#work">work</a>
        <a href="#about">about</a>
      </div>
      <a href="#contact" className="btn btn-primary nav-cta">book a call</a>
    </nav>
  );
}

window.Nav = Nav;
