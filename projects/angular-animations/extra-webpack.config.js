const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_animations': '@angular/animations',
  };
  custom.externals.push(
    /^@angular\/(?!animations$).*/,
  );
  return custom;
};
