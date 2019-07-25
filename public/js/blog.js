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

var blog = new Vue({
  el: '#blog-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    blogPosts: []
  },
});

axios.get(ENDPOINTS.blog).then(function (res) {
  var data = transformData(res.data);
  blog.banner = data.banner;

  axios.get(POSTS_ENDPOINT).then(function (res) {
    const data = transformPostsArray(res.data);

    blog.blogPosts = data;
  });
});