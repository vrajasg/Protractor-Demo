"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this.tvOptionLocator = protractor_1.element(protractor_1.by.linkText('TV'));
        this.iPlayerOptionLocator = protractor_1.element(protractor_1.by.linkText('iPlayer'));
        this.searchLocator = protractor_1.element.all(protractor_1.by.name('q')).first();
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map