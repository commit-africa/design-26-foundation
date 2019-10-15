const axios = require('axios');

const transformBlogTitleToUrl = ({ id, title: { rendered: title } }) => `${id}-${title.toLowerCase().split(' ').join('-')}`;

module.exports = async () => {
  const { data: blogPosts } = await axios.get(`${process.env.API_URL}/posts`);

  return blogPosts.map(post => ({
    path: `/blog/${transformBlogTitleToUrl(post)}`,
    data: {
      post,
    },
  }));
}