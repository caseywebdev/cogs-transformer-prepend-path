const helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.txt': helper.getFileBuffer('test/output.txt')
  }
});
