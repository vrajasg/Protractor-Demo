import { browser, element, by, ElementFinder } from "protractor";

export class BasePage {
    
    public tvOptionLocator:ElementFinder;
    public iPlayerOptionLocator:ElementFinder;
    public searchLocator:ElementFinder;

    constructor() {
        this.tvOptionLocator= element(by.linkText('TV'));
        this.iPlayerOptionLocator=element(by.linkText('iPlayer'));
        this.searchLocator=element.all(by.name('q')).first();
    }
}