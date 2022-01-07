import agilitySync from "@agility/constent-sync";
import sampleSyncConsoleInterface from "./store-interface-console";
const syncClient = agilitySync.getSyncClient({
  //your 'guid' from Agility CMS
  guid: "aada79b7-u",
  //your 'apiKey' from Agility CMS
  apiKey:
    "defaultpreview.cfcc34b03b698a18c2daaea945b850d9a91a2085341e26ae804c451aa60b5f66",
  //the language(s) of content you want to source
  languages: ["en-us"],
  //your channel(s) for the pages you want to source
  channels: ["website"],
  //your custom storage/access interface
  store: {
    //must be the interface used to store and access content
    interface: sampleSyncConsoleInterface,
    //any options/config that you want to pass along to your interface as an argument 'options'
    options: {},
  },
});
//start the sync process
syncClient.runSync();
