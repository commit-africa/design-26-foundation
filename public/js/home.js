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
}

var home = new Vue({
  el: '#home-app',
  data: {
    banner: {
      left: {
        image: {
          url: '',
          text: '',
        },
        heading: '',
        text: '',
        buttonText: '',
        buttonUrl: '',
      },
      right: {
        image: {
          url: '',
          text: '',
        },
        heading: '',
        text: '',
        buttonText: '',
        buttonUrl: '',
      },
    },
    aboutBlocks: [],
  },
});

axios.get(ENDPOINTS.home).then(function (res) {
  var banner = transformData(res.data);

  home.banner.left = banner.banner.left;
  home.banner.right = banner.banner.right;
  home.aboutBlocks = banner.banner.aboutBlocks;
});