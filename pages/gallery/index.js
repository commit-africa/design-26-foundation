const html = require('html-template-tag');
const axios = require('axios');
const { Header } = require('../../components/Header');
const { FundingInfo } = require('../../components/FundingInfo');

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
    $${FundingInfo()}
  </main>
`;


module.exports = {
  layout: 'default',
  page,
  head: ({ config }) => [
    ['title', {}, `Gallery | ${config.name}`],
  ],
};