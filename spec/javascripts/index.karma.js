const context = require.context('.', true, /.+\.spec\.karma\.js$/);

context.keys().forEach(context);

module.exports = context;
