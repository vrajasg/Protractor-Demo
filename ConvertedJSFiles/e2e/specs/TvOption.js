"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("../pages/HomePage");
const ProgramPage_1 = require("../pages/ProgramPage");
describe('angularjs homepage todo list', function () {
    const homepage = new HomePage_1.HomePage();
    const programPage = new ProgramPage_1.ProgramPage();
    var channelLocator = protractor_1.element(protractor_1.by.id('bbc_one_london-schedule'));
    var searchLocator = '';
    var searchText = 'EastEnder';
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://www.bbc.co.uk');
    });
    it('should get EastEnders next episode schedule via TV option', function () {
        homepage.tvOptionLocator.click();
        programPage.tvGuideLocator.click();
    });
    it('should get EastEnders next episode schedule via iPlayer option', function () {
        homepage.iPlayerOptionLocator.click();
        programPage.tvGuideLocator.click();
    });
});
//# sourceMappingURL=TvOption.js.map