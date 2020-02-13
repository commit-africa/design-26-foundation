const html = require('html-template-tag');

const FundingInfo = () => html`
  <section class="funding-info">
    <article>
      <div class="funding-info-block watch-video">
        <img data-src="/public/assets/img/photos/sewing-four.jpg" alt="">
      </div>
      <div class="funding-info-block stats">
        <h4>With your support</h4>
        <p>We've trained <span class="stats-actual">30</span> young girls and can help many more.</p>
        <a class="button" href="/about">Read more about us</a>
      </div>
    </article>
  </section>
`;

module.exports = {
  FundingInfo,
};