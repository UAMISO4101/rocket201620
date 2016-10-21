var productionConfig = require('./webpack-base.config');
var path = require('path');

productionConfig.entry = {
    'freeven.app': './app/app'
};
productionConfig.output.publicPath = 'https://freeven.s3.amazonaws.com/static/production/';
productionConfig.output.path = 'dist/production';

module.exports = productionConfig;
