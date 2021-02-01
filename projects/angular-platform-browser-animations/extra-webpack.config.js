const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_platform-browser_animations': '@angular/platform-browser/animations',
  };
  custom.externals.push(
    /^@angular\/(?!platform-browser\/animations).*/,
  );
  return custom;
};
