'use strict';

var projectDir = './';

module.exports = {

  // browserPort: 3000,
  // UIPort: 3001,

  nodeDir: './node_modules/',
  cleanFiles: projectDir + '/svg/*.svg',

  svg: {
    spriteSrc: projectDir + '/svg-src/**/*.svg',
    minDir: projectDir + '/svg-min',
    spriteDest: projectDir + '/svg',
    src: projectDir + '/svg-src/**/*.svg',
    dest: projectDir + '/svg'
  }
};
