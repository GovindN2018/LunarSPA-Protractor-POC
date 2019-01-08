exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['Playback1.js'],
  
  allScriptsTimeout: 30000,
	
  capabilities: {
	    'browserName': 'chrome',
	    'chromeOptions': {
	      args: ['--disable-browser-side-navigation'] 
	    }   
	}
};