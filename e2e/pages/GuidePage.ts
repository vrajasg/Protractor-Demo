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
        var schedultTitlesLocator = 'locator//h2[@class="schedule__title"]';
        schedultTitlesLocator = schedultTitlesLocator.replace('locator',channelLoc);

        await element.all(by.xpath(schedultTitlesLocator)).getText().then(function(titles) {
            for(var i = 0, size = titles.length; i < size ; i++){
              var title = titles[i];
              if(title == episodeName){
                  isEpisodeFound = true;
                  break;
            }
           };
        });
       return isEpisodeFound;
    }

    public async selectNextDay(epName:string):Promise<void>{
         await this.nextDay.click();
    }

    public async getScheduleDetails(episodeName:string):Promise<string[]>{
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
        var loc = '//h2[.="name"]/following-sibling::*[1]';
        loc = loc.replace('name',episodeName);
    
        await this.currentDay.getText().then(function(day){
            epDay=day;
        });   
          
        return epDay.replace('\n',' ');
    }
}