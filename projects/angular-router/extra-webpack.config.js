const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_router': '@angular/router',
  };
  custom.externals.push(
    /^@angular\/(?!router).*/,
    'rxjs',
    'rxjs/operators',
  );
  return custom;
};
