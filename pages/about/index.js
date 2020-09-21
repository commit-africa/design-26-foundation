const html = require('html-template-tag');
const axios = require('axios');
const { AboutBlock } = require('../../components/AboutBlock');
const { FundingInfo } = require('../../components/FundingInfo');

const page = async ({ data: { banner, aboutBlocks } }) => html`
  <main>
    <section class="top-image">
      <figure class="top-image-figure">
        <img data-src="${banner.image.url}" alt="${banner.image.text}">
        <figcaption>
          <h1>
            ${banner.heading}
          </h1>
          <p>${banner.text}</p>
        </figcaption>
      </figure>
    </section>
    ${aboutBlocks.map(AboutBlock())}
    $${await FundingInfo()}
  </main>
`;

const transformData = (response) => ({
  banner: {
    image: {
      url: response.acf.banner_image.url,
      text: response.acf.banner_image.alt,
    },
    heading: response.acf.banner_title,
    text: response.acf.banner_text,
  },
  aboutBlocks: response.acf.home_block_repeater.map((props) => ({
    title: props.block_title,
    content: props.block_content,
    image: {
      url: props.block_image.url,
      text: props.block_image.alt,
    }
  })),
})

module.exports = {
  page,
  data: async () => axios.get(`${process.env.API_URL}/pages/8`).then(({ data }) => transformData(data)),
  head: ({ config }) => [
    ['title', {}, `About | ${config.name}`],
  ],
};