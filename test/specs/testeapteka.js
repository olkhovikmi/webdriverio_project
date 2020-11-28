describe('Первое задание', function () {
	before('Зайти на сайт', function () {
		browser.url('https://webdriver.io');
	});
	afterEach('Возврат на главную страницу', function () {
		browser.url('https://webdriver.io');
	});
	it('Кликнуть на кнопку, Вывести title,link', function () {
		const btnApi = $("//li//a[contains(., 'API')]")
		title = $(".postHeaderTitle")
		link = $("//a[.='JSON Wire Protocol']");
		btnApi.click();
		console.log(title.getText());
		console.log(link.getAttribute("href"));
		browser.pause(1000);		
	});
	it('Вывести в console текущий url', function () {
		let currentUrl = browser.getUrl();
		console.log(currentUrl);
	});
	it('Напечатать текст внутри поиска, Добавить текст в строке поиска', function() {
		const search = $('#search_input_react');
		search.setValue('test is');
		browser.pause(2000);
		search.addValue(' DONE!');				
	})
});
