const html = require('html-template-tag');
const axios = require('axios');
const { FundingInfo } = require('../components/FundingInfo');

const AboutBlock = ({ title, content, image }, index) => html`
  $${
    index % 2 ? (
      html`<section class="two-column-grid about-info">
        <figure class="about-image">
          <img data-src="${image.url}" alt="${image.text}">
        </figure>
        <article class="about-text">
          <h2>${title}</h2>
          <p>${content}</p>
        </article>
      </section>`
    ) : (
      html`<section class="two-column-grid about-info">
        <article class="about-text">
          <h2>${title}</h2>
          <p>${content}</p>
        </article>
        <figure class="about-image">
          <img data-src="${image.url}" alt="${image.text}">
        </figure>
      </section>`
    )
  }
`;

const Banner = ({ image, heading, text, buttonUrl, buttonText }) => html`
  <article>
    <figure class="split-image">
      <img data-src="${image.url}" alt="${image.text}" />
    </figure>
    <div class="cta">
      <h2>${heading}</h2>
      <p>${text}</p>
      <a class="button button-pink" href="${buttonUrl}">${buttonText}</a>
    </div>
  </article>
`;

const page = async ({ data: { banner } }) => html`
  <main>
    <section class="center-split">
      $${Banner(banner.left)}
      $${Banner(banner.right)}
    </section>
    ${banner.aboutBlocks.map((block, index) => AboutBlock(block, index))}
    $${await FundingInfo()}
  </main>
`;

function transformData (response) {
  return {
    banner: {
      left: {
        image: {
          url: response.acf.banner_image_left.url,
          text: response.acf.banner_image_left.alt,
        },
        heading: response.acf.banner_heading_left,
        text: response.acf.banner_text_left,
        buttonText: response.acf.button_text_text_left,
        buttonUrl: response.acf.button_text_link_left.includes('https://design26foundation.org.za') ? (
          response.acf.button_text_link_left.replace('https://design26foundation.org.za', '')
        ) : (
          response.acf.button_text_link_left
        )
      },
      right: {
        image: {
          url: response.acf.banner_image_right.url,
          text: response.acf.banner_image_right.alt,
        },
        heading: response.acf.banner_heading_right,
        text: response.acf.banner_text_right,
        buttonText: response.acf.button_text_text_right,
        buttonUrl: response.acf.button_text_link_right.includes('https://design26foundation.org.za') ? (
          response.acf.button_text_link_right.replace('https://design26foundation.org.za', '')
        ) : (
          response.acf.button_text_link_right
        ),
      },
      aboutBlocks: response.acf.home_block_repeater.map(function (props) {
        return {
          title: props.block_title,
          content: props.block_content,
          image: {
            url: props.block_image.url,
            text: props.block_image.alt,
          },
        }
      }),
    }
  }
};

module.exports = {
  layout: 'default',
  page,
  data: async () => {
    const { data: banners } = await axios.get(`${process.env.API_URL}/pages/6`);

    return {
      ...transformData(banners),
    };
  },
  head: ({ config }) => [
    ['title', {}, config.name],
  ],
};