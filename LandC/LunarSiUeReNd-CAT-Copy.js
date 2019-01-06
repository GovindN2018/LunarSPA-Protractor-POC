describe('L and C test', function() {
  it('L and C home page should open', function() {
	  
	//Step 1 - mortgage choices 
	  
	//var expectedUrl = "https://onlinecat.landc.co.uk/mortgage-choices";  
    browser.get('https://onlinecat.landc.co.uk/mortgage-choices');
    browser.driver.manage().window().maximize();
    
    //check url of the current page
    //expect(browser.getCurrentUrl()).toEqual("expectedUrl");
    
    
    //Step 2 - Pre-questions
    element(by.cssContainingText('.button.button--large.margin-bottom-sm.margin-left-sm--bp-sm', 'Residential Remortgage')).click();
    
    //select the page level options
    element(by.cssContainingText('.radio-input__label', 'Remortgaging')).click(); // buying or remortgaging?

    element(by.cssContainingText('.radio-input__label', 'Living there')).click(); // live in or let it out?   
    
    element(by.cssContainingText('.radio-input__label', 'Unlock cash from a mortgage free property')).click();
    
    element(by.name('continue')).click();
    
    
    //Step 3 - existing mortgage
    element(by.name('continue')).click();
    
    
    //Step 4 - mortgage needs
    element.all(by.name('control')).get(0).sendKeys(250000); //borrowing amount
    element.all(by.name('control')).get(1).sendKeys(650000); //property value
    element.all(by.name('control')).get(2).sendKeys(20); //mortage term in years
    
    element(by.cssContainingText('.radio-input__label', 'Repayment')).click(); //mortgage type
    
    element(by.cssContainingText('.check-input_label', 'Fixed')).click(); //payment type
    
    element(by.cssContainingText('.check-input_label', '2')).click(); //mortgage deal
    element(by.cssContainingText('.check-input_label', '5')).click(); //mortgage deal
    element(by.cssContainingText('.check-input_label', '5+')).click(); //mortgage deal
    
    element(by.cssContainingText('.radio-input__label', 'No')).click(); //Early Repayment Charge
    
    element(by.name('continue')).click();
    
    
    //Step 5 - you-and-your-property
    element(by.cssContainingText('.radio-input__label', 'Just me')).click(); //single applicant
    
    element.all(by.name('control')).get(0).sendKeys(99999); //applicant's income
    
    element.all(by.name('control')).get(1).sendKeys(1985); //applicant's birth year
    
    element.all(by.name('control')).get(2).sendKeys(750); // applicant's credit card balance total
    
    element.all(by.name('control')).get(3).sendKeys(1100); // applicant's credit commitments
    
    element.all(by.name('control')).get(4).sendKeys(500); // applicant's financial commitments
    
    element(by.cssContainingText('.radio-input__label', 'House')).click(); // type of property
    
    element(by.cssContainingText('.radio-input__label', 'England')).click(); // Where’s the property?

    element(by.cssContainingText('.radio-input__label', 'Freehold')).click(); // How do you own the property?
    
    element(by.name('continue')).click();

    
    //step 6 - Playback 1
    element(by.partialButtonText('Let’s move on')).click(); //PB1 continue
    
    
    //step 7 - About you & your property
    element(by.cssContainingText('.continue-journey.button', ' Continue')).click(); //continue-journey button
    
    
    //step 8 - name-and-contact
    element.all(by.css('.dropdown_selected')).get(0).click(); // applicant's title
    element.all(by.css('.dropdown_option')).get(4).click(); // applicant's title - Dr

    
    element.all(by.name('control')).get(0).sendKeys('GovindProtractorTest'); //applicant's First name
    
    element.all(by.name('control')).get(1).sendKeys('ArthurUE'); //applicant's Middle name
    		
    element.all(by.name('control')).get(2).sendKeys('SmithUE'); //applicant's Last name
    
    element.all(by.css('.dropdown_selected')).get(1).click(); // applicant's marital status
    element.all(by.css('.dropdown_option')).get(5).click(); // applicant's marital status - Civil Partnership   
    
    element.all(by.name('control')).get(3).sendKeys('Solar-CAT@outlook.com'); //applicant's email address
	
    element.all(by.name('control')).get(4).sendKeys('07470302121'); //applicant's mobile phone number    
    
    element(by.name('continue')).click(); //All done? Let's continue
    
    
    //step 9 - about-you
    element.all(by.name('control')).get(0).sendKeys('02/02/1985'); //applicant's DOB
    
    let list = element.all(by.css('.radio-input li'));
    
    list.get(0).click(); // applicant's nationality - UK
    
    list.get(3).click(); // applicant's residency - UK - Yes

    list.get(5).click(); // Is this the property you’re remortgaging? - Yes
    
    list.get(8).click(); // Have you lived outside the UK in the last three years? - No

    element.all(by.css('.predictive-input')).get(0).click(); 
    element(by.cssContainingText('.predictive-input_option', 'United Kingdom')).click(); // Your nationality - UK
    
    //browser.sleep(3000);
    
    element(by.name('continue')).click(); //All done? Let's continue
      
    //step 10 - your-family
    element(by.name('control')).sendKeys(0); // How many children or dependants do you have?

    element(by.name('continue')).click(); //All done? Let's continue
    
    
    //Step 11 - About the property - Page 1
    let propertyList = element.all(by.css('.radio-input li'));
    
    propertyList.get(0).click(); // Are you remortgaging the property you currently live in? - Yes
    
    element(by.cssContainingText('.radio-input__label', 'Own this property')).click(); // What is your status at your current address?
    
    element.all(by.name('control')).get(0).sendKeys('01/01/2010'); // When did you buy the property?
    
    element.all(by.name('control')).get(1).sendKeys('15/01/2010'); // When did you move into this property?
    
    propertyList.get(12).click(); //Was this property ever owned by the local authority? - No
    
    element(by.cssContainingText('.radio-input__label', 'Semi-Detached')).click(); // What type of property is it? - Semi-Detached
    
    element.all(by.name('control')).get(2).sendKeys('1999'); // When was it built?
    
    propertyList.get(20).click(); //Will over 60% of the property be used for commercial purposes? - No
   
    element(by.partialButtonText('Almost there')).click(); //Almost there. Let's continue
    
    
    //Step 12 - About the property - Page 2
    
    element.all(by.name('control')).get(0).sendKeys('2'); //How many floors does it have? - 2
    
    element(by.cssContainingText('.radio-input__label', 'Brick')).click(); // What are the walls made of? - Brick
    
    element(by.cssContainingText('.radio-input__label', 'Slate')).click(); // What is the roof made of? - Slate
    
    element(by.cssContainingText('.check-input_label', 'None ')).click(); // Does the property have any of the following non-standard features? - None
    
    element.all(by.name('control')).get(1).sendKeys('25'); // How long do you expect to live in the property? - 25 
   
    element(by.partialButtonText('see where you stand')).click(); //Right. Let's see where you stand
    
    //Step 13 - PB2 + Eligibility
    //element(by.cssContainingText('.continue-journey.button', ' Continue')).click(); //continue-journey button
    element(by.partialButtonText('Continue')).click(); //continue-journey button
    
    
    //Step 14 - Affordability / Income
    
    let jobDetailsList = element.all(by.css('.radio-input li'));
    
    jobDetailsList.get(0).click(); // Do you have a job? - Yes
    
    element(by.cssContainingText('.radio-input__label', 'Employed')).click(); //What's your employment type? - Employed
   
    jobDetailsList.get(6).click(); //Do you think your job is safe and secure? - Yes
    
    element.all(by.css('.predictive-input')).get(0).click(); 
    element(by.cssContainingText('.predictive-input_option', ' Computer Programmer/Analyst ')).click(); //What's your job title?
    
    element.all(by.name('control')).get(0).sendKeys('99999'); //What's your basic annual salary?

    element.all(by.name('control')).get(1).sendKeys('01/01/2015'); //So when did you start working for this employer?
    
    element(by.cssContainingText('.radio-input__label', 'Permanent')).click(); //What type of contract do you have with them?
    
    element.all(by.name('control')).get(2).sendKeys('ABC Inc'); //What's the name of your employer? 
    
    element(by.cssContainingText('.button.button--secondary', 'Save Record')).click(); //Save Record button click
    
    jobDetailsList.get(13).click(); //Do you have another job? - No
    
    element(by.name('continue')).click();
    
    //Step 15 - Affordability / More Income
    element(by.cssContainingText('.radio-input__label', 'No')).click(); //Do you have any other income you want to tell us about?
    
    element(by.name('control')).sendKeys(65); //What age do you plan to retire? - 65
    
    element(by.name('continue')).click();
    
    //Step 16 - Affordability / outgoings-credit-issues
    
    element(by.name('no')).click(); //Have you taken a payday loan in the last 12 months or had any credit issues in the last six years?
    
    element(by.cssContainingText('.check-input_label', 'I confirm I have no other credit issues ')).click(); //Confirmation checkbox
    
    element(by.partialButtonText('Another one done.')).click(); //Another one done. Let's keep going
    
    //Step 16 - Affordability / outgoings-other-property
    element(by.name('no')).click(); //Let us know whether you own any other properties
    
    element(by.partialButtonText('Happy with those answers?')).click(); //Happy with those answers? Okay, next...
    
    
    //Step 17 - Affordability / outgoings-other-borrowing
    element(by.name('no')).click(); //Do you have any other borrowing?
    
    element(by.name('continue')).click();
    
    
    //Step 18 - Affordability / outgoings-financial-commitment
    element(by.name('no')).click(); //Do you have any regular financial commitments?
    
    element(by.name('continue')).click();
    
    
    //Step 19 - Affordability / outgoings-monthly-cost
    element.all(by.name('control')).get(0).sendKeys('550');  // Tell us about your monthly food, groceries, toiletries & housekeeping
    
    element.all(by.name('control')).get(1).sendKeys('120');  // Tell us about your monthly gas, electric & other heating
    
    element.all(by.name('control')).get(2).sendKeys('40');  // Tell us about your monthly water
    
    element.all(by.name('control')).get(3).sendKeys('50');  // Tell us about your monthly telephone & mobile phone
    
    element.all(by.name('control')).get(4).sendKeys('222');  // Tell us about your monthly council tax
    
    element.all(by.name('control')).get(5).sendKeys('45');  // Tell us about your monthly building & contents insurance
    
    element.all(by.name('control')).get(6).sendKeys('350');  // Travel + car + MOT
    
    element.all(by.name('control')).get(7).sendKeys('400');  //TV, internet, basic recreation, gym memberships, holidays etc
    
    element(by.name('continue')).click();
  
    //Step 20 - product-playback/affordability
    //element(by.cssContainingText('.continue-journey.button', 'Continue')).click(); //continue-journey button
    element(by.partialButtonText('Continue')).click(); //continue-journey button    
    
    //Step 21 - Your finances
    element.all(by.name('control')).get(0).sendKeys('7654');  //What's the total monthly take home pay for your household?
    
    element.all(by.name('control')).get(1).sendKeys('12345');  //How much do you have in savings that you can easily get at?
    
    element.all(by.css('.predictive-input')).get(0).click(); 
    element(by.cssContainingText('.predictive-input_option', ' Halifax PLC ')).click(); //Who do you bank with?
    
    element(by.cssContainingText('.radio-input__label', 'No')).click(); //Do you know about any changes to your situation that will reduce your income in the future?
    
    element(by.name('continue')).click();
    
    //Step 22 - suitability/repaying
    let repaymentList = element.all(by.css('.radio-input li'));
    
    repaymentList.get(0).click(); // Are you planning to make overpayments within the deal period? - I don't expect to overpay
    
    repaymentList.get(3).click(); // Are you looking to repay your mortgage from income or assets in a currency other than sterling? - No 
    
    element(by.name('continue')).click();
    
    //Step 23 - suitability/finally
    let additionalInfoList = element.all(by.css('.text-area-input'));
    additionalInfoList.get(0).sendKeys('Autotest - No particular reason'); // You mentioned earlier that you'd prefer a 2, 5 or 5+ year Fixed rate. Why is that?
    
    element(by.cssContainingText('.radio-input__label', 'No')).click(); //If the best mortgage deal has an arrangement fee would you like to add this to your mortgage? - No
    
    additionalInfoList.get(1).sendKeys('Autotest - Nothing else'); // And finally (hoorah!), is there any other information you think we should know about?
    
    element(by.cssContainingText('.check-input_label', 'Email')).click(); //How to keep in touch - Email
    element(by.cssContainingText('.check-input_label', 'Phone')).click(); //How to keep in touch - Phone
    element(by.cssContainingText('.check-input_label', 'Post')).click(); //How to keep in touch - Post 
    
    element(by.partialButtonText('Complete and send')).click(); // Complete and send
    browser.sleep(20000);  
    
    //Step 24 - Contact send-to-adviser
    element(by.partialButtonText('call me ASAP')).click(); // Send my enquiry and call me ASAP
    
    //Step 25 - Send-to-adviser-thank-you
    
    element(by.css('.enquiry-card__title h3')).getText().then(function (text) {
		//expect(requiredFieldErrorMsg == text);
    	console.log("*********** : " + text);
	});
    // We have received your enquiry and one of our experienced advisers will be in touch on
   
   
    
    browser.sleep(30000);    
    
    
  });
});