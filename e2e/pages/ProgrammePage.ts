import {element, by, ElementFinder } from "protractor";
import { BasePage } from "./BasePage";

export class ProgrammePage extends BasePage{
    public tvGuideLocator:ElementFinder;

    constructor(){
        super();
        this.tvGuideLocator=element(by.linkText('TV Guide'));
    }

    public async selectTvGuideOption():Promise<void>{
        await this.tvGuideLocator.click();
    }
}