const html = require('html-template-tag');
const { Header } = require('../components/Header');
const { Footer } = require('../components/Footer');

module.exports = ({ title, content, head }) => html`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/public/css/main.css">
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-Bold.woff" crossorigin>
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-Bold.woff2" crossorigin>
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-italic.woff" crossorigin>
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-italic.woff2" crossorigin>
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-Regular.woff" crossorigin>
    <link rel="preload" as="font" type="font/woff2" href="/public/assets/fonts/Montserrat-Regular.woff2" crossorigin>
    $${head}
    $${title ? html`<title>${title}</title>` : ''}
  </head>
  <body>
    <div id="home-app" class="site-wrapper">
      $${Header()}
      $${content}
      $${Footer()}
    </div>
  </body>
  </html>
`;