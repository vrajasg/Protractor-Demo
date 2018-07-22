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
const BasePage_1 = require("./BasePage");
class GuidePage extends BasePage_1.BasePage {
    constructor() {
        super();
        this.currentDay = protractor_1.element(protractor_1.by.xpath('//a[@class="day-nav__link is-active"]'));
        this.nextDay = protractor_1.element(protractor_1.by.xpath('//a[@class="day-nav__link is-active"]/../following-sibling::*[1]'));
    }
    isEpisodeTelecastedToday(channelName, episodeName) {
        return __awaiter(this, void 0, void 0, function* () {
            var isEpisodeFound = false;
            var channelLoc = this.getChannelLocator(channelName);
            var buildEpisodeLocator = channelLoc + '//h2[.="' + episodeName + '"]';
            yield protractor_1.element(protractor_1.by.xpath(buildEpisodeLocator)).isPresent().then(function (value) {
                if (value)
                    isEpisodeFound = true;
            });
            return isEpisodeFound;
        });
    }
    selectNextDay(epName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nextDay.click();
        });
    }
    getFullScheduleDetails(episodeName) {
        return __awaiter(this, void 0, void 0, function* () {
            var list = Array(2);
            list[0] = yield this.getEpisodeTime(episodeName);
            list[1] = yield this.getEpisodeDay(episodeName);
            return list;
        });
    }
    getChannelLocator(channelName) {
        var locator = '//ul[@id="name"]';
        switch (channelName) {
            case "BBC One":
                return locator.replace('name', 'bbc_one_london-schedule');
            default:
                throw new Error("Unknown channel name: " + channelName);
        }
        return locator;
    }
    getEpisodeTime(episodeName) {
        return __awaiter(this, void 0, void 0, function* () {
            var epTime;
            var loc = '//h2[.="name"]/following-sibling::*[1]';
            loc = loc.replace('name', episodeName);
            yield protractor_1.element(protractor_1.by.xpath(loc)).getText().then(function (time) {
                epTime = time;
            });
            return epTime;
        });
    }
    getEpisodeDay(episodeName) {
        return __awaiter(this, void 0, void 0, function* () {
            var epDay;
            yield this.currentDay.getText().then(function (day) {
                epDay = day;
            });
            return epDay.replace('\n', ' ');
        });
    }
}
exports.GuidePage = GuidePage;
//# sourceMappingURL=GuidePage.js.map