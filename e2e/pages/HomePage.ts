import { browser} from "protractor";
import { BasePage } from "./BasePage";
import { config } from "../../config";

export class HomePage extends BasePage{
    constructor() {
        super();
    }

    public async selectOptionAs(value:string):Promise<void> {
        switch(value){
            case "TV":
                await this.tvOptionLocator.click();
                break;
            case "iPlayer": 
                await this.iPlayerOptionLocator.click();
                break;
            case "Search":
                await this.searchLocator.click();
                break;
            default:
                throw new Error("Unknown option on home page: "+value);
        }
    }

    public async searchFor(value:string):Promise<void> {
        await this.searchLocator.click();
        await this.searchLocator.sendKeys(value);
        await browser.sleep(5000);
    }

    public async openHomePage():Promise<void>{
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronisation = true;
        await browser.get(config.baseUrl);
    }
}