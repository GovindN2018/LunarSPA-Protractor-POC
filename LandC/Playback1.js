
describe('L and C Protractor Tests', function() {	
	
	var expectedPageUrl = "";
	var residentialMortgageButton = "";
	var continueButton = "";
	
	var borrowingAmountTextbox = "";
	var propertyValueTextbox = "";
	var mortgageTenureTextbox = "";
	var repaymentMethodList = "";
	var mortgageTypeList = "";
	var mortgageSchemeLengthList = "";
	var ercOptionList = "";
	var requiredFieldErrorMsg = "This is required";
	var amountOutOfBoundErrorMsg = "Please enter a value between £0 - £10m"; // value > 1000000
	var mortgageTenureOutOfBoundErrorMsg = "Please enter a value less than or equal to 40"; // value > 40
  
	//Step 1 - mortgage choices 
	browser.driver.manage().window().maximize();

	    beforeEach(function() {

	    });
  		
  		//https://onlinecat.landc.co.uk/mortgage-choices
  		it('should load home page successfully', function(){
  			browser.get('https://onlinecat.landc.co.uk/mortgage-choices');
  			expect(browser.getTitle()).toEqual('London & Country');
  		});
  		
  		
  		it('should render all controls on home page successfully', function(){
  			residentialMortgageButton = element(by.cssContainingText('.button.button--large.margin-bottom-sm.margin-left-sm--bp-sm', 'Residential Remortgage'));
  			expect(residentialMortgageButton.isPresent()).toBe(true);
  			
  			var residentialPurchaseButton = element(by.cssContainingText('.button.button--large.margin-bottom-sm', 'Residential Purchase'));
  			expect(residentialPurchaseButton.isPresent()).toBe(true);
  		});

  		
  		//https://onlinecat.landc.co.uk/pre-questions
  		it('should redirect user to pre-questions page and load that page successfully', function(){
  			residentialMortgageButton.click();
  			expectedPageUrl = "https://onlinecat.landc.co.uk/pre-questions";
  			expect(browser.getCurrentUrl()).toEqual(expectedPageUrl);
  		});
  		
  		
  		it('should render all essential controls on pre-questions page successfully', function(){
  			var remortgagingButton = element(by.cssContainingText('.radio-input__label', 'Remortgaging'));
  			expect(remortgagingButton.isPresent()).toBe(true);
  			
  			var livingThereButton = element(by.cssContainingText('.radio-input__label', 'Living there'));
  			expect(livingThereButton.isPresent()).toBe(true);
  			
  			var remortgagingReasonList = element.all(by.name('Q004_why_remo'));
  			expect(remortgagingReasonList.isPresent()).toBe(true);
  			expect(remortgagingReasonList.count()).toBe(6);
  			
  			continueButton = element(by.name('continue'));
  			expect(continueButton.isPresent()).toBe(true);
  		});
  		
  		
  		it('should fill the form and redirect user to existing-mortgage page', function(){
  			element(by.cssContainingText('.radio-input__label', 'Unlock cash from a mortgage free property')).click(); // Why remortgaging? - Unencumbered
  			continueButton.click();
  		});
  		
  		
  		//https://onlinecat.landc.co.uk/resi-remortgage/enquiry/existing-mortgage
  		it('should load existing-mortgage page successfully', function(){
  			expectedPageUrl = "https://onlinecat.landc.co.uk/resi-remortgage/enquiry/existing-mortgage";
  			expect(browser.getCurrentUrl()).toEqual(expectedPageUrl);
  		});
  		
  		
  		it('should render all controls on existing-mortgage page successfully', function(){
  			continueButton = element(by.name('continue'));
  			expect(continueButton.isPresent()).toBe(true);
  		});
  		
  		
  		it('should fill the form and redirect user to mortgage-needs page', function(){
  			continueButton.click();
  		});
  		
  		
  		//https://onlinecat.landc.co.uk/resi-remortgage/enquiry/mortgage-needs
  		it('should load mortgage-needs page successfully', function(){
  			expectedPageUrl = "https://onlinecat.landc.co.uk/resi-remortgage/enquiry/mortgage-needs";
  			expect(browser.getCurrentUrl()).toEqual(expectedPageUrl);
  		});
  		
  		
  		it('should render all controls on mortgage-needs page successfully', function(){
  			
  			borrowingAmountTextbox = element.all(by.name('control')).get(0);
  			expect(borrowingAmountTextbox.isPresent()).toBe(true);
  			
  			propertyValueTextbox = element.all(by.name('control')).get(1);
  			expect(propertyValueTextbox.isPresent()).toBe(true);
  			
  			mortgageTenureTextbox = element.all(by.name('control')).get(2);
  			expect(mortgageTenureTextbox.isPresent()).toBe(true);
  			
  			repaymentMethodList = element.all(by.name('Q030_desired_mortgage_repayment_method'));
  			expect(repaymentMethodList.isPresent()).toBe(true);
  			expect(repaymentMethodList.count()).toBe(3);
  			
  			mortgageTypeList = element.all(by.name('Q032_mortgage_types'));
  			expect(mortgageTypeList.isPresent()).toBe(true);
  			expect(mortgageTypeList.count()).toBe(2);
  			
  			mortgageSchemeLengthList = element.all(by.name('Q033_mortgage_scheme_lengths'));
  			expect(mortgageSchemeLengthList.isPresent()).toBe(true);
  			expect(mortgageSchemeLengthList.count()).toBe(4);
  			
  			ercOptionList = element.all(by.name('Q034_include_products_with_erc'));
  			expect(ercOptionList.isPresent()).toBe(true);
  			expect(ercOptionList.count()).toBe(2);
  			
  			continueButton = element(by.name('continue'));
  			expect(continueButton.isPresent()).toBe(true);
  			
  			
  		});
  		
  		
  		it('should show warning messages when mandatory values are not entered on mortgage-needs page', function(){
  			continueButton.click(); //all mandatory fields should display error messages on the page
  			
  			//check if the error messages are present on the page
  			var borrowingAmountErrorMsg = element.all(by.css('.question__validation-message p')).get(0);
  			expect(borrowingAmountErrorMsg.isPresent()).toBe(true);
  			
  			var propertyValueErrorMsg = element.all(by.css('.question__validation-message p')).get(1);
  			expect(propertyValueErrorMsg.isPresent()).toBe(true);
  			
  			var mortgageTenureErrorMsg = element.all(by.css('.question__validation-message p')).get(2);
  			expect(mortgageTenureErrorMsg.isPresent()).toBe(true);
  			
  			var repaymentMethodErrorMsg = element.all(by.css('.question__validation-message p')).get(3);
  			expect(repaymentMethodErrorMsg.isPresent()).toBe(true);
  			
  		
  			//check if the error messages are correct
  			borrowingAmountErrorMsg.getText().then(function (text) {
  				expect(requiredFieldErrorMsg == text);
  			});
  			
  			propertyValueErrorMsg.getText().then(function (text) {
  				expect(requiredFieldErrorMsg == text);
  			});
  			
  			mortgageTenureErrorMsg.getText().then(function (text) {
  				expect(requiredFieldErrorMsg == text);
  			});
  		
  			repaymentMethodErrorMsg.getText().then(function (text) {
  				expect(requiredFieldErrorMsg == text);
  			});
  			  			
  		});
  		
  		
  		it('should show warning messages when invalid data is entered on mortgage-needs page', function(){

  			//check if correct error messages are shown on the page
  			borrowingAmountTextbox.sendKeys(10000001);
  			
  			propertyValueTextbox.sendKeys(10000001);
  			
  			mortgageTenureTextbox.sendKeys(41);
  			
  			element(by.cssContainingText('.radio-input__label', 'Repayment')).click();
  			
  			element.all(by.css('.question__validation-message p')).get(0).getText().then(function (text) {
  				expect(amountOutOfBoundErrorMsg == text);
  			});
		
  			element.all(by.css('.question__validation-message p')).get(1).getText().then(function (text) {
  				expect(amountOutOfBoundErrorMsg == text);
  			});
  			
  			element.all(by.css('.question__validation-message p')).get(2).getText().then(function (text) {
  				expect(mortgageTenureOutOfBoundErrorMsg == text);
  			});
  			
  	  		browser.sleep(5000); 
  		});
  		

});
    

