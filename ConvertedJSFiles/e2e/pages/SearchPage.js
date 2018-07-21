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
class SearchPage extends BasePage_1.BasePage {
    constructor() {
        super();
        this.firstSuggestion = protractor_1.element(protractor_1.by.id('suggestion-0'));
    }
    selectFirstSuggestion() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstSuggestion.click();
        });
    }
    selectProgramByName(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const locatorFormat = '//h1[.="text"]';
            var headerLocator = locatorFormat.replace('text', value);
            yield protractor_1.browser.driver.findElement(protractor_1.by.xpath(headerLocator)).click();
        });
    }
}
exports.SearchPage = SearchPage;
//# sourceMappingURL=SearchPage.js.map