const html = require('html-template-tag');

const Header = () => html`
  <header class="top-header" id="js-header">
    <div class="header-elements">
      <a class="logo" href="">
        <img src="/assets/img/design26foundation-logo.jpg" alt="Design 26 Foundation">
      </a>
      <nav id="nav-primary" class="navigation">
        <ul>
          <li class="nav-primary-item"><a class="nav-primary-link current" href="/">Home</a></li>
          <li class="nav-primary-item"><a class="nav-primary-link" href="/our-impact">Our impact</a></li>
          <li class="nav-primary-item"><a class="nav-primary-link" href="/about">About</a></li>
          <li class="nav-primary-item"><a class="nav-primary-link" href="/gallery">Gallery</a></li>
          <li class="nav-primary-item"><a class="nav-primary-link" href="/blog">Blog</a></li>
          <li class="nav-primary-item"><a class="nav-primary-link" href="/contact-us">Contact</a></li>
        </ul>
        <a href="/donate" class="button button-small">Donate</a>
      </nav>
    </div>
  </header>
`;

module.exports = {
  Header,
};