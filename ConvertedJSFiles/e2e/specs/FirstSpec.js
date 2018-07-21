"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    var tvOptionLocator = protractor_1.element(protractor_1.by.xpath('//div[@id="orb-nav-links"]//li[.="TV"]'));
    var tvGuideLocator = protractor_1.element(protractor_1.by.xpath('//a[@href="/iplayer/guide"][contains(text(),"TV Guide")]'));
    var iPlayerOptionLocator = protractor_1.element(protractor_1.by.xpath('//div[@id="orb-nav-links"]//li[.="iPlayer"]'));
    var channelLocator = protractor_1.element(protractor_1.by.id('bbc_one_london-schedule'));
    var searchLocator = '';
    var searchText = 'EastEnder';
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://www.bbc.co.uk');
    });
    it('should get EastEnders next episode time via TV option', function () {
        tvOptionLocator.click();
        tvGuideLocator.click();
        var locator = '//ul[@id="bbc_one_london-schedule"]//h2[@class="schedule__title"]';
        protractor_1.element.all(protractor_1.by.xpath(locator)).getText().then(function (titles) {
            for (var i = 0, size = titles.length; i < size; i++) {
                var title = titles[i];
                if (title == 'Joins BBC News')
                    console.log('---: ' + title);
            }
        });
        // expect(element(by.css('.elementClass')).isPresent()).toBe(false);
    });
    it('should get EastEnders next episode time via iPlayer option', function () {
        iPlayerOptionLocator.click();
        tvGuideLocator.click();
        //expect(latestResult.getText()).toEqual('3');
    });
    function isEpisodeTelecastedToday(episodeName) {
    }
});
