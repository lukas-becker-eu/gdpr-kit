const mix = require('laravel-mix');

mix
  .js('src/assets/js/gdpr-kit.js', 'assets/js')
  .sass('src/assets/scss/gdpr-kit.scss', 'assets/css')
  //.copy('src/gdpr-kit.html', '/')
  //.minify('src')
  //.browserSync({
  //  proxy: 'public',
  //  ui: false,
  //  open: false
  //})
  .setPublicPath('assets')
  .disableSuccessNotifications();
