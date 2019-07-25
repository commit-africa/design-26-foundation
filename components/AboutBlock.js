const html = require('html-template-tag');

const AboutBlock = ({ title, content, image }) => html`
  <section class="two-column-grid about-info">
    <article class="about-text">
      <h2>${title}</h2>
      <p>${content}</p>
    </article>
    <figure class="about-image">
      <img src="${image.url}" alt="${image.text}">
    </figure>
  </section>
`;

module.exports = {
  AboutBlock,
};