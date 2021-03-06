﻿// Testacular configuration


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'Scripts/tests/e2e/**/*.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: dots || progress
reporters = ['progress'];


proxies = {
    '/': 'http://localhost:63922/'
};


// cli runner port
runnerPort = 9101;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['PhantomJS'];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;