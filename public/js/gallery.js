var gallery = new Vue({
  el: '#gallery-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    images: [],
  },
});