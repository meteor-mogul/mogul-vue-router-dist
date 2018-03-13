Package.describe({
  name: 'meteormogul:vue-router-dist',
  version: '3.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple packaging of Vue Router for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-mogul/mogul-vue-router-dist.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('vue-router.js');
  api.export("VueRouter");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteormogul:vue-router-dist');
  api.mainModule('vue-router-dist-tests.js');
});
