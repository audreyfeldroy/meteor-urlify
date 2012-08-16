Package.describe({
  summary: "Django's URLify.js file, repackaged for Meteor."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.add_files('lib/urlify.js', where);
});
