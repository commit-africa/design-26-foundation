const html = require('html-template-tag');
const { format } = require('date-fns');

const page = ({ route }) => html`
  <main>
    <div class="container article-container">
      <article class="article-body">
        <header class="article-header">
          <time class="article-meta" itemprop="datePublished" datetime="${route.data.post.date}">${format(new Date(route.data.post.date), 'dd MMMM yyyy')}</time>
          <h2 class="single-article-header" itemprop="name headline">${route.data.post.title.rendered}</h2>
        </header>
        $${route.data.post.content.rendered}
      </article>
    </div>
  </main>
`;

module.exports = {
  page,
};