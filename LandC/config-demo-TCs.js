exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['Playback1.js'],
  
  allScriptsTimeout: 30000,
	
  capabilities: {
	    'browserName': 'chrome',
	    'chromeOptions': {
	      args: ['--disable-browser-side-navigation'] 
	    }   
	}

//multiCapabilities: [{
//    browserName: 'firefox'
//  }, {
//    browserName: 'chrome'
//  }]
	
};

