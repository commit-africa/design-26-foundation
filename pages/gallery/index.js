const html = require('html-template-tag');
const axios = require('axios');
const { Header } = require('../../components/Header');

const page = () => html`
  <main>
    <section class="top-image">
      <figure class="top-image-figure">
        <img :src="banner.image.url" :alt="banner.image.text">
        <figcaption>
          <h1>
            {{ banner.heading }}
          </h1>
          <p>{{ banner.text }}</p>
        </figcaption>
      </figure>
    </section>
    <section class="four-column-grid gallery">
      <a v-for="(image, i) in images" :key="i" :href="image.url">
        <img :src="image.url" :alt="image.text">
      </a>
    </section>
    <section class="funding-info">
      <article>
        <div class="funding-info-block watch-video">
          <img src="/assets/img/photos/sewing-four.jpg" alt="">
        </div>
        <div class="funding-info-block stats">
          <h4>With your support</h4>
          <p>We've tsrained <span class="stats-actual">30</span> young girls and can help many more.</p>
          <a class="button" href="/about">Read more about us</a>
        </div>
      </article>
    </section>
  </main>
`;


module.exports = {
  layout: 'default',
  page,
  head: ({ config }) => [
    ['title', {}, `Gallery | ${config.name}`],
  ],
};