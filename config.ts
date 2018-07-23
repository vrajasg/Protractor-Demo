import { ProtractorBrowser, Config } from 'protractor';

export let config: Config = {
  // directConnect:true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['./e2e/specs/ProgScheduleTest.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
   let globals = require('protractor');
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}