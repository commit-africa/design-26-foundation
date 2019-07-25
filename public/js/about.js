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
}

var about = new Vue({
  el: '#about-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    aboutBlocks: [],
  },
});

axios.get(ENDPOINTS.about).then(function (res) {
  var data = transformData(res.data);

  about.banner = data.banner;
  about.aboutBlocks = data.aboutBlocks;
})