const html = require('html-template-tag');
const axios = require('axios');
const { FundingInfo } = require('../../components/FundingInfo')

const BlogPost = ({ title, content, image, id }) => html`
  <article class="blog-image">
    <figure>
      <img data-src="${image.url}" alt="${image.text}">
    </figure>
    <div class="blog-meta">
      <h2>${title}</h2>
      <p class="excerpt">
        $${content}
      </p>
      <a href="/blog/${transformBlogTitleToUrl({ id, title })}" class="blog-page-link">Read the story</a>
    </div>
  </article>
`;

const page = async ({ data: { banner, blogPosts } }) => html`
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
    <section class="four-column-grid blog-landing">
      ${blogPosts.map(post => BlogPost(post))}
    </section>
    $${await FundingInfo()}
  </main>
`;

const transformBlogTitleToUrl = ({ id, title }) => `${id}-${title.toLowerCase().split(' ').join('-')}`;

const transformData = (response)  => ({
  banner: {
    image: {
      url: response.acf.banner_image.url,
      text: response.acf.banner_image.alt,
    },
    heading: response.acf.banner_header,
    text: response.acf.banner_content,
  },
});

const transformPostsArray = (response) => response.map((props) => ({
  id: props.id,
  title: props.title.rendered,
  content: props.excerpt.rendered,
  image: {
    url: props.acf.image.url,
    text: props.acf.image.text,
  }
}));

module.exports = {
  layout: 'default',
  page,
  data: async () => {
    const { data } = await axios.get(`${process.env.API_URL}/pages/14`);
    const { data: blogPosts } = await axios.get(`${process.env.API_URL}/posts`);

    return {
      ...transformData(data),
      blogPosts: transformPostsArray(blogPosts),
    };
  },
  head: ({ config }) => [
    ['title', {}, `Blog | ${config.name}`],
  ],
};