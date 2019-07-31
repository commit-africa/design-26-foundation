const html = require('html-template-tag');
const axios = require('axios');
const { Header } = require('../../components/Header');

const BlogPost = ({ title, content, buttonUrl, image, id }) => html`
  <article class="blog-image">
    <figure>
      <img src="${image.url}" alt="${image.text}">
    </figure>
    <div class="blog-meta">
      <h2>${title}</h2>
      <p class="excerpt">
        $${content}
      </p>
      <a href="${'/post?id=' + id}" class="blog-page-link">Read the story</a>
    </div>
  </article>
`;

const page = ({ banner, blogPosts }) => html`
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
    <section class="four-column-grid blog-landing">
      ${blogPosts.map(post => BlogPost(post))}
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
`;

function transformData (response) {
  return {
    banner: {
      image: {
        url: response.acf.banner_image.url,
        text: response.acf.banner_image.alt,
      },
      heading: response.acf.banner_header,
      text: response.acf.banner_content,
    },
  }
}

function transformPostsArray (response) {
  return response.map(function (props) {
    return {
      id: props.id,
      title: props.title.rendered,
      content: props.excerpt.rendered,
      image: {
        url: props.acf.image.url,
        text: props.acf.image.text,
      }
    }
  })
}

module.exports = {
  layout: 'default',
  page,
  data: async () => {
    const { data } = await axios.get('http://design26foundation.org.za.www32.cpt1.host-h.net/wp-json/wp/v2/pages/14');
    const { data: blogPosts } = await axios.get('http://design26foundation.org.za.www32.cpt1.host-h.net/wp-json/wp/v2/posts'); 

    return {
      ...transformData(data),
      blogPosts: transformPostsArray(blogPosts),
    };
  },
  head: ({ config }) => [
    ['title', {}, `Blog | ${config.name}`],
  ],
};