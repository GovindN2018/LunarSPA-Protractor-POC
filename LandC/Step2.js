	//Step 2 - Pre-questions
	  
	  //check url of the current page
	  var expectedUrl = "https://onlinecat.landc.co.uk/pre-questions";
	  expect(browser.getCurrentUrl()).toEqual(expectedUrl);	  
	  console.log(expectedUrl + " : Url loaded successfully");
	  
	  //select the page level options
	  element(by.cssContainingText('.radio-input__label', 'Remortgaging')).click(); // buying or remortgaging?
	  element(by.cssContainingText('.radio-input__label', 'Living there')).click(); // live in or let it out?
	  element(by.cssContainingText('.radio-input__label', 'Pay off my mortgage faster')).click(); // Why remortgaging?
	  //element(by.name('continue')).click(); // Continue 
	  
	  browser.sleep(2000);  