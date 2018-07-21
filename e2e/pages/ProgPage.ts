import { element, by, ElementFinder,} from "protractor";
import { BasePage } from "./BasePage";

export class ProgPage extends BasePage{

    public episodeDetails:ElementFinder;

    constructor(){
        super();
    }

    public async getEpisodeDetails(): Promise<string> {
        this.episodeDetails = await element.all(by.css('.media__details.br-box-secondary[data-eq-state="actions-nowrap"]')).last();
        return await this.episodeDetails.getText();
    }
}