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
}

var donate = new Vue({
  el: '#donate-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    aboutBlocks: [
      {
        title: '',
        content: '',
        buttonText: '',
        buttonUrl: '',
        image: {
          url: '',
          text: '',
        }
      }
    ],
  },
});

axios.get(ENDPOINTS.donate).then(function (res) {
  var data = transformData(res.data);

  donate.banner = data.banner;
  donate.aboutBlocks = data.aboutBlocks;
});