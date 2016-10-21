var webpack = require('webpack');
var baseConfig = require('../../webpack-base.config');
module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            '../node_modules/jquery/dist/jquery.js',
            '../app/vendors.js',
            '../app/**/*Module.js',
            '../app/**/*Service.js',
            '../app/**/*Controller.js',
            '../app/**/*Spec.js',
            '../app/**/*Directive.js',
            '../app/**/*Component.js'
        ],
        urlRoot: '/',
        autoWatch: true,
        //Continuous Integration mode
        singleRun: true,
        colors: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],
        preprocessors: {
            '../app/vendors.js': ['webpack', 'sourcemap'],
            '../app/**/*Module.js': ['webpack', 'sourcemap', 'coverage'],
            '../app/**/*Service.js': ['webpack', 'sourcemap', 'coverage'],
            '../app/**/*Controller.js': ['webpack', 'sourcemap', 'coverage'],
            '../app/**/*Directive.js': ['webpack', 'sourcemap', 'coverage'],
            '../app/**/*Component.js': ['webpack', 'sourcemap', 'coverage']

        },
        webpack: {
            // Just do inline source maps instead of the default
            devtool: 'inline-source-map',
            module: {
                loaders: baseConfig.module.loaders,
            }
        },
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputFile: './unit/reports/unit.xml',
            suite: 'unit'
        },
        coverageReporter: {
            dir: './unit/reports/coverage',
            type: 'lcov', //produces a html document after code is run
            reporters: [
                {type: 'html'},
                {type: 'text'},
                {type: 'lcov'}
            ],
            watermarks: {
                statements: [50, 90],
                functions: [50, 90],
                branches: [50, 90],
                lines: [50, 90]
            }
        },
        proxies: {
            '/RunCloud/app/': 'http://localhost:9876//jquery/'
        }
    });
};
