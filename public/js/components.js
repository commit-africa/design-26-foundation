Vue.component('banner', {
  template: `
    <article>
      <figure class="split-image">
        <img :src="data.image.url" :alt="data.image.text" />
      </figure>
      <div class="cta" :class="{ 'dark-cta': dark }">
        <h2>{{ data.heading }}</h2>
        <p>{{ data.text }}</p>
        <a class="button button-pink" :href="link">{{ data.buttonText }}</a>
      </div>
    </article>
  `,
  props: {
    data: {
      type: Object,
      required: true,
    },
    dark: {
      type: Boolean,
    },
    link: {
      type: String,
      required: true,
    }
  },
});

Vue.component('stats', {
  template: `
    <section class="funding-info">
      <article>
        <div class="funding-info-block watch-video">
          <img :src="data.image.url" :alt="data.image.text">
        </div>
        <div class="funding-info-block stats">
          <h4>{{ data.header }}</h4>
          <p>We've trained <span class="stats-actual">{{ data.number }}</span> young girls and can help many more.</p>
          <a class="button" :href="data.buttonUrl">{{ data.buttonText }}</a>
        </div>
      </article>
    </section>
  `,
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
});