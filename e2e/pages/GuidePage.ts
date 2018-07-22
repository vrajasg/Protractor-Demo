import { element, by, ElementFinder } from "protractor";
import { BasePage } from "./BasePage";

export class GuidePage  extends BasePage {
    public currentDay:ElementFinder;
    public nextDay:ElementFinder;

    constructor(){
        super();
        this.currentDay=element(by.xpath('//a[@class="day-nav__link is-active"]'));
        this.nextDay=element(by.xpath('//a[@class="day-nav__link is-active"]/../following-sibling::*[1]'));
    }

    public async isEpisodeTelecastedToday(channelName:string,episodeName:string):Promise<boolean>{
        var isEpisodeFound = false;
        var channelLoc = this.getChannelLocator(channelName);
        var buildEpisodeLocator = channelLoc + '//h2[.="'+episodeName+'"]';

        await element(by.xpath(buildEpisodeLocator)).isPresent().then(function(value){
          if(value)
            isEpisodeFound = true;
        });
       return isEpisodeFound;
    }

    public async selectNextDay(epName:string):Promise<void>{
         await this.nextDay.click();
    }

    public async getFullScheduleDetails(episodeName:string):Promise<string[]>{
        var list=Array(2);
        list[0] = await this.getEpisodeTime(episodeName);
        list[1] = await this.getEpisodeDay(episodeName);
        return list;
    }

    private getChannelLocator(channelName:String):string{
         var locator = '//ul[@id="name"]';
         switch(channelName){
             case "BBC One":
                return locator.replace('name','bbc_one_london-schedule');
             default:
                throw new Error("Unknown channel name: "+channelName);
         }   
        return locator;
    }

    public async getEpisodeTime(episodeName:string):Promise<string>{
        var epTime;
        var loc = '//h2[.="name"]/following-sibling::*[1]';
        loc = loc.replace('name',episodeName);
    
        await element(by.xpath(loc)).getText().then(function(time){
            epTime=time;
        });     
        return epTime;
    }

    public async getEpisodeDay(episodeName:string):Promise<string>{
        var epDay;
        
        await this.currentDay.getText().then(function(day){ 
            epDay=day;
        });    
        return epDay.replace('\n',' ');
    }
}