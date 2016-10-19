const _ = require('underscore');

const DEFAULTS = {
  before: '',
  after: ''
};

module.exports = ({file: {buffer, path}, options}) => {
  const {before, after} = _.extend({}, DEFAULTS, options);
  return {buffer: new Buffer(`${before}${path}${after}\n${buffer}`)};
};
