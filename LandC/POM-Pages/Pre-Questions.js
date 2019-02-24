//Step 2 - https://landclunartest.azurewebsites.net/pre-questions

var PreQuestions = function() {
	
		//Are you buying a property or remortgaging one?
		var rbBuying = element(by.cssContainingText('.radio-input__label', 'Buying')); // no custom id
		var rbRemortgaging = element(by.cssContainingText('.radio-input__label', 'Remortgaging')); // no custom id
		
		this.clickrbBuying = function() {
			rbBuying.click();
		};
		
		this.clickrbRemortgaging = function() {
			rbRemortgaging.click();
		};

	    //Do you live in the property or let it out?
		var rbLivingThere = element(by.cssContainingText('.radio-input__label', 'Living there')); // no custom id
	    var rbLetout = element(by.cssContainingText('.radio-input__label', 'Letting it out')); // no custom id
	    
		this.clickLivingThere = function() {
			rbLivingThere.click();
		};
		
		this.clickLetout = function() {
			rbLetout.click();
		};
	    
	    //Why are you thinking about remortgaging?
	    var rbFreeUpSomeCash = element(by.cssContainingText('.radio-input__label', 'Free up some cash')); // no custom id
	    var rbPayOffMortgageFaster = element(by.cssContainingText('.radio-input__label', 'Pay off my mortgage faster')); // no custom id
	    var rbCutMonthlyCosts = element(by.cssContainingText('.radio-input__label', 'Cut my monthly costs')); // no custom id
	    var rbUpdateOwnershipDetails = element(by.cssContainingText('.radio-input__label', 'Update my ownership details')); // no custom id
	    var rbUnencumbered = element(by.cssContainingText('.radio-input__label', 'Unlock cash from a mortgage free property')); // no custom id
	    var rbSomethingElse = element(by.cssContainingText('.radio-input__label', 'Something else')); // no custom id
	    
	    var taMRSomethingElse = element(by.tagName('textarea')).element(by.css('.text-area-input')); // no custom id

		this.clickFreeUpSomeCash = function() {
			rbFreeUpSomeCash.click();
		};
		
		this.clickPayOffMortgageFaster = function() {
			rbPayOffMortgageFaster.click();
		};
		
		this.clickCutMonthlyCosts = function() {
			rbCutMonthlyCosts.click();
		};
		
		this.clickUpdateOwnershipDetails = function() {
			rbUpdateOwnershipDetails.click();
		};
		
		this.clickUnencumbered = function() {
			rbUnencumbered.click();
		};
		
		this.clickSomethingElse = function() {
			rbSomethingElse.click();
		};
		
		this.sendkeysSomethingElse = function() {
			taMRSomethingElse.sendKeys("XXX");
		};
		
};

module.exports = new PreQuestions();