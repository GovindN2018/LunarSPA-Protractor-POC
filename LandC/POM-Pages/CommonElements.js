//common elements reused on multiple pages

var CommonElements = function() {	

	    var lnkRegister = element(by.cssContainingText('.header_auth-nav.auth-nav', 'Register')); // no custom id
	    
	    var lnkLogin = element(by.cssContainingText('.header_auth-nav.auth-nav', 'Login')); // no custom id
	    
	    var btnContinue = element(by.name('continue')); // $$("button[data-id='continue-button']")
	    
	    var lnkSaveProgress = element(by.cssContainingText('.block-link', ' Save progress ')); // no custom id    
	    
	    var btnLiveChat = element(by.cssContainingText('.button.button--tertiary', 'LiveChat'));
	    
	    var lnkRequestCallback = element(by.cssContainingText('.font-small.text-periwinkle-purple', 'request a callback')); // no custom id
	    
	    var lnkTNC = element(by.cssContainingText('.footer__link', 'Terms & Conditions')); // no custom id
	    
	    var lnkPrivPolicy = element(by.cssContainingText('.footer__link', 'Privacy Policy')); // no custom id

		this.clickRegister = function() {
			lnkRegister.click();				// click 'Register' link in header section
		};
		
		this.clickLogin = function() {
			lnkLogin.click();					// click 'Login' link in header section
		};
		
		this.clickContinue = function() {
			btnContinue.click();				// click 'Continue' button on the page
		};
		
		this.clickSaveProgress = function() {
			lnkSaveProgress.click();			// click 'Save progress' link on the page
		};
		
		this.clickLiveChat = function() {
			btnLiveChat.click();				// click 'LiveChat' button on the page
		};
		
		this.clickRequestCallback = function() {
			lnkRequestCallback.click();			// click 'request a callback' link on the page
		};		
		
		this.clickTNC = function() {
			lnkTNC.click();						// click 'Terms & Conditions' link on the page
		};		
		
		this.clickPrivPolicy = function() {
			lnkPrivPolicy.click();				// click 'Privacy Policy' link on the page
		};
		
};

module.exports = new CommonElements();