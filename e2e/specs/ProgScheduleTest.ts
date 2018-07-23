import { browser} from "protractor";
import {HomePage}  from "../pages/HomePage";
import {ProgrammePage}  from "../pages/ProgrammePage";
import { SearchPage } from "../pages/SearchPage";
import { ProgPage } from "../pages/ProgPage";
import { GuidePage } from "../pages/GuidePage";

describe('angularjs homepage todo list', function () {

  const homepage:HomePage = new HomePage();
  const programmePage:ProgrammePage = new ProgrammePage();
  const searchPage:SearchPage = new SearchPage();
  const progPage:ProgPage = new ProgPage();
  const guidePage:GuidePage = new GuidePage();

  beforeEach( async() =>{
    await homepage.openHomePage();
  });


  it('should get EastEnders next episode schedule via search option', async() =>{
    const episodeName:string = 'EastEnders';
    await homepage.searchFor(episodeName);
    await searchPage.selectFirstSuggestion();
    await searchPage.selectProgramByName(episodeName);    
    var episodeDetails = await progPage.getEpisodeDetails();
    await console.log('Next '+episodeName+' on: '+episodeDetails);
   
    expect(episodeDetails).not.toBe('');
    expect(episodeDetails).toContain('BBC ONE');
  });


  it('should get EastEnders next episode schedule via TV option', async() =>{
    const channelName:string = 'BBC One';
    const episodeName:string = 'EastEnders';
    var schedule:string[];
  
    await homepage.selectOptionAs("TV");
    await programmePage.selectTvGuideOption();
 
    do{
      var isTelecasted: boolean = await guidePage.isEpisodeTelecastedToday(channelName,episodeName);
      if(isTelecasted)
       break;
      await guidePage.selectNextDay(episodeName);  
    } while(!isTelecasted);
   
    schedule = await guidePage.getFullScheduleDetails(episodeName);
    console.log('Next "'+episodeName+'" episode telecasted on "'+channelName+ '" @ '+schedule[0]+' on '+schedule[1]);
  
    expect(schedule).not.toBe('');
  });


  it('should get EastEnders next episode schedule via iPlayer option', async() =>{
    const channelName:string = 'BBC One';
    const episodeName:string = 'EastEnders';
    var schedule:string[];

    await homepage.selectOptionAs("iPlayer");
    await programmePage.selectTvGuideOption();
  
    do{
      var isTelecasted: boolean = await guidePage.isEpisodeTelecastedToday(channelName,episodeName);
      if(isTelecasted)
         break;
      await guidePage.selectNextDay(episodeName);  
     } while(!isTelecasted);
    
     schedule = await guidePage.getFullScheduleDetails(episodeName);
     console.log('Next "'+episodeName+'" episode telecasted on "'+channelName+ '" @ '+schedule[0]+' on '+schedule[1]);
   
     expect(schedule).not.toBe('');
  });
});