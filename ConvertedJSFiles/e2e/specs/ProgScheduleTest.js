"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("../pages/HomePage");
const ProgrammePage_1 = require("../pages/ProgrammePage");
const SearchPage_1 = require("../pages/SearchPage");
const ProgPage_1 = require("../pages/ProgPage");
const GuidePage_1 = require("../pages/GuidePage");
describe('angularjs homepage todo list', function () {
    const homepage = new HomePage_1.HomePage();
    const programmePage = new ProgrammePage_1.ProgrammePage();
    const searchPage = new SearchPage_1.SearchPage();
    const progPage = new ProgPage_1.ProgPage();
    const guidePage = new GuidePage_1.GuidePage();
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.ignoreSynchronisation = true;
        protractor_1.browser.get('https://www.bbc.co.uk');
    });
    it('should get EastEnders next episode schedule via search option', () => __awaiter(this, void 0, void 0, function* () {
        const episodeName = 'EastEnders';
        yield homepage.searchFor(episodeName);
        yield searchPage.selectFirstSuggestion();
        yield searchPage.selectProgramByName(episodeName);
        var episodeDetails = yield progPage.getEpisodeDetails();
        yield console.log('Next ' + episodeName + ' on: ' + episodeDetails);
        expect(episodeDetails).not.toBe('');
        expect(episodeDetails).toContain('BBC ONE');
    }));
    it('should get EastEnders next episode schedule via TV option', () => __awaiter(this, void 0, void 0, function* () {
        const channelName = 'BBC One';
        const episodeName = 'EastEnders';
        var schedule;
        yield homepage.selectOptionAs("TV");
        yield programmePage.selectTvGuideOption();
        do {
            var isTelecasted = yield guidePage.isEpisodeTelecastedToday(channelName, episodeName);
            if (isTelecasted)
                break;
            yield guidePage.selectNextDay(episodeName);
        } while (!isTelecasted);
        schedule = yield guidePage.getScheduleDetails(episodeName);
        console.log('Next "' + episodeName + '" episode telecasted on "' + channelName + '" @ ' + schedule[0] + ' on ' + schedule[1]);
        expect(schedule).not.toBe('');
    }));
    it('should get EastEnders next episode schedule via iPlayer option', () => __awaiter(this, void 0, void 0, function* () {
        const channelName = 'BBC One';
        const episodeName = 'EastEnders';
        var schedule;
        yield homepage.selectOptionAs("iPlayer");
        yield programmePage.selectTvGuideOption();
        do {
            var isTelecasted = yield guidePage.isEpisodeTelecastedToday(channelName, episodeName);
            if (isTelecasted)
                break;
            yield guidePage.selectNextDay(episodeName);
        } while (!isTelecasted);
        schedule = yield guidePage.getScheduleDetails(episodeName);
        console.log('Next "' + episodeName + '" episode telecasted on "' + channelName + '" @ ' + schedule[0] + ' on ' + schedule[1]);
        expect(schedule).not.toBe('');
    }));
});
//# sourceMappingURL=ProgScheduleTest.js.map