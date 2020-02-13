const html = require('html-template-tag');
const axios = require('axios');

const page = () => html`
  <main>
    <section class="top-image">
      <figure class="top-image-figure">
        <img data-src="/public/assets/img/photos/about-page-banner.jpg" alt="">
        <figcaption>
          <h1>
            Get in touch with us
          </h1>
          <p>Whether you have questions about donating, the training we do, or the different ways you can support us, we look forward to hearing from you</p>
        </figcaption>
      </figure>
    </section>
    <section class="contact-block">
      <article class="contact-content">
        <h3>Suraya Williams</h3>
        <p>
          <strong>Stellenbosch Business School (2015)</strong>
          <br>
          Small Business Management graduate
        </p>
        <img data-src="/public/assets/img/photos/suraya-williams.jpg">
        <h3>Design26 Foundation</h3>
        <div class="address-details contact-column" itemscope="" itemtype="http://schema.org/Organization">
          <div itemscope="" itemtype="http://schema.org/PostalAddress">
            <div itemscope="" itemtype="http://schema.org/PostalAddress">
              <span itemprop="streetAddress">49 Martin Road, Westgate, Mitchell’s Plain</span> <span itemprop="addressLocality">Cape Town</span>
              <span itemprop="postalCode">7785</span>
            </div>
          </div>
          <span itemprop="telephone">Tel: +27 (0)81 765 9060</span>
          <span class="main-cta">
            Email: <a class="internal-link" href="mailto:info@design26foundation.org.za=Website - Info Enquiry" itemprop="email">info@design26foundation.org.za</a>
          </span>
          <a href="https://www.google.com/maps/place/49+Martin+Rd,+Westgate,+Cape+Town,+7798,+South+Africa/@-34.048008,18.588051,15z/data=!4m5!3m4!1s0x1dcc4673d661bf77:0x70cc594078f41183!8m2!3d-34.0480083!4d18.5880509?hl=en-GB" class="link-map" title="Get directions" target="_blank"> <img data-src="/public/assets/img/map.jpg" alt="">
          </a>
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
      heading: response.acf.banner_title,
      text: response.acf.banner_text,
    },
    aboutBlocks: response.acf.home_block_repeater.map(function (props) {
      return {
        title: props.block_title,
        content: props.block_content,
        image: {
          url: props.block_image.url,
          text: props.block_image.alt,
        }
      }
    })
  }
};

module.exports = {
  layout: 'default',
  page,
  data: async () => {
    const { data: banner } = await axios.get(`${process.env.API_URL}/pages/8`);

    return {
      ...transformData(banner),
    };
  },
  head: ({ path, config }) => [
    ['title', {}, `Contact | ${config.name}`],
  ],
};