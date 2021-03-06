module.exports = {
	port: process.env.PORT || 54321,
	cacheExpiration: 2 * 60 * 60 * 1000, //2h
	parserTimeout: 10 * 1000, //10s
	restaurants: [
	{ id: 1, name: 'U Daňováka', zomatoId: '16507932', url: 'http://www.udanovaka.sk/obedove-menu/', module: 'danovak' },
	{ id: 2, name: 'Giuliano', url: 'http://www.giuliano.sk/-denne-menu', module: 'giuliano' },
	{ id: 3, name: 'ITB', url: 'http://www.citycantina.sk/prevadzka/1', module: 'itb' },
	{ id: 4, name: 'Alfa', zomatoId: '16507678', url: 'http://restauracie.sme.sk/restauracia/restauracia-alfa_2512-petrzalka_664/denne-menu', module: 'alfa' },
	{ id: 5, name: 'Škôlka', url: 'http://jedalen.vysnivany.sk/ukazka-strany', module: 'skolka' },
	{ id: 6, name: 'Pizza Pazza', url: 'http://pizzapazza.sk/?page_id=645', module: 'pizzapazza', post: 'prevadzka2=1' },
	{ id: 7, name: 'Kamenica - Corleone Pizza', zomatoId: '16510390', url: 'http://www.pizzacorleone.sk/obedove-menu.html', module: 'kamenica' },
	{ id: 8, name: 'Numero Uno', url: 'http://www.numerouno.sk/denne-menu/', module: 'numerouno' },
	{ id: 9, name: 'Engerau restaurant', zomatoId: '16507706', url: 'https://www.zomato.com/sk/bratislava/engerau-restaurant-petr%C5%BEalka-bratislava-v/denn%C3%A9-menu', module: 'engerau' },
	{ id: 10, name: 'Lokálka', url: 'http://www.lokalka.sk/kopcianska-2/', module: 'lokalka' }
	],
	themes: {
		'jano': { name: 'Jano', template: '../views/index.html' },
		'matus': { name: 'Matúš', template: '../views/index3.html' },
		'iveta': { name: 'Iveta', template: '../views/index4.html' },
		'diana': { name: 'Diana', template: '../views/index6.html' },
		'telka': { name: 'Telka', template: '../views/index5.html' }
	}
};
