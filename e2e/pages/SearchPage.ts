import { browser, element, by, ElementFinder} from "protractor";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage{

    public firstSuggestion:ElementFinder;

    constructor() {
        super();
        this.firstSuggestion=element(by.id('suggestion-0'));
    }

    public async selectFirstSuggestion():Promise<void>{
        await this.firstSuggestion.click();
    }

    public async selectProgramByName(value:string):Promise<void>{
        const locatorFormat:string  = '//h1[.="text"]';
        var headerLocator = locatorFormat.replace('text',value);
        await browser.driver.findElement(by.xpath(headerLocator)).click();
    }
}