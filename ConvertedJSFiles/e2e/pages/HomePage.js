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
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super();
    }
    selectOptionAs(value) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (value) {
                case "TV":
                    yield this.tvOptionLocator.click();
                    break;
                case "iPlayer":
                    yield this.iPlayerOptionLocator.click();
                    break;
                case "Search":
                    yield this.searchLocator.click();
                    break;
                default:
                    throw new Error("Unknown option on home page: " + value);
            }
        });
    }
    searchFor(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchLocator.click();
            yield this.searchLocator.sendKeys(value);
            yield protractor_1.browser.sleep(5000);
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map