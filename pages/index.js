const html = require('html-template-tag');
const axios = require('axios');

const Banner = ({ image, heading, text, link, buttonText }) => html`
  <article>
    <figure class="split-image">
      <img src="${image.url}" alt="${image.text}" />
    </figure>
    <div class="cta">
      <h2>${heading}</h2>
      <p>${text}</p>
      <a class="button button-pink" href="${link}">${buttonText}</a>
    </div>
  </article>
`;

const page = ({ banner }) => html`
  <div id="home-app" class="site-wrapper">
    <header class="top-header" id="js-header">
      <div class="header-elements">
        <a class="logo" href="/">
          <img src="/assets/img/design26foundation-logo.jpg" alt="Design 26 Foundation">
        </a>
        <nav id="nav-primary" class="navigation">
          <ul>
            <li class="nav-primary-item">
              <a class="nav-primary-link current" href="/">Home</a>
            </li>
            <li class="nav-primary-item"><a class="nav-primary-link" href="/about">About</a></li>
            <li class="nav-primary-item"><a class="nav-primary-link" href="/blog">Blog</a></li>
          </ul>
          <a href="/donate" class="button button-small">Donate</a>
        </nav>
      </div>
    </header>
    <main>
      <section class="center-split">
        $${Banner(banner.left)}
        $${Banner(banner.right)}
      </section>
      <section v-for="({ title, content, image }, i) in aboutBlocks" :key="i" class="two-column-grid about-info">
        <template v-if="(i % 2)">
          <article class="about-text">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
          </article>
          <figure class="about-image">
            <img :src="image.url" :alt="image.text">
          </figure>
        </template>
        <template v-else>
          <figure class="about-image">
            <img :src="image.url" :alt="image.text">
          </figure>
          <article class="about-text">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
          </article>
        </template>
      </section>
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
    <footer class="main-footer">
      <div class="footer-content">
        <h2 class="tagline">Dream it possible</h2>
        <div class="social-links">
          <a href="https://www.instagram.com/design26foundation/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.32" height="26.32" viewBox="0 0 26.32 26.32"><title>Instagram</title><g id="b9a2a3ad-6e12-404b-a4fb-01e168b14ef6" data-name="Layer 2"><g id="a14df635-e08b-4ae0-bfd1-5d9b6b1ea63c" data-name="Layer 1"><path d="M13.16,2.37c3.51,0,3.93,0,5.32.08a7.32,7.32,0,0,1,2.44.45,3.93,3.93,0,0,1,1.51,1,4.05,4.05,0,0,1,1,1.51,7.32,7.32,0,0,1,.45,2.44c.07,1.39.08,1.81.08,5.32s0,3.93-.08,5.32a7.32,7.32,0,0,1-.45,2.44,4.43,4.43,0,0,1-2.5,2.5,7.32,7.32,0,0,1-2.44.45c-1.39.07-1.81.08-5.32.08s-3.93,0-5.32-.08a7.32,7.32,0,0,1-2.44-.45,4.05,4.05,0,0,1-1.51-1,3.93,3.93,0,0,1-1-1.51,7.32,7.32,0,0,1-.45-2.44c-.07-1.39-.08-1.81-.08-5.32s0-3.93.08-5.32A7.32,7.32,0,0,1,2.9,5.4a3.93,3.93,0,0,1,1-1.51,3.93,3.93,0,0,1,1.51-1,7.32,7.32,0,0,1,2.44-.45c1.39-.07,1.81-.08,5.32-.08m0-2.37c-3.57,0-4,0-5.43.08A9.69,9.69,0,0,0,4.54.69,6.47,6.47,0,0,0,2.21,2.21,6.47,6.47,0,0,0,.69,4.54,9.69,9.69,0,0,0,.08,7.73C0,9.14,0,9.59,0,13.16s0,4,.08,5.43a9.69,9.69,0,0,0,.61,3.19,6.47,6.47,0,0,0,1.52,2.33,6.47,6.47,0,0,0,2.33,1.52,9.69,9.69,0,0,0,3.19.61c1.41.06,1.86.08,5.43.08s4,0,5.43-.08a9.69,9.69,0,0,0,3.19-.61,6.76,6.76,0,0,0,3.85-3.85,9.69,9.69,0,0,0,.61-3.19c.06-1.41.08-1.86.08-5.43s0-4-.08-5.43a9.69,9.69,0,0,0-.61-3.19,6.47,6.47,0,0,0-1.52-2.33A6.47,6.47,0,0,0,21.78.69,9.69,9.69,0,0,0,18.59.08C17.18,0,16.73,0,13.16,0Zm0,6.4a6.76,6.76,0,1,0,6.76,6.76A6.76,6.76,0,0,0,13.16,6.4Zm0,11.15a4.39,4.39,0,1,1,4.39-4.39A4.4,4.4,0,0,1,13.16,17.55Zm8.6-11.41a1.58,1.58,0,1,1-1.58-1.58A1.57,1.57,0,0,1,21.76,6.14Z" fill="#ffffff"></path></g></g></svg>
          </a>
          <a href="https://www.facebook.com/design26foundation/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26"><title>facebook</title><g id="aeebe14b-046f-469f-970b-2eceb285c245" data-name="Layer 2"><g id="b3800fba-98bd-4aab-b220-8040c537d38e" data-name="Layer 1"><path d="M9,0A5,5,0,0,0,4,5V8H0v4H4V26H8V12h4.5l1-4H8V5A1,1,0,0,1,9,4h5V0Z" fill="#ffffff"></path></g></g></svg>
          </a>
          <a href="" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26"><title>linkedin</title><g id="a716b574-6364-47a0-9af3-186af00b0296" data-name="Layer 2"><g id="ac1316b6-e547-4244-a3b8-8b66ef04901f" data-name="Layer 1"><path d="M10,8h5.53v2.84h.08A6.15,6.15,0,0,1,21.08,8C26.92,8,28,11.64,28,16.37V26H22.23V17.46c0-2,0-4.66-3-4.66S15.77,15,15.77,17.31V26H10ZM0,8H6V26H0ZM6,3A3,3,0,1,1,3,0,3,3,0,0,1,6,3Z" fill="#ffffff"></path></g></g></svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
  <script src="/public/js/constants.js"></script>
  <script src="/public/js/components.js"></script>
  <script src="/public/js/home.js"></script>
`;

function transformData (response) {
  return {
    banner: {
      left: {
        image: {
          url: response.acf.banner_image_left.url,
          text: response.acf.banner_image_left.alt,
        },
        image: response.acf.banner_image_left,
        heading: response.acf.banner_heading_left,
        text: response.acf.banner_text_left,
        buttonText: response.acf.button_text_text_left,
        buttonUrl: response.acf.button_text_link_left,
      },
      right: {
        image: {
          url: response.acf.banner_image_right.url,
          text: response.acf.banner_image_right.alt,
        },
        heading: response.acf.banner_heading_right,
        text: response.acf.banner_text_right,
        buttonText: response.acf.button_text_text_right,
        buttonUrl: response.acf.button_text_link_right,
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
  title: 'Design26',
  page,
  data: async () => {
    const { data: banners } = await axios.get('http://design26foundation.org.za.www32.cpt1.host-h.net/wp-json/wp/v2/pages/6');

    return {
      ...transformData(banners),
    };
  },
};