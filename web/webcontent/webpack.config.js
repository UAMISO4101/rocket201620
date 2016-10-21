var localDevConfig = require('./webpack-base.config');
localDevConfig.entry = {
    'freeven.app': './app/app'
};
localDevConfig.devtool = 'source-map';
module.exports = localDevConfig;
