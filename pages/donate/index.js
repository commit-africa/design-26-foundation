const html = require('html-template-tag');
const axios = require('axios');
const { AboutBlock } = require('../../components/AboutBlock');
const { Header } = require('../../components/Header');

const page = ({ banner, aboutBlocks }) => html`
  <main>
    <section class="top-image">
      <figure class="top-image-figure">
        <img src="${banner.image.url}" alt="${banner.image.text}">
        <figcaption>
          <h1>
            ${banner.heading}
          </h1>
          <p>${banner.text}</p>
        </figcaption>
      </figure>
    </section>
    ${aboutBlocks.map(block => AboutBlock(block))}
    <section class="funding-info">
      <article>
        <div class="funding-info-block watch-video">
          <img src="/assets/img/photos/sewing-four.jpg" alt="">
        </div>
        <div class="funding-info-block stats">
          <h4>With your support</h4>
          <p>We've trained <span class="stats-actual">30</span> young girls and can help many more.</p>
          <a class="button" href="/about">Read more about us</a>
        </div>
      </article>
    </section>
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
  title: 'Donate | Design26',
  page,
  data: async () => {
    const { data } = await axios.get('http://design26foundation.org.za.www32.cpt1.host-h.net/wp-json/wp/v2/pages/16');

    return {
      ...transformData(data),
    };
  },
};