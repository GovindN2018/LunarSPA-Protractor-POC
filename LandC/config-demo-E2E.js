exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['LunarSiUeReNd-CAT.js'],
  
  allScriptsTimeout: 30000,
	
  capabilities: {
	    'browserName': 'chrome',
	    'chromeOptions': {
	      args: ['--disable-browser-side-navigation'] 
	    }   
	}
	
/*  capabilities: {
	  browserName: 'chrome',
	  chromeOptions: {
	  args:["--headless", "--disable-gpu", "window-size=1920, 1080", "--disable-browser-side-navigation"]
	  }
	  }	*/
};