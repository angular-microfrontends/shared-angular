const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_animations_browser': '@angular/animations/browser',
  };
  custom.externals.push(
    /^@angular\/(?!animations\/browser).*/,
  );
  return custom;
};
