"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("./BasePage");
class ProgramPage extends BasePage_1.BasePage {
    constructor() {
        super();
        this.tvGuideLocator = protractor_1.element(protractor_1.by.linkText('TV Guide'));
    }
    selectTvGuideOption() {
        this.tvGuideLocator.click();
    }
}
exports.ProgramPage = ProgramPage;
//# sourceMappingURL=ProgramPage.js.map