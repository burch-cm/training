

   	// livechat by www.mylivechat.com/  2018-06-12

   	


	   MyLiveChat.Version =3015;
	   MyLiveChat.FirstRequestTimeout =28800;
	   MyLiveChat.NextRequestTimeout =57600;
	   MyLiveChat.SyncType ="VISIT";
	   MyLiveChat.SyncStatus ="READY";
	   MyLiveChat.SyncUserName ="Guest_f73f6d67";
	   MyLiveChat.SyncResult =null;
	   MyLiveChat.HasReadyAgents =false;
	   MyLiveChat.SourceUrl ="https://www.thedablab.com/concentrate-bubbler-dab-bubblers/";
	   MyLiveChat.AgentTimeZone = parseInt("-6" || "-5");
	   MyLiveChat.VisitorStatus ="VISIT";
	   MyLiveChat.UrlBase ="https://c1.mylivechat.com/livechat2/";
	   MyLiveChat.SiteUrl ="https://c1.mylivechat.com/";

   	

	   if (!MyLiveChat.AgentId) MyLiveChat.AgentId = MyLiveChat.RawAgentId;

	   MyLiveChat.Departments = [];

	   MyLiveChat.Departments.push({
		   Name:"Default",
		   Agents: [{
			   Id:'User:1',
			   Name:"Jay",
			   Online:false
   			}],
		   Online:false
   		});



	   MyLiveChat.VisitorUrls = [];



   	


	   MyLiveChat.VisitorLocation ="US|United States|MD|Maryland|Taneytown";
	   MyLiveChat.LastLoadTime = new Date().getTime();
	   MyLiveChat.VisitorDuration =66;
	   MyLiveChat.VisitorEntryUrl ="https://www.thedablab.com/concentrate-bubbler-dab-bubblers/";
	   MyLiveChat.VisitorReferUrl ="https://duckduckgo.com/";

	   MyLiveChat.VisitorUrls = [];



   	
	   MyLiveChat.VisitorUrls.push("https://www.thedablab.com/concentrate-bubbler-dab-bubblers/");
   	

	   MyLiveChat_Initialize();

	   if (MyLiveChat.localStorage || MyLiveChat.userDataBehavior) {
		   MyLiveChat_SyncToCPR();
	   }

   	