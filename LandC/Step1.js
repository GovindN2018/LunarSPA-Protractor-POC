describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
	  
	  //Step 1 - mortgage choices 
	  //browser.driver.manage().window().maximize();
	  
	  browser.get('https://onlinecat.landc.co.uk/mortgage-choices');
	  element(by.cssContainingText('.button.button--large.margin-bottom-sm.margin-left-sm--bp-sm', 'Residential Remortgage')).click();
	 
	 
	  browser.sleep(2000);  
    
    

//    var todoList = element.all(by.repeater('todo in todoList.todos'));
//    expect(todoList.count()).toEqual(3);
//    expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//    // You wrote your first test, cross it off the list
//    todoList.get(2).element(by.css('input')).click();
//    var completedAmount = element.all(by.css('.done-true'));
//    expect(completedAmount.count()).toEqual(2);
  });
});