const html = require('html-template-tag');
const axios = require('axios')

const FundingInfo = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/pages/6`);
  
  return html`
    <section class="funding-info">
      <article>
        <div class="funding-info-block watch-video">
          <img data-src="/public/assets/img/photos/sewing-four.jpg" alt="">
        </div>
        <div class="funding-info-block stats">
          <h4>With your support</h4>
          <p>We've trained <span class="stats-actual">${data.acf.number_of_girls_trained}</span> young girls and can help many more.</p>
          <a class="button" href="/about">Read more about us</a>
        </div>
      </article>
    </section>
  `;
}

module.exports = {
  FundingInfo,
};