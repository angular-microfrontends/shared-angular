const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'single-spa-angular': 'single-spa-angular',
  };
  custom.externals.push(
    /^@angular\/.*/,
    'tslib',
  );
  return custom;
};
