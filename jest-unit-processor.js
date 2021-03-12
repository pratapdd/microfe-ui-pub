const junitReporter = require('jest-junit');
const htmlReporter = require('jest-html-reporter');

module.exports = function() {
  junitReporter.apply(this, arguments);
  return htmlReporter.apply(this, arguments);
};
