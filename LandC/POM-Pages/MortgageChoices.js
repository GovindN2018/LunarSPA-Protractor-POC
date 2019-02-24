//Step 1 - https://landclunartest.azurewebsites.net/mortgage-choices

var MortgageChoices = function() {
	
	var btnResiPurchase = element.all(by.cssContainingText('.button.button--large.margin-bottom-sm', 'Residential Purchase')); // $$("a[data-uuid='e8efaa85-42e8-4d44-9508-6f89c17b4512']")
    
    var btnResiRemort = element.all(by.cssContainingText('.button.button--large.margin-bottom-sm.margin-left-sm--bp-sm', 'Residential Remortgage')); // $$("a[data-uuid='f07fbf8c-7dc2-427f-8706-cced4755bb0f']")
    
    var btnBTLPurchase = element.all(by.cssContainingText('.button.button--large.margin-bottom-sm', 'Buy to Let Purchase')); // $$("a[data-uuid='b7615b6d-d499-47ef-8c64-bff199c12a95']")
    
    var btnBTLRemort = element.all(by.cssContainingText('.button.button--large.margin-bottom-sm.margin-left-sm--bp-sm', 'Buy to Let Remortgage')); // $$("a[data-uuid='8e478536-61af-4364-8952-4b8e1c10820f']")
    		
	this.clickResiPurchase = function() {
		btnResiPurchase.get(0).click();		// click btnResiPurchase button in top cluster
		btnResiPurchase.get(1).click();		// click btnResiPurchase button in bottom cluster		
	};		
	
	this.clickResiRemort = function() {
		btnResiRemort.get(0).click();		// click btnResiPurchase button in top cluster
		btnResiRemort.get(1).click();		// click btnResiPurchase button in bottom cluster				
	};
	
	this.clickBTLPurchase = function() {
		btnBTLPurchase.get(0).click();		// click btnBTLPurchase button in top cluster
		btnBTLPurchase.get(1).click();		// click btnBTLPurchase button in bottom cluster				
	};
	
	this.clickBTLRemort = function() {
		btnBTLRemort.get(0).click();		// click btnBTLRemort button in top cluster
		btnBTLRemort.get(1).click();		// click btnBTLRemort button in bottom cluster				
	};
};

module.exports = new MortgageChoices();