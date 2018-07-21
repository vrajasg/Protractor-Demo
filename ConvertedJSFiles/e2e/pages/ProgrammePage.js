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
class ProgrammePage extends BasePage_1.BasePage {
    constructor() {
        super();
        this.tvGuideLocator = protractor_1.element(protractor_1.by.linkText('TV Guide'));
    }
    selectTvGuideOption() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tvGuideLocator.click();
        });
    }
}
exports.ProgrammePage = ProgrammePage;
//# sourceMappingURL=ProgrammePage.js.map