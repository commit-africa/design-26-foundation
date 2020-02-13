const html = require('html-template-tag');

const AboutBlock = (donationButton) => ({ title, content, image, buttonText, buttonUrl }) => html`
  <section class="two-column-grid about-info">
    <article class="about-text">
      <h2>${title}</h2>
      <p>${content}</p>
      $${donationButton ? (html`<a class="button" href="${buttonUrl}">${buttonText}</a>`) : ('')}
    </article>
    <figure class="about-image">
      <img data-src="${image.url}" alt="${image.text}">
    </figure>
  </section>
`;

module.exports = {
  AboutBlock,
};