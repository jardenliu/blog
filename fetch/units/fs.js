const fs = require('fs');
const mkdirp = require('mkdirp');
const { dirname } = require('path');

export const writeFileSync = (path, content) => {
  mkdirp.sync(dirname(path))
  fs.writeFileSync(path, content)
}
