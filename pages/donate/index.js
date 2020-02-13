const html = require('html-template-tag');
const axios = require('axios');
const { AboutBlock } = require('../../components/AboutBlock');
const { FundingInfo } = require('../../components/FundingInfo')

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
    ${aboutBlocks.map(AboutBlock(true))}
    $${await FundingInfo()}
  </main>
`;

function transformData (response) {
  return {
    banner: {
      image: {
        url: response.acf.banner_image.url,
        text: response.acf.banner_image.alt,
      },
      heading: response.acf.banner_heading,
      text: response.acf.banner_text,
    },
    aboutBlocks: response.acf.donate_repeater_block.map(function (props) {
      return {
        title: props.block_title,
        content: props.block_content,
        buttonText: props.block_button_text,
        buttonUrl: props.block_button_url,
        image: {
          url: props.block_image.url,
          text: props.block_image.text,
        }
      }
    })
  }
};

module.exports = {
  layout: 'default',
  page,
  data: async () => {
    const { data } = await axios.get(`${process.env.API_URL}/pages/16`);

    return {
      ...transformData(data),
    };
  },
  head: ({ config }) => [
    ['title', {}, `Donate | ${config.name}`],
  ],
};