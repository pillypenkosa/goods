// 2025





const arrListCat = [

	{ id: 'all' 			, title: 'Усі' 					, },
	{ id: 'car' 			, title: 'Авто' 				, },
	{ id: 'electronics' 	, title: 'Електроніка' 			, },
	{ id: 'hh_techno' 		, title: 'Побутова техніка' 	, }, //household appliances
	{ id: 'home' 			, title: 'Дім' 					, },
	{ id: 'clothing' 		, title: 'Одяг' 				, },
	{ id: 'chemical' 		, title: 'Хімія' 				, },
	//{ id: 'household' 		, title: 'Домогосподарство' 	, },



	{ id: 'other' 			, title: 'Інші' 			, },

];









const arrListDevice = [





{
	id: 'charger_usb_wuw', title: 'WUW Fast Charger 48w', type: 'Зарядний пристрій', cat: { electronics: 1, },
	keyval: [
		
		{ k: 'Зарядний пристрій' 	, v: 'WUW Fast Charger 48w' 	, },
		{ k: 'модель' 				, v: 'C212' 					, },
		{ k: 'продавець' 			, v: 'Комп\'ютерний всесвіт' 	, gps: 'https://maps.app.goo.gl/zeagAPopSe8TQ8oX6', },
		{ k: 'ціна' 				, v: '145 грн' 					, },
		{ k: 'дата' 				, v: '2025-07-30' 				, },
	],
},
{
	id: 'samsung_a26', title: 'Samsung A26', type: 'Телефон', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'телефон' 			, v: 'Samsung Galaxy A26 5G' 	, },
		{ k: 'модель' 			, v: 'SM-A266B/DS' 				, },
		{ k: 's/n' 				, v: 'R5CY50LX9QL' 				, },
		{ k: 'IMEI 1' 			, v: '351728903444736' 			, },
		{ k: 'IMEI 2' 			, v: '352285783444731' 			, },
		{ k: 'продавець' 		, v: 'Rozetka' 					, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'ціна' 			, v: '12000 грн' 				, },
		{ k: 'дата' 			, v: '2025-07-04' 				, },
		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/ua/samsung-sm-a266bzkceuc/p484698759/', },
		{ k: 'Elmir' 			, v: 'elmir.ua' 				, href: 'https://elmir.ua/ua/cell_phones/mobile-phone-samsung-galaxy-a26-5g-8-256gb-black-sm-a266bzkceuc.html', },
	],
},
{
	id: 'samsung_galaxy_tab_a9', title: 'Samsung', type: 'Планшет', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'планшет' 			, v: 'Samsung Galaxy Tab A9' 	, },
		{ k: 'модель' 			, v: 'SM-X210' 					, },
		{ k: 's/n' 				, v: 'R9TY504VHJJ' 				, },
		{ backspace: true },

		{ k: 'процесор' 		, v: 'Qualcomm Snapdragon 695' 	, },
		{ k: '' 				, v: '2*2.21 ГГц + 6*1.8 ГГц' 	, },
		{ k: 'ОЗУ' 				, v: '8 Гб' 					, },
		{ k: 'ПЗУ' 				, v: '128 Гб' 					, },
		{ k: 'екран' 			, v: '1920*1200' 				, },
		{ k: 'діагональ' 		, v: '11&#698;' 				, },
		{ backspace: true },

		{ k: 'продавець' 		, v: 'Rozetka' 					, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'ціна' 			, v: '8600 грн' 				, },
		{ k: 'дата' 			, v: '2025-06-20' 				, },
		{ backspace: true },

		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/ua/samsung-sm-a266bzkceuc/p484698759/', },		
	],
},
{
	id: 'headphones_jbl_720bt', title: 'JBL Tune 720 BT', type: 'Навушники', cat: { electronics: 1, },
	keyval: [
		
		{ k: 'Навушники' 		, v: 'JBL Tune 720 BT' 	, },
		{ k: 'модель' 			, v: 'JBLT720BTBLK' 		, },
		{ backspace: true },

		{ k: 'продавець' 		, v: 'Vodafon' 				, gps: 'https://maps.app.goo.gl/nWUMVZoFYBLeWAv26', },
		{ k: 'ціна' 			, v: '3300 грн' 			, },
		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 		, href: 'https://rozetka.com.ua/ua/jbl_jblt720btblk/p369896661/?gad_source=1&gad_campaignid=17661883199&gbraid=0AAAAADk6sCd3iLfBACBL6OS4CptGJqbqG&gclid=EAIaIQobChMIqezusOPnjgMVpg-iAx3DNALYEAQYBiABEgKnCvD_BwE', },
	],
},



















{
	id: 'xiaomi_redmi_8f', title: 'Xiaomi Redmi 8A', type: 'Телефон', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'телефон' 			, v: 'Xiaomi Redmi 8A' 		, },
		{ k: 'модель' 			, v: 'M1908C3KG' 			, },
		{ k: 'Процесор' 		, v: 'Qualcomm Snapdragon 439, 4 x 1.95 ГГц + 4 x 1.45 ГГц' 			, },
		{ k: 'ОЗУ' 				, v: '2 Гб' 				, },
		{ backspace: true },

		{ k: 'продавець' 		, v: 'Цитрус' 				, },
		{ k: 'ціна' 			, v: '3000 грн' 			, },
		{ backspace: true },

		{ k: 'Цитрус' 			, v: 'ctrs.com.ua' 			, href: 'https://www.ctrs.com.ua/ru/smartfony/redmi-8a-232gb-midnight-black-xiaomi-ua-652981.html', },
		{ k: 'Allo' 			, v: 'allo.ua' 				, href: 'https://allo.ua/ua/products/mobile/xiaomi-redmi-8a-2-32-midnight-black.html?srsltid=AfmBOooXfbqmdQF3x71KBS5MKa4FLh3iMliz4iDfhl1di1s0gW3J6uARl', },	
	],
},






{
	id: 'maxtop', title: 'Maxtop Dragon Hair Clipper', type: 'Машинка для стрижки', cat: { hh_techno: 1, },
	keyval: [
		
		{ k: 'Машинка для стрижки' 		, v: 'Maxtop Dragon Hair Clipper' 	, },
		{ k: 'модель' 					, v: 'M 99' 						, },
		{ backspace: true },

		{ k: 'продавець' 		, v: 'MobiWorld' 		, gps: 'https://maps.app.goo.gl/JR38CkZZmcePUvxZ7', }, // кіоск в супермаркеті Чудо
		{ k: 'ціна' 			, v: '280 грн' 			, },
		{ k: 'дата' 			, v: '2025-07-04' 		, },
	],
},






// car ------------------------------------------------------------------------------
{
	id: 'vw_passat_b4', title: 'VW Passat B4', type: 'Автомобіль', cat: { car: 1, },
	keyval: [
		
		{ k: '--- Автомобіль' 				, v: 'VW Passat B4 ' 			, },
		{ k: 'Рік випуску' 	 				, v: '1994' 					, },
		{ k: 'Маса без навантаження' 		, v: '1310 кг' 					, },
		{ k: 'Маса повна' 					, v: '1800 кг' 					, },
		{ k: 'Дата' 						, v: '2020-08-05' 				, },
		{ k: 'Свідоцтво про реєстрацію' 	, v: 'СХС 469162' 				, },
		{ backspace: true },

		{ k: '--- Кузов' 		, v: 'Універсал' 								, },
		{ k: 'WIN' 				, v: 'WVWZZZ3AZRE083449' 						, },
		{ k: 'Колір' 			, v: 'R8 (LA9V) // Brilliantschwarz Metallic' 	, },
		{ k: 'Кліренс' 			, v: '119 мм' 									, },
		{ backspace: true },

		{ k: '--- Двигун' 						, v: '' 						, },
		{ k: 'КОД' 								, v: '2E' 						, },
		{ k: 'Об\'ем' 							, v: '1984 см<sup>3</sup>' 		, },
		{ k: 'Витрата бензину' 					, v: '604км / 70л // ( 11,67л / 100км ) + остача ? + прогрівання' 	, },
		{ k: 'Потужність' 						, v: '115 л.с.' 				, },
		{ k: 'Крутний момент' 					, v: '166 Нм' 					, },
		{ k: 'Діаметр циліндра' 				, v: '82.5 мм' 					, },
		{ k: 'Хід поршня' 						, v: '92.8 мм' 					, },
		{ k: 'Ступень стиснення' 				, v: '10' 						, },
		{ k: 'Об\'єм охолоджувальної рідини' 	, v: '5 л' 						, },
		{ k: 'Об\'єм масла в двигуні' 			, v: '4 л' 						, },
		{ k: 'Масло' 							, v: 'VW 500.00/501.01/502.00, ACEA - A3, API - SH,SJ' 			, },		
		
		{ k: 'Двигун 2E' 						, v: 'otoba.ru' 				, href: 'https://otoba.ru/dvigatel/vw/2e.html', },
		{ backspace: true },

		{ k: '--- КПП' 					, v: '' 						, },
		{ k: 'Управління' 				, v: 'Механічна' 				, },
		{ k: 'Кількість передач' 		, v: '5' 						, },
		{ k: 'Код' 						, v: 'CNL' 						, },
		{ k: 'Тип' 						, v: '02A' 						, },
		{ k: 'Масло' 					, v: 'VAG G052726A2, 75W-90' 	, },
		{ k: 'Об\'єм масла в коробці' 	, v: '2 л' 						, },
		{ backspace: true },

		{ k: '--- ГБО-4' 	, v: '' 								, },
		{ k: 'Встановлено' 	, v: '2023-03-30' 						, },
		{ k: 'Пробіг' 		, v: '443000 км' 						, },
		{ k: 'Редуктор' 	, v: 'Tomasetto' 						, },
		{ k: 'Форсунки' 	, v: 'Valtek' 							, },
		{ k: 'Бак' 			, v: 'Stag (42 л), старий від ГБО-2' 	, },
		{ backspace: true },

		{ k: '--- Руль' 			, v: '' 							, },
		{ k: 'ГУР' 					, v: 'Олія VAG G004000M2, 0.8 л' 	, },
		{ k: 'Гальмівна рідина' 	, v: 'DOT 4, 2 л' 				, },
		{ backspace: true },

		{ k: '--- Салон' 		, v: '' 											, },
		{ k: 'Пічка' 			, v: 'Патрубки подача/зворотка - діаметр 20 мм' 	, },
		{ backspace: true },

		{ k: '--- Ходова' 		, v: '' 												, },
		{ k: 'Шини' 			, v: '185/65/R14 86 T M+S Goodyear UltraGrip Ice 2'		, },
		{ k: 'Шини' 			, v: '185/65/R14 86 T M+S Nokian W' 					, },

		{ k: 'Ступиця' 			, v: '57.1 мм' 											, },
		{ k: 'Разболтовка' 		, v: '4*100 мм ( 4 отвори на окружності_діаметром_100мм)  // PCD (Pitch Circle Diameter - крок/окружність/діаметр )' 	, },
		{ k: 'Болты' 			, v: 'М12, крок 1.5 мм' 								, },
		{ k: 'Тиск' 			, v: '2.1 бар' 											, },
		{ k: 'Заводські' 		, v: 'Шина - 175/70/R14, диск - 5.5J x 14 ET38' 		, },
		{ k: 'Заводські' 		, v: 'Шина - 185/65/R14 86 T, диск - 5.5J x 14 ET38' 	, },
		{ k: 'Інші' 			, v: 'Шина - 195/60/R14 86 T, диск - 6J x 14 ET38' 		, },
		{ k: 'Інші' 			, v: 'Шина - 195/55/R15, диск - 6J x 15 ET35' 			, },
		{ k: 'Інші' 			, v: 'Шина - 205/50/R15 85S, диск - 6J x 15 ET33' 		, },
		{ k: 'Інші' 			, v: 'Шина - 195/50/R16, диск - 6J x 16 ET38' 			, },
		{ k: 'Інші' 			, v: 'Шина - 215/45/R16, диск - 7J x 16 ET35' 			, },
		{ backspace: true },
			
		{ k: 'Розшифровка шин' 	, v: '185 / 65 / R14 / W / 86 / T / M+S' 		, },
		{ k: '185' 				, v: 'ширина шини - 185 мм' 					, },
		{ k: '65' 				, v: 'висота профілю 65% від ширини' 			, },
		{ k: 'R14' 				, v: 'діаметр шини внутрішній - 14 дюймів'		, },
		{ k: 'W' 				, v: '' 										, },
		{ k: '86' 				, v: 'Індекс вантажопідйомності шини' 			, },
		{ k: 'T' 				, v: 'Індекс швидкості' 						, },
		{ k: 'M+S' 				, v: 'Бруд та сніг (Mud + Snow)' 				, },
		{ k: 'Tubeless (TL)' 	, v: 'Безкамерна' 								, },
		{ k: 'Маркування шин' 	, v: 'shina.ua' 								, href: 'https://shina.ua/markirovka-shin-rasshifrovka', },
		{ k: 'Маркування шин' 	, v: 'carprice.kharkov.ua' 						, href: 'http://carprice.kharkov.ua/yak-rozshifruvati-markuvannya-shin/',},
		{ backspace: true },

		{ k: 'Розшифровка дисків' 	, v: '5.5 - J - x - 14 - 4/100 - ET38 - d 66.6' , },
		{ k: '5.5' 					, v: '5.5 дюймів - ширина диску' 				, },
		{ k: 'J' 					, v: 'форма закраїн диску' 						, },
		{ k: 'x' 					, v: 'диск не роздільний' 						, },
		{ k: '14' 					, v: '14 дюймів - діаметр диску ( посадочне місце для шини )', },
		{ k: '4/100' 				, v: '4 отвори на 100-міліметровій окружністі', },
		{ k: 'ET38' 				, v: '38 мм - виліт (додатній) // відстань від посадочного місця до уявної осі симетрії диску' , },
		{ k: 'd 66.6' 				, v: 'центральний посадочний діаметр диску на ступицю ', },
		{ k: 'Маркування дисків' 	, v: '<a href="https://razmerkoles.ru/size/volkswagen/passat/1994/#trim-b4-1993-1997-20--114" target="_blank">www.razmerkoles.ru</a>', },
		{ backspace: true },

		{ k: 'Індекс вантажопідйомность' 	, v: '' 			, },
		{ k: '62' 	, v: '265 кг' 	, },
		{ k: '63' 	, v: '272 кг' 	, },
		{ k: '64' 	, v: '280 кг' 	, },
		{ k: '65' 	, v: '290 кг' 	, },
		{ k: '66' 	, v: '300 кг' 	, },
		{ k: '67' 	, v: '307 кг' 	, },
		{ k: '68' 	, v: '315 кг' 	, },
		{ k: '69' 	, v: '325 кг' 	, },
		{ k: '70' 	, v: '335 кг' 	, },
		{ k: '71' 	, v: '345 кг' 	, },
		{ k: '72' 	, v: '355 кг' 	, },
		{ k: '73' 	, v: '365 кг' 	, },
		{ k: '74' 	, v: '375 кг' 	, },
		{ k: '75' 	, v: '387 кг' 	, },
		{ k: '76' 	, v: '400 кг' 	, },
		{ k: '77' 	, v: '412 кг' 	, },
		{ k: '78' 	, v: '425 кг' 	, },
		{ k: '79' 	, v: '437 кг' 	, },
		{ k: '80' 	, v: '450 кг' 	, },
		{ k: '81' 	, v: '462 кг' 	, },
		{ k: '82' 	, v: '475 кг' 	, },
		{ k: '83' 	, v: '487 кг' 	, },
		{ k: '84' 	, v: '500 кг' 	, },
		{ k: '85' 	, v: '515 кг' 	, },
		{ k: '86' 	, v: '530 кг' 	, },
		{ k: '87' 	, v: '545 кг' 	, },
		{ k: '88' 	, v: '560 кг' 	, },
		{ k: '89' 	, v: '580 кг' 	, },
		{ k: '90' 	, v: '600 кг' 	, },
		{ k: '91' 	, v: '615 кг' 	, },
		{ k: '92' 	, v: '630 кг' 	, },
		{ k: '93' 	, v: '650 кг' 	, },
		{ k: '94' 	, v: '670 кг' 	, },
		{ k: '95' 	, v: '690 кг' 	, },
		{ k: '96' 	, v: '710 кг' 	, },
		{ k: '97' 	, v: '730 кг' 	, },
		{ k: '98' 	, v: '750 кг' 	, },
		{ k: '99' 	, v: '775 кг' 	, },
		{ k: '100' 	, v: '800 кг' 	, },
		{ k: '101' 	, v: '825 кг' 	, },
		{ k: '102' 	, v: '850 кг' 	, },
		{ k: '103' 	, v: '875 кг' 	, },
		{ k: '104' 	, v: '900 кг' 	, },
		{ k: '105' 	, v: '925 кг' 	, },
		{ k: '106' 	, v: '950 кг' 	, },
		{ k: '107' 	, v: '975 кг' 	, },
		{ k: '108' 	, v: '1000 кг' 	, },
		{ k: '109' 	, v: '1030 кг' 	, },
		{ k: '110' 	, v: '1060 кг' 	, },
		{ k: '111' 	, v: '1090 кг' 	, },
		{ k: '112' 	, v: '1120 кг' 	, },
		{ k: '113' 	, v: '1150 кг' 	, },
		{ k: '114' 	, v: '1180 кг' 	, },
		{ k: '115' 	, v: '1215 кг' 	, },
		{ k: '116' 	, v: '1250 кг' 	, },
		{ k: '117' 	, v: '1285 кг' 	, },
		{ k: '118' 	, v: '1320 кг' 	, },
		{ k: '119' 	, v: '1360 кг' 	, },
		{ k: '120' 	, v: '1400 кг' 	, },
		{ k: '121' 	, v: '1450 кг' 	, },
		{ k: '122' 	, v: '1500 кг' 	, },
		{ k: '123' 	, v: '1550 кг' 	, },
		{ backspace: true },

		{ k: 'Індекс швидкості' 	, v: '' 		, },
		{ k: 'G' 			, v: '90 км/год' 		, },
		{ k: 'J' 			, v: '100 км/год' 		, },
		{ k: 'K' 			, v: '110 км/год' 		, },
		{ k: 'L' 			, v: '120 км/год' 		, },
		{ k: 'M' 			, v: '130 км/год' 		, },
		{ k: 'N' 			, v: '140 км/год' 		, },
		{ k: 'P' 			, v: '150 км/год' 		, },
		{ k: 'Q' 			, v: '160 км/год' 		, },
		{ k: 'R' 			, v: '170 км/год' 		, },
		{ k: 'S' 			, v: '180 км/год' 		, },
		{ k: 'T' 			, v: '190 км/год' 		, },
		{ k: 'H' 			, v: '210 км/год' 		, },
		{ k: 'V' 			, v: '240 км/год' 		, },
		{ k: 'W' 			, v: '270 км/год' 		, },
		{ k: 'Y' 			, v: '300 км/год' 		, },
		{ k: 'VR' 			, v: '> 210 км/год' 	, },
		{ k: 'ZR' 			, v: '> 240 км/год' 	, },
		{ k: 'ZR (Y)' 		, v: '> 300 км/год' 	, },
		{ backspace: true },

		{ k: '--- Тюнінг' 			, v: '' 								, },
		{ k: 'Фари' 				, v: 'Junyan LPVW97 Daylight Black' 	, },

		{ k: 'Передні фари' 		, v: 'LPVW40, ангел, світлі' 			, },
		{ k: 'Передні фари' 		, v: 'LPVW41, ангел, темні' 			, },
		{ k: 'Передні фари' 		, v: 'LPVW96, диявол, світлі' 			, },
		{ k: 'Передні фари' 		, v: 'LPVW97, диявол, темні' 			, },
		{ k: 'Задні фари' 			, v: 'LTVW22, світлі' 					, },
		{ k: 'Задні фари' 			, v: 'LТVW56, темні' 					, },
		{ k: 'Бокові поворотники' 	, v: 'KBVW02, світлі' 					, },
		{ k: 'Бокові поворотники' 	, v: 'KBVW06, темні' 					, },
		
		{ k: 'Освітлення' 			, v: 'etlib.ru' 						, href: 'https://etlib.ru/tehdata/data?id=1730#ad_sg_21', },
		{ k: 'Магазин' 				, v: 'design-tuning.com' 				, href: 'https://design-tuning.com/cat_item/auto-11000-328-0/', },
		{ backspace: true },

		{ k: '--- VAG COM' 			, v: '' 					, },
		{ k: 'Відеоінструкція' 		, v: 'youtube.com' 			, href: 'https://www.youtube.com/watch?v=OZlzpd1M7Mw', },
		{ k: 'Прога' 				, v: 'drive.google.com' 	, href: 'https://drive.google.com/file/d/1BAckpBdCncuTk9622DknMWn52ZZscO2R/view', },

	],
},
{
	id: '20241130_filter', title: 'Kolbenschmidt', type: 'Фільтр масляний', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр масляний' 	, v: 'Kolbenschmidt' 	, },
		{ k: 'Код' 				, v: '50 013 073' 		, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2024-11-30' 		, },
	],
},
{
	id: '20241130_oil', title: 'Liqui Moly', type: 'Масло', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: ' Liqui Moly' 		, },
		{ k: 'Маркування' 		, v: '10W-40, ACEA A3/B4, API SN, VW 50101/50500' 		, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2024-11-30' 		, },
		{ k: 'Ціна' 			, v: '2000 грн за 5 л' 	, },
	],
},
{
	id: '20241130_adriauto', title: 'Adriauto', type: 'Трос спідометра', cat: { car: 1, },
	keyval: [
		{ k: 'Трос спідометра' 	, v: 'Adriauto' 						, },
		{ k: 'Код' 				, v: '55.1524' 							, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 					, },
		{ k: 'Дата' 			, v: '2024_11_30' 						, },
		{ k: 'Ціна' 			, v: '350 грн за 2 шт (лівий/правий)' 	, },
	],
},
{
	id: '20240909_meyle', title: 'Meyle', type: 'Бачок розширювальний', cat: { car: 1, },
	keyval: [
		{ k: 'Бачок для антифріза' 	, v: 'Meyle' 			, },
		{ k: 'Код' 					, v: '1001210033' 		, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2024-09-09' 		, },
		{ k: 'Ціна' 				, v: '650 грн' 			, },
	],
},
{
	id: '20240409_lamps', title: 'ліхтарів заднього ходу', type: 'Лампи діодні', cat: { car: 1, },
	keyval: [
		{ k: 'Лампи діодні ліхтарів заднього ходу' 	, v: '' , },
		{ k: 'Продавець' 			, v: 'Лоск' 			, },
		{ k: 'Дата' 				, v: '2024-09-09' 		, },
		{ k: 'Ціна' 				, v: '200 грн за 2 шт' 	, },
	],
},
{
	id: '20240409_button', title: 'ліхтарів заднього ходу', type: 'Датчик-вимикач', cat: { car: 1, },
	keyval: [
		{ k: 'Датчик-вимикач' 		, v: 'ліхтарів заднього ходу' 			, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2024-04-09' 		, },
		{ k: 'Ціна' 				, v: '350 грн' 			, },
	],
},
{
	id: '20240303_polmostrow', title: 'Polmostrow', type: 'Глушник середній', cat: { car: 1, },
	keyval: [
		{ k: 'Глушник середній' 	, v: 'Polmostrow' 		, },
		{ k: 'Код' 					, v: '3020' 			, },
		{ k: 'Продавець' 			, v: 'Лоск' 			, },
		{ k: 'Дата' 				, v: '2024-03-03' 		, },
		{ k: 'Ціна' 				, v: '1800 грн' 		, },
	],
},
{
	id: '20240303_polmostrow', title: 'Polmostrow', type: 'Труба вихлопна проміжна', cat: { car: 1, },
	keyval: [
		{ k: 'Труба вихлопна проміжна' 	, v: 'Polmostrow' 		, },
		{ k: 'Код' 						, v: '30347' 			, },
		{ k: 'Продавець' 				, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 					, v: '2024-03-03' 		, },
		{ k: 'Ціна' 					, v: '400 грн' 			, },
	],
},
{
	id: '20240303_clamp', title: 'трубні', type: 'Хомути', cat: { car: 1, },
	keyval: [
		{ k: 'Хомути трубні' 	, v: '' 				, },
		{ k: 'Продавець' 		, v: 'Лоск' 			, },
		{ k: 'Дата' 			, v: '2024-03-03' 		, },
		{ k: 'Ціна' 			, v: '150 грн за 3 шт' 	, },

	],
},
{
	id: '20240116_safe', title: 'Gute', type: 'Сейф', cat: { home: 1, },
	keyval: [
		{ k: 'Сейф' 		, v: 'Gute' 		, },
		{ k: 'Модель' 		, v: 'ЯМХ-22К' 		, },
		{ k: 'Продавець' 	, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1321996220-sejf-gute-yamh.html', },
		{ k: 'Дата' 		, v: '2024-01-16' 	, },
		{ k: 'Ціна' 		, v: '1440 грн' 	, },
	],
},
{
	id: '20231202_doorlock', title: 'водійської двері', type: 'Замок', cat: { car: 1, },
	keyval: [
		{ k: 'Замок водійської двері' 	, v: 'внутрішній механізм' 	, },
		{ k: 'Продавець' 				, v: 'Лоск 2/4, Макс' 		, },
		{ k: 'Дата' 					, v: '2023-12-02' 			, },
	],
},
{
	id: '20231201_febi', title: 'Febi', type: 'Підшипник', cat: { car: 1, },
	keyval: [
		{ k: 'Підшипник' 	, v: 'Febi' 			, },
		{ k: 'Призначення' 	, v: 'Задній лівий' 	, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2023-12-01' 		, },
	],
},
{
	id: '20231201_brake_liquid', title: 'гальмівна', type: 'Рідина', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Гальмівна рідина' 	, v: '' 				, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2023-12-01' 		, },
		{ k: 'Ціна' 				, v: '150 грн' 			, },
	],
},
{
	id: '20231201_monroe', title: 'Monroe', type: 'Пильники', cat: { car: 1, },
	keyval: [
		{ k: 'Пильники-відбійники' 	, v: 'Monroe' 				, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 		, },
		{ k: 'Дата' 				, v: '2023-12-01' 			, },
		{ k: 'Ціна' 				, v: '500 грн за 2 шт' 		, },
	],
},
{
	id: '20231201_frenkit', title: 'Frenkit', type: 'Ремкоплекти', cat: { car: 1, },
	keyval: [
		{ k: 'Ремкоплекти' 	, v: 'Frenkit' 				, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 		, },
		{ k: 'Дата' 		, v: '2023-12-01' 			, },
		{ k: 'Ціна' 		, v: '600 грн за 2 шт' 		, },
	],
},
{
	id: '20231201_lesjofors', title: 'Lesjofors', type: 'Пружини задні', cat: { car: 1, },
	keyval: [
		{ k: 'Пружини' 		, v: 'Lesjofors' 		, clue_manufacturer: 'lesjofors', },
		{ k: 'Призначення' 	, v: 'задні' 			, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2023-12-01' 		, },
		{ k: 'Ціна' 		, v: '2500 грн за 2шт' 	, },
	],
},
{
	id: '20231201_meyle', title: 'Meyle', type: 'Амортизатори', cat: { car: 1, },
	keyval: [
		{ k: 'Амортизатори' 	, v: 'Meyle' 							, clue_manufacturer: 'meyle',},
		{ k: 'Призначення' 		, v: 'задні' 							, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 					, },
		{ k: 'Дата' 			, v: '2023-12-01' 						, },
		{ k: 'Ціна' 			, v: '2500 грн за 2 шт (лівий/правий)' 	, },
	],
},
{
	id: '20231112_filter', title: 'масляний', type: 'Фільтр', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр масляний' 	, v: '' 				, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2023-11-12' 		, },
	],
},
{
	id: '20231112_oil_1', title: 'Aral', type: 'Масло моторне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: 'Aral' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2023-11-12' 		, },
		{ k: 'Кількість' 		, v: '1 л' 				, },
	],
},
{
	id: '20231112_oil_4', title: 'Aral', type: 'Масло моторне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: 'Aral' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2023-11-12' 		, },
		{ k: 'Кількість' 		, v: '4 л' 				, },
	],
},
{
	id: '20231112_bosch', title: 'Bosch', type: 'Склоочисники', cat: { car: 1, },
	keyval: [
		{ k: 'Склоочисники' 	, v: 'Bosch' 							, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 					, },
		{ k: 'Дата' 			, v: '2023_11_12_0900' 					, },
		{ k: 'Ціна' 			, v: '700 грн за 2 шт (лівий/правий)' 	, },
	],
},
{
	id: '20231029_sthor', title: 'Sthor', type: 'Дровокол', cat: { home: 1, },
	keyval: [
		{ k: 'Дровокол гвинтовий' 	, v: 'Sthor' 		, },
		{ k: 'Код' 					, v: '22591' 		, },
		{ k: 'Продавець' 			, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1945713061-drovokol-kolun-vintovoj.html', },
		{ k: 'Дата' 				, v: '2023-10-29' 	, },
		{ k: 'Ціна' 				, v: '370 грн' 		, },
	],
},
{
	id: '20231023_cqr', title: 'CQR', type: 'Перчатки', cat: { clothing: 1, },
	keyval: [
		{ k: 'Перчатки тактичні' 	, v: 'CQR' 				, },
		{ k: 'Код' 					, v: '50494' 			, },
		{ k: 'Продавець' 			, v: 'likebags.com.ua' 	, href: 'https://likebags.com.ua/catalog/takticheskie-ryukzaki-armeyskie/12137-taktichni-rukavitsi-chorni-cqr-50494/', },
		{ k: 'Дата' 				, v: '2023-10-23' 		, },
		{ k: 'Ціна' 				, v: '180 грн' 			, },
	],
},
{
	id: '20231023_dalley', title: ' Dalley', type: 'Сумка-барсетка', cat: { clothing: 1, },
	keyval: [
		{ k: 'Сумка-барсетка' 	, v: 'Dalley' 				, },
		{ k: 'Продавець' 		, v: 'likebags.com.ua' 		, href: 'https://likebags.com.ua/catalog/takticheskie-ryukzaki-armeyskie/10392-cholovicha-sumka-barsetka-dalley/' , },
		{ k: 'Дата' 			, v: '2023-10-23' 			, },
		{ k: 'Ціна' 			, v: '270 грн' 				, },
	],
},
{
	id: '20231005_haiba', title: 'Haiba', type: 'Змішувач в ванну', cat: { home: 1, },
	keyval: [
		{ k: 'Змішувач в ванну' 	, v: 'Haiba' 		, },
		{ k: 'Продавець' 			, v: 'Сантехніка' 	, gps: 'https://maps.app.goo.gl/qcjUvHU8WHwKFgLj7', },
		{ k: 'Дата' 				, v: '2023-10-05' 	, },
		{ k: 'Ціна' 				, v: '1300 грн' 	, },
	],
},
{
	id: '20230921_corteco_2', title: 'Corteco', type: 'Подушка двигуна/КПП', cat: { car: 1, },
	keyval: [
		{ k: 'Подушка' 				, v: 'Corteco' 			, },
		{ k: 'Код' 					, v: '21652428' 		, },
		{ k: 'Призначення' 			, v: 'під двигун/КПП' 	, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2023-09-21' 		, },
		{ k: 'Ціна' 				, v: '700 грн' 			, },
	],
},
{
	id: '20230921_corteco_1', title: 'Corteco', type: 'Подушка двигуна', cat: { car: 1, },
	keyval: [
		{ k: 'Подушка двигуна' 		, v: 'Corteco' 			, },
		{ k: 'Код' 					, v: '21651935' 		, },
		{ k: 'Призначення' 			, v: 'передня' 			, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2023-09-21' 		, },
		{ k: 'Ціна' 				, v: '1200 грн' 		, },
	],
},
{
	id: '20230921_birth', title: 'Birth', type: 'Подушка двигуна', cat: { car: 1, },
	keyval: [
		{ k: 'Подушка двигуна' 		, v: 'Birth' 			, },
		{ k: 'Код' 					, v: '5483' 			, },
		{ k: 'Призначення' 			, v: 'задня' 			, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2023-09-21' 		, },
		{ k: 'Ціна' 				, v: '900 грн' 			, },
	],
},
{
	id: '20230917_bosdq', title: 'BosDQ', type: 'Реле 4-контактне', cat: { car: 1, },
	keyval: [
		{ k: 'Реле 4-контактне' 	, v: 'BosDQ' 						, },
		{ k: 'Ток ' 				, v: '40 А' 						, },
		{ k: 'Продавець' 			, v: 'Лоск-1. Магазин електрики' 	, },
		{ k: 'Дата' 				, v: '2023-09-17' 					, },
		{ k: 'Ціна' 				, v: '150 грн за 5 шт' 				, },
	],
},
{
	id: '20230905_bosch', title: 'Bosch', type: 'Реле 4-контактне', cat: { car: 1, },
	keyval: [
		{ k: 'Реле 4-контактне' 	, v: 'Bosch' 			, },
		{ k: 'Код' 					, v: '0986AH0453' 		, },
		{ k: 'Ток ' 				, v: '30 А' 			, },
		{ k: 'Продавець' 			, v: 'your-car.com.ua' 	, href: 'https://your-car.com.ua/product/0986ah0453/bosch/', },
		{ k: 'Дата' 				, v: '2023-09-05' 		, },
		{ k: 'Ціна' 				, v: '256 грн за 4 шт' 	, },
	],
},
{
	id: '20230817_lamps', title: 'діодні', type: 'Лампи', cat: { car: 1, },
	keyval: [
		{ k: 'Лампи діодні' 	, v: '' 					, },
		{ k: 'Призначення' 		, v: 'для стоп-сигналів' 	, },
		{ k: 'Продавець' 		, v: 'Лоск' 				, },
		{ k: 'Дата' 			, v: '2023-08-17' 			, },
		{ k: 'Ціна' 			, v: '140 грн за 2 шт' 		, },
	],
},
{
	id: '20230817_', title: 'Topran', type: 'Кільця-ущільнювачі', cat: { car: 1, },
	keyval: [
		{ k: 'Кільця-ущільнювачі гумові' 	, v: 'Topran' 			, },
		{ k: 'Код' 							, v: '101562' 			, },
		{ k: 'Призначення' 					, v: 'для форсунок' 	, },
		{ k: 'Продавець' 					, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 						, v: '2023-08-17' 		, },
		{ k: 'Ціна' 						, v: '400 грн за 4 шт' 	, },
	],
},
{
	id: '20230817_viktor_reinz', title: 'Viktor Reinz', type: 'Прокладка', cat: { car: 1, },
	keyval: [
		{ k: 'Прокладка' 	, v: 'Viktor Reinz' 			, },
		{ k: 'Призначення' 	, v: 'для впускного колектора' 	, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 			, },
		{ k: 'Дата' 		, v: '2023-08-17' 				, },
		{ k: 'Ціна' 		, v: '200 грн' 					, },
	],
},
{
	id: '20230804_', title: 'Новий стиль', type: 'Крісло офісне', cat: { home: 1, },
	keyval: [
		{ k: 'Крісло офісне' 	, v: 'Новий стиль' 						, },
		{ k: 'Модель' 			, v: 'BOSS KD TILT PL64 (CH) ECO-30' 	, },
		{ k: 'Продавець' 		, v: 'Епіцентр' 						, gps: 'https://maps.app.goo.gl/hKEESiDMw2eLWNjv6', },
		{ k: 'Дата' 			, v: '2023-08-04' 						, },
		{ k: 'Ціна' 			, v: '3650 грн' 						, },
	],
},
{
	id: '20230726_muffler', title: 'задній', type: 'Глушник', cat: { car: 1, },
	keyval: [
		{ k: 'Глушник задній' 		, v: '' 				, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2023-07-26' 		, },
		{ k: 'Ціна' 				, v: '2000 грн' 		, },
	],
},
{
	id: '20230602_ina', title: 'INA', type: 'Гідрокомпенсатори', cat: { car: 1, },
	keyval: [
		{ k: 'Гідрокомпенсатори' 	, v: 'INA' 				, },
		{ k: 'Код' 					, v: '420004010' 		, },
		{ k: 'Маркування' 			, v: 'F-46516.30.TSTH' 	, },
		{ k: 'Дата' 				, v: '2023-06-02' 	, },
		{ k: 'Ціна' 				, v: '1512 грн за 8 шт' 			, },
	],
},
{
	id: '20230602_shaft_seal', title: 'Elring', type: 'Сальник вала', cat: { car: 1, },
	keyval: [
		{ k: 'Сальник вала' 	, v: 'Elring' 					, },
		{ k: 'Маркування' 		, v: 'ASW F WD FPAC 32x74x10' 	, },
		{ k: 'Код' 				, v: '325.155' 					, },
		{ k: 'Дата' 			, v: '2023-06-02' 				, },
		{ k: 'Ціна' 			, v: '90 грн' 					, },
	],
},
{
	id: '20230602_gasket', title: 'Elring', type: 'Прокладка', cat: { car: 1, },
	keyval: [
		{ k: 'Прокладка' 	, v: 'Elring' 						, },
		{ k: 'Код' 			, v: '915.653' 						, },
		{ k: 'Призначення' 	, v: 'для клапанної кришки двигуна' , },
		{ k: 'Дата' 		, v: '2023-06-02' 					, },
		{ k: 'Ціна' 		, v: '335 грн' 						, },
	],
},
{
	id: '20230601_', title: 'JP Group', type: 'Троси ручника', cat: { car: 1, },
	keyval: [
		{ k: 'Троси ручника' 	, v: 'JP Group' 						, },
		{ k: 'Код' 				, v: '1170303700' 						, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 					, },
		{ k: 'Дата' 			, v: '2023-06-01' 						, },
		{ k: 'Ціна' 			, v: '700 грн за 2 шт (лівий/правий)' 	, },
	],
},
{
	id: '20230518_multi_mat', title: 'MultiMat PRO', type: 'Шумоізоляція', cat: { car: 1, },
	keyval: [
		{ k: 'Шумоізоляція' , v: 'MultiMat PRO' 		, },
		{ k: 'Продавець' 	, v: 'Лоск' 				, },
		{ k: 'Дата' 		, v: '2023_05_18_1321' 		, },
		{ k: 'Ціна' 		, v: '1280 грн за 4 листа' 	, },
	],
},
{
	id: '20230518_vibrex', title: 'Vibrex', type: 'Віброізоляція', cat: { car: 1, },
	keyval: [
		{ k: 'Віброізоляція' 	, v: 'Vibrex' 				, },
		{ k: 'Продавець' 		, v: 'Лоск' 				, },
		{ k: 'Дата' 			, v: '2023_05_18_' 			, },
		{ k: 'Ціна' 			, v: '720 грн за 4 листа' 	, },
	],
},
{
	id: '20230518_oil', title: 'Aral', type: 'Масло моторне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: 'Aral' 			, },
		{ k: 'Дата' 			, v: '2023-05-18' 		, },
		{ k: 'Ціна' 			, v: '1000 грн за 4 л' 	, },
	],
},
{
	id: '20230518_meyle', title: 'Meyle', type: 'Фільтр масляний', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр масляний' 	, v: 'Meyle' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2023-05-18' 		, },
		{ k: 'Ціна' 			, v: '200 грн' 			, },
	],
},
{
	id: '20230517_glass', title: 'лобове', type: 'Скло', cat: { car: 1, },
	keyval: [
		{ k: 'Скло лобове' 		, v: '' 			, },
		{ k: 'Продавець' 		, v: 'А/Р Сервіс' 	, gps: 'https://maps.app.goo.gl/eUtXw1mpJU9gFPsp7', },
		{ k: 'Дата' 			, v: '2023-05-17' 	, },
		{ k: 'Ціна' 			, v: '2650 грн' 	, },
	],
},
{
	id: '20230509_relay_67', title: '67', type: 'Реле', cat: { car: 1, },
	keyval: [
		{ k: 'Реле 67' 			, v: '' 			, },
		{ k: 'Призначення' 		, v: 'Бензонасос' 	, },
		{ k: 'Дата' 			, v: '2023-05-09' 	, },
		{ k: 'Ціна' 			, v: '270 грн' 		, },
	],
},
{
	id: '20230508_lamps', title: 'діодні', type: 'Лампи', cat: { car: 1, },
	keyval: [
		{ k: 'Лампи діодні' 	, v: '' 				, },
		{ k: 'Дата' 			, v: '2023-05-08' 		, },
		{ k: 'Ціна' 			, v: '480 грн за 4 шт' 	, },
	],
},
{
	id: '20230506_jbl', title: 'JBL', type: 'Колонка Bluetooth', cat: { electronics: 1, },
	keyval: [
		{ k: 'Bluetooth колонка' 	, v: 'JBL Xtreme Big' 	, },
		{ k: 'Продавець' 			, v: 'prom.ua' 			, href: 'https://kharkov.prom.ua/ua/p795971389-kolonka-xtreme-big.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ k: 'Дата' 				, v: '2023-05-06' 		, },
		{ k: 'Ціна' 				, v: '665 грн' 			, },
	],
},
{
	id: '20230502_vag_com', title: 'VAG COM', type: 'Діагностичний адаптер', cat: { car: 1, electronics: 1, },
	keyval: [
		{ k: 'Діагностичний адаптер' 	, v: 'VAG COM 22.3' 	, },
		{ k: 'Продавець' 				, v: 'prom.ua'  		, href: 'https://kharkov.prom.ua/ua/p1700609345-diagnosticheskij-adapter-vcds.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ k: 'Дата' 					, v: '2023-05-02' 		, },
		{ k: 'Ціна' 					, v: '840 грн' 			, },
	],
},
{
	id: '20230428_xado', title: 'Xado', type: 'Очисник контактів', cat: { chemical: 1, },
	keyval: [
		{ k: 'Очисник контактів' 	, v: 'Xado Verylube' 	, },
		{ k: 'Продавець' 			, v: 'xado.com'			, href: 'https://xado.com/avtomobilnaya-himiya/ochistiteli-razlichnih-sistem-avtomobilya/ochistitel-kontaktov-s-effektom-udaleniya-vlagi' , },
		{ k: 'Дата' 				, v: '2023-04-28' 		, },
		{ k: 'Ціна' 				, v: '135 грн' 			, },
	],
},
{
	id: '20230418_dnipro_m', title: 'Шабельна пила', type: 'Інструмент', cat: { home: 1, },
	keyval: [
		{ k: 'Шабельна пила (Лобзик)' 	, v: 'Dnipro-M' 	, },
		{ k: 'Продавець' 				, v: 'Dnipro-M' 	, gps: 'https://maps.app.goo.gl/yonUHsSrQDgHDj1CA', },
		{ k: 'Дата' 					, v: '2023-04-18' 	, },
		{ k: 'Ціна' 					, v: '3800 грн' 	, },
		{ k: 'Dnipro-M' 				, v: 'dnipro-m.ua' 	, href: 'https://dnipro-m.ua/tovar/sabelnaya-pila-sr-115/?campaignid=17136142487&adgroupid=&targetid=&adid=&network=x&keyword=&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqndlkLZBzSjCdMK964s0F5KjB4-EOGnQ0x23b-p8lpWIP8BtgwqtRI4aAtWdEALw_wcB', },
	],
},
{
	id: '20230418_jp_group', title: 'JP Group', type: 'Розподільник запалювання', cat: { car: 1, },
	keyval: [
		{ k: 'Розподільник запалювання' 	, v: 'JP Group' 	, },
		{ k: 'Код' 							, v: '1191100500' 	, },
		{ k: 'Дата' 						, v: '2023-04-18' 	, },
		{ k: 'Ціна' 						, v: '1200 грн' 	, },
	],
},
{
	id: '20230401_febi', title: 'Febi', type: 'Реле 21', cat: { car: 1, },
	keyval: [
		{ k: 'Реле 21' 		, v: 'Febi' 			, },
		{ k: 'Призначення' 	, v: 'Поворотники' 		, },
		{ k: 'Код' 			, v: '11574' 			, },
		{ k: 'Продавець' 	, v: 'busauto.kh.ua' 	, href: 'https://busauto.kh.ua/ua/p1214881753-febi-11574-rele.html' , },
		{ k: 'Дата' 		, v: '2023-04-01' 		, },
		{ k: 'Ціна' 		, v: '185 грн' 			, },
	],
},
{
	id: '20230330_lpg', title: 'ГБО 4', type: 'Обладнання', cat: { car: 1, },
	keyval: [
		{ k: 'ГБО 4' 		, v: '' 						, },
		{ k: 'Продавець' 	, v: 'Тітов Микола Петрович' 	, },
		{ k: 'СТО' 			, v: 'LPG Master' 				, gps: 'https://maps.app.goo.gl/oBwBhEhPwsg3aGWX6', },
		{ k: 'Дата' 		, v: '2023-03-30' 				, },
		{ k: 'Пробіг' 		, v: '443000 км' 				, },
		{ k: 'Ціна' 		, v: '9000 грн з установкою' 	, },
	],
},
{
	id: '20230330_valtek', title: 'Valtek', type: 'Форсунки', cat: { car: 1, },
	keyval: [
		{ k: 'Форсунки' 	, v: '' 						, },
		{ k: 'Кількість' 	, v: '4 шт' 					, },
		{ k: 'Продавець' 	, v: 'Тітов Микола Петрович' 	, },
		{ k: 'СТО' 			, v: 'LPG Master' 				, gps: 'https://maps.app.goo.gl/oBwBhEhPwsg3aGWX6', },
		{ k: 'Дата' 		, v: '2023-03-30' 				, },
	],
},
{
	id: '20230330_tomasetto', title: 'Tomasetto', type: 'Редуктор', cat: { car: 1, },
	keyval: [
		{ k: 'Редуктор' 	, v: 'Tomasetto' 				, },
		{ k: 'Продавець' 	, v: 'Тітов Микола Петрович' 	, },
		{ k: 'СТО' 			, v: 'LPG Master' 				, gps: 'https://maps.app.goo.gl/oBwBhEhPwsg3aGWX6', },
		{ k: 'Дата' 		, v: '2023-03-30' 				, },
	],
},
{
	id: '20221228_hose', title: 'пожежний', type: 'Шланг', cat: { home: 1, },
	keyval: [
		{ k: 'Шланг пожежний' 	, v: '' 						, },
		{ k: 'Призначення' 		, v: 'для насоса фекального' 	, },
		{ k: 'Продавець' 		, v: 'Центральний ринок' 		, },
		{ k: 'Дата' 			, v: '2022-12-28' 				, },
		{ k: 'Ціна' 			, v: '900 грн = 20 м / 45 грн' 	, },
	],
},
{
	id: '20221228_delta', title: 'Delta', type: 'Насос фекальний', cat: { home: 1, },
	keyval: [
		{ k: 'Насос фекальний' 	, v: 'Delta' 		, },
		{ k: 'Модель' 			, v: 'WQD' 			, },
		{ k: 'Продавець' 		, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 			, v: '2022-12-28' 	, },
		{ k: 'Ціна' 			, v: '2500 грн' 	, },
	],
},
{
	id: '20221211_exide', title: 'Exide', type: 'Акумулятор', cat: { car: 1, },
	keyval: [
		{ k: 'Акумулятор' 	, v: 'Exide' 		, },
		{ k: 'Ємність' 		, v: '64 A/h' 		, },
		{ k: 'Продавець' 	, v: 'Лоск 10/22' 	, },
		{ k: 'Дата' 		, v: '2022-12-11' 	, },
		{ k: 'Ціна' 		, v: '3200 грн' 	, },
	],
},
{
	id: '20221203_cb_7747', title: 'Crownberg 7747', type: 'Тепловентилятор', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Тепловентилятор' 	, v: 'Crownberg' 	, },
		{ k: 'Модель' 			, v: 'CB-7747' 		, },
		{ k: 'Продавець' 		, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1617063396-teploventilyator-obogrevatel-dujka.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ k: 'Дата' 			, v: '2022-12-03' 	, },
		{ k: 'Ціна' 			, v: '440 грн' 		, },
	],
},
{
	id: '20221203_cb_7746', title: 'Crownberg 7746', type: 'Тепловентилятор', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Тепловентилятор' 	, v: 'Crownberg' 	, },
		{ k: 'Модель' 			, v: 'CB-7746' 		, },
		{ k: 'Продавець' 		, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1617063394-teploventilyator-obogrevatel-dujka.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ k: 'Дата' 			, v: '2022-12-03' 	, },
		{ k: 'Ціна' 			, v: '440 грн' 		, },
	],
},
{
	id: '20221203_febi', title: 'Febi', type: 'Масло ГУР', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло ГУР' 	, v: 'Febi' 			, },
		{ k: 'аркування' 	, v: '№ 06161' 			, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-12-03' 		, },
		{ k: 'Ціна' 		, v: '380 грн за 1 л' 	, },
	],
},
{
	id: '20221203_', title: 'пробка маслозливна', type: 'Болт', cat: { car: 1, },
	keyval: [
		{ k: 'Болт-пробка маслозливна' 	, v: '' 				, },
		{ k: 'Продавець' 				, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 					, v: '2022_12_03_1101' 	, },
		{ k: 'Ціна' 					, v: '50 грн' 			, },
	],
},
{
	id: '20221201_ssd', title: 'Kingston NV1', type: 'SSD M.2', cat: { electronics: 1, },
	keyval: [
		{ k: 'SSD M.2' 		, v: 'Kingston NV1' 	, },
		{ k: 'Об\'єм' 		, v: '1 TB' 			, },
		{ k: 'Код' 			, v: '9KXJKEJ4RC6A66' 	, },
		{ k: 'Продавець' 	, v: 'elmir.ua' 		, href: 'https://elmir.ua/ssd-drives/ssd-drive_m_2_1tb_kingston_nv1_snvs_1000g.html', },
		{ k: 'Дата' 		, v: '2022-12-01' 		, },
		{ k: 'Ціна' 		, v: '2878 грн' 		, },
	],
},
{
	id: '20221118_wilo', title: 'Wilo', type: 'Насос циркуляційний', cat: { home: 1, },
	keyval: [
		{ k: 'Насос циркуляційний' 	, v: 'Wilo' 					, },
		{ k: 'Модель' 				, v: 'Star-RS 25/6 (4032956)' 	, },
		{ k: 'Призначення' 			, v: 'для циркуляції води в батареях' 	, },
		{ k: 'Продавець' 			, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/wilo_star_rs_25_6_4032956/p5503491/characteristics/', },
		{ k: 'Дата' 				, v: '2022-11-18' 				, },
		{ k: 'Ціна' 				, v: '3100 грн' 				, },
	],
},
{
	id: '20221118_bag', title: 'спальний', type: 'Мішок', cat: { clothing: 1, },
	keyval: [
		{ k: 'Мішок спальний' 	, v: '' 				, },
		{ k: 'Продавець' 		, v: 'вул.Ярославська' 	, gps: 'https://maps.app.goo.gl/HiesR2HpwXe2RxHS9' , },
		{ k: 'Дата' 			, v: '2022-11-18' 		, },
		{ k: 'Ціна' 			, v: '1850 грн' 		, },
	],
},
{
	id: '20221028_aral_4', title: 'Aral', type: 'Масло моторне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: 'Aral Blue Tronic' , },
		{ k: 'Маркування' 		, v: '10w40, ACEA A3/B4, API SN, VW 501.01/505.00' 		, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-10-28' 		, },
		{ k: 'Кількість' 		, v: '4 л' 				, },
	],
},
{
	id: '20221028_aral_1', title: 'Aral', type: 'Масло моторне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло моторне' 	, v: 'Aral Blue Tronic' , },
		{ k: 'Маркування' 		, v: '10w40, ACEA A3/B4, API SN, VW 501.01/505.00' 		, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-10-28' 		, },
		{ k: 'Кількість' 		, v: '1 л' 				, },
	],
},
{
	id: '20221028_', title: 'Mahle', type: 'Фільтр масляний', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр масляний' 	, v: 'Mahle' 			, clue_manufacturer: 'mahle', },
		{ k: 'Код' 				, v: 'OC 2640' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-10-28' 		, },
	],
},
{
	id: '20221029_button', title: 'Febi', type: 'Датчик-вимикач', cat: { car: 1, },
	keyval: [
		{ k: 'Датчик-вимикач' 	, v: 'Febi' 			, },
		{ k: 'Код' 				, v: '21760' 			, },
		{ k: 'Призначення' 		, v: 'для ліхтарів заднього ходу ' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-10-29' 		, },
		{ k: 'Ціна' 			, v: '290 грн' 			, },
	],
},
{
	id: '20221029_meyle', title: 'Meyle', type: 'Фільтр повітряний', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр повітряний' 	, v: 'Meyle' 			, },
		{ k: 'Код' 					, v: '1121290008' 		, },
		{ k: 'Призначення' 			, v: 'для ДМРВ' 		, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2022-10-29' 		, },
		{ k: 'Ціна' 				, v: '200 грн' 			, },
	],
},
{
	id: '20221029_gasket', title: 'Elring', type: 'Прокладка', cat: { car: 1, },
	keyval: [
		{ k: 'Прокладка' 	, v: 'Elring' 			, },
		{ k: 'Код' 			, v: '495.620' 			, },
		{ k: 'Призначення' 	, v: 'для піддону картера двигуна' 		, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-10-29' 		, },
		{ k: 'Ціна' 		, v: '640 грн' 			, },
	],
},
{
	id: '20221028_gasket', title: 'Elring', type: 'Прокладка', cat: { car: 1, },
	keyval: [
		{ k: 'Прокладка' 	, v: 'Elring' 					, },
		{ k: 'Призначення' 	, v: 'для дросельної заслонки' 	, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 			, },
		{ k: 'Дата' 		, v: '2022-10-28' 				, },
		{ k: 'Ціна' 		, v: '70 грн' 					, },
	],
},
{
	id: '20221028_cleaner', title: 'Carb Cleaner', type: 'Спрей', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Спрей' 		, v: 'Carb Cleaner' 	, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-10-28' 		, },
		{ k: 'Ціна' 		, v: '150 грн' 			, },
	],
},
{
	id: '20220905_goodyear', title: 'Goodyear UltraGrip Ice 2', type: 'Шини', cat: { car: 1, },
	keyval: [
		{ k: 'Шини 185/65/R14' 	, v: 'Goodyear UltraGrip Ice 2' , },
		{ k: 'Маркування' 		, v: '185/65/R14 86 T M+S' 		, },
		{ k: 'Продавець' 		, v: 'Шини і диски' 			, gps: 'https://www.google.com/maps/place/%D0%A8%D0%B8%D0%BD%D1%8B+%D0%B8+%D0%94%D0%B8%D1%81%D0%BA%D0%B8+(Shiny%26Diski)+Top+Service+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2/@49.9980618,36.2727638,21z/data=!4m6!3m5!1s0x4127a0bb838bcd55:0xd8093d244bc563ef!8m2!3d49.9980618!4d36.2730454!16s%2Fg%2F12hkkm1vc?entry=ttu', },
		{ k: 'Дата' 			, v: '2022-09-05' 				, },
		{ k: 'Ціна' 			, v: '8316 грн за 4 шт' 		, },
	],
},
{
	id: '20220728_shafer', title: 'Shafer', type: 'Фільтр салону', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр салону' 	, v: 'Shafer' 			, },
		{ k: 'Код' 				, v: 'SAK44' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-07-28' 		, },
	],
},
{
	id: '20220728_meyle', title: 'Meyle', type: 'Патрубок радіатора пічки', cat: { car: 1, },
	keyval: [
		{ k: 'Патрубок радіатора пічки' 	, v: 'Meyle' 					, },
		{ k: 'Код' 							, v: '1198190014' 				, },
		{ k: 'Призначення' 					, v: 'Короткий с гофрою, вихід' , },
		{ k: 'Продавець' 					, v: 'Лоск 2/4, Макс' 			, },
		{ k: 'Дата' 						, v: '2022-07-28' 				, },
	],
},
{
	id: '20220728_jp_group', title: 'JP Group', type: 'Патрубок радіатора пічки', cat: { car: 1, },
	keyval: [
		{ k: 'Патрубок радіатора пічки' 	, v: 'JP Group' 				, },
		{ k: 'Код' 							, v: '1114304300' 				, },
		{ k: 'Призначення' 					, v: 'Довший, вхід' 			, },
		{ k: 'Продавець' 					, v: 'Лоск 2/4, Макс' 			, },
		{ k: 'Дата' 						, v: '2022-07-28' 				, },
	],
},
{
	id: '20220728_febi', title: 'Febi', type: 'Радіатор пічки', cat: { car: 1, },
	keyval: [
		{ k: 'Радіатор пічки' 	, v: 'Febi' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-07-28' 		, },
		{ k: 'Ціна' 			, v: '600 грн' 			, },
	],
},
{
	id: '20220629_europlast', title: 'Europlast', type: 'Бак пластиковий', cat: { home: 1, },
	keyval: [
		{ k: 'Бак пластиковий' 	, v: 'Europlast' 	, },
		{ k: 'Ємність' 			, v: '300 л' 		, },
		{ k: 'Продавець' 		, v: 'Барабашово' 	, },
		{ k: 'Дата' 			, v: '2022-06-29' 	, },
		{ k: 'Ціна' 			, v: '2800 грн' 	, },
	],
},
{
	id: '20220605_aquaera', title: 'П\'ятерник', type: 'нс', cat: { home: 1, },
	keyval: [
		{ k: 'П\'ятерник' 	, v: '' 			, },
		{ k: 'Продавець' 	, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 		, v: '2022-06-05' 	, },
	],
},
{
	id: '20220605_manometr', title: 'Манометр', type: 'нс', cat: { home: 1, },
	keyval: [
		{ k: 'Манометр' 	, v: '' 			, },
		{ k: 'Продавець' 	, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 		, v: '2022-06-05' 	, },
	],
},
{
	id: '20220605_italtechnica', title: 'Реле тиску', type: 'нс', cat: { home: 1, },
	keyval: [
		{ k: 'Реле тиску' 	, v: 'Italtechnica' 	, },
		{ k: 'аркування' 	, v: 'PM/5G' 			, },
		{ k: 'Продавець' 	, v: 'АкваЕра' 			, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 		, v: '2022-06-05' 		, },
	],
},
{
	id: '20220605_hydro', title: 'Гідроакумулятор', type: 'нс', cat: { home: 1, },
	keyval: [
		{ k: 'Гідроакумулятор' 	, v: 'Euroaqua' 		, },
		{ k: 'Продавець' 		, v: 'АкваЕра' 			, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 			, v: '2022_06_05_0901' 	, },
		{ k: 'Ціна' 			, v: '6280 грн' 		, },
	],
},
{
	id: '20220605_pump', title: 'Насос', type: 'нс', cat: { home: 1, },
	keyval: [
		{ k: 'Насос' 		, v: 'Euroaqua JET 100' , },
		{ k: 'Код' 			, v: '25117002-01' 		, },
		{ k: 'Продавець' 	, v: 'АкваЕра' 			, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Дата' 		, v: '2022-06-05' 		, },
		{ k: 'Ціна' 		, v: '3200 грн' 		, },
	],
},
{
	id: '20220609_febi', title: 'Febi', type: 'Фільтр паливний', cat: { car: 1, },
	keyval: [
		{ k: 'Фільтр паливний' 	, v: 'Febi' 			, },
		{ k: 'Код' 				, v: '24073 8976' 		, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-06-09' 		, },
		{ k: 'Ціна' 			, v: '220 грн' 			, },
	],
},
{
	id: '20220609_denso', title: 'Denso', type: 'Свічки запалювання', cat: { car: 1, },
	keyval: [
		{ k: 'Свічки запалювання' 	, v: 'Denso' 			, },
		{ k: 'Код' 					, v: 'W20EPBR-S' 		, },
		{ k: 'Лепестків' 			, v: '3' 				, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2022-06-09' 		, },
		{ k: 'Ціна' 				, v: '600 грн за 4 шт' 	, },
	],
},
{
	id: '20220609_oil', title: 'Febi', type: 'Масло трансмісійне', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Масло трансмісійне' 	, v: 'Febi' 			, },
		{ k: 'Код' 					, v: '75W GL-4' 		, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2022-06-09' 		, },
		{ k: 'Ціна' 				, v: '760 грн за 2 л' 	, },
	],
},
{
	id: '20220609_hepu', title: 'Hepu', type: 'Антифриз', cat: { car: 1, chemical: 1, },
	keyval: [
		{ k: 'Антифриз' 	, v: 'Hepu' 			, },
		{ k: 'Маркування' 	, v: 'P999-G12-005' 	, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-06-09' 		, },
		{ k: 'Ціна' 		, v: '750 грн за 5 л' 	, },
	],
},
{
	id: '20220609_topran', title: 'Topran', type: 'Патрубок картерних газів', cat: { car: 1, },
	keyval: [
		{ k: 'Патрубок картерних газів' 	, v: 'Topran' 			, },
		{ k: 'Код' 							, v: '109614 3800J49' 	, },
		{ k: 'VAG' 							, v: '037103211' 		, },
		{ k: '' 							, v: 'Г-образний від клапана картерних газів' 		, },
		{ k: 'Продавець' 					, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 						, v: '2022-06-09' 		, },
		{ k: 'Ціна' 						, v: '400 грн' 			, },
	],
},
{
	id: '20220609_flange', title: 'Febi', type: 'Фланець антифризу', cat: { car: 1, },
	keyval: [
		{ k: 'Фланець антифризу' 	, v: 'Febi' 			, },
		{ k: 'Код' 					, v: '12410 8624 PA66-GF30' 	, },
		{ k: 'VAG' 					, v: '037121145' 		, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2022-06-09' 		, },
		{ k: 'Ціна' 				, v: '140 грн' 			, },
	],
},
{
	id: '20220609_pump', title: 'INA', type: 'Помпа', cat: { car: 1, },
	keyval: [
		{ k: 'Помпа' 		, v: 'INA' 				, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-06-09' 		, },
		{ k: 'Ціна' 		, v: '1000 грн' 		, },
	],
},
{
	id: '20220609_ina', title: 'INA', type: 'Ролик', cat: { car: 1, },
	keyval: [
		{ k: 'Ролик' 		, v: 'INA' 				, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-06-09' 		, },
		{ k: 'Ціна' 		, v: '650 грн' 			, },
	],
},
{
	id: '20220609_roller', title: 'INA', type: 'Ролик ГРМ', cat: { car: 1, },
	keyval: [
		{ k: 'Ролик ГРМ' 	, v: 'INA' 				, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022-06-09' 		, },
		{ k: 'Ціна' 		, v: '500 грн' 			, },
	],
},
{
	id: '20220609_gates', title: 'Gates', type: 'Ремінь клиновий', cat: { car: 1, },
	keyval: [
		{ k: 'Ремінь клиновий' 	, v: 'Gates' 			, },
		{ k: 'Код' 				, v: '6389 MC' 			, },
		{ k: 'Продавець' 		, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 			, v: '2022-06-09' 		, },
		{ k: 'Ціна' 			, v: '180 грн' 			, },
	],
},
{
	id: '20220609_contitech', title: 'Contitech', type: 'Ремінь полікліновий', cat: { car: 1, },
	keyval: [
		{ k: 'Ремінь полікліновий' 	, v: 'Contitech' 		, },
		{ k: 'Код' 					, v: '6 PK 1153' 		, },
		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '2022-06-09' 		, },
		{ k: 'Ціна' 				, v: '420 грн' 			, },
	],
},
{
	id: '20220609_belt', title: 'Contitech', type: 'Ремінь ГРМ', cat: { car: 1, },
	keyval: [
		{ k: 'Ремінь ГРМ' 	, v: 'Contitech' 		, },
		{ k: 'Код' 			, v: 'CT 630. 0433 10022022' 		, },
		{ k: 'Продавець' 	, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 		, v: '2022_06_09_' 		, },
		{ k: 'Ціна' 		, v: '530 грн' 			, },
	],
},






/*

{
	id: '', title: '', type: '', cat: { car: 1, },
	keyval: [
		{ k: '' 		, v: '' 		, },
		{ k: '' 		, v: '' 		, },
		{ k: '' 		, v: '' 		, },
		{ k: '' 		, v: '' 		, },
		{ k: '' 		, v: '' 		, },
		{ k: '' 		, v: '' 		, },

		{ k: 'Продавець' 			, v: 'Лоск 2/4, Макс' 	, },
		{ k: 'Дата' 				, v: '' 		, },
		{ k: 'Ціна' 				, v: '0 грн' 			, },
	],
},




*/























{
	id: 'lenovo_ideapad_320_15', title: 'Lenovo Ideapad 320-15 IKB', type: 'Ноутбук', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'ноутбук' 			, v: 'Lenovo Ideapad 320-15 IKB' 	, },
		{ k: 'модель' 			, v: '80XL03WBRA' 					, },
		{ k: 's/n' 				, v: 'PF10DUAV' 					, },
		{ backspace: true },

		{ k: 'MainBoard' 		, v: 'Lenovo' 			, },
		{ k: 'model' 			, v: 'LNVNB161216' 		, },
		{ k: '' 				, v: 'DDR4' 			, },
		{ backspace: true },

		{ k: 'CPU' 				, v: '' 					, },
		{ k: '' 				, v: 'Intel Core i3-7130U' 	, },
		{ k: '' 				, v: '4 * 2.7 GHz' 			, },
		{ k: '' 				, v: 'Kaby Lake (7)' 		, },
		{ backspace: true },

		{ k: 'RAM' 				, v: '8 GB // 2 * 4 Гб' 	, },
		{ k: '' 				, v: 'DDR4' 				, },
		{ k: '' 				, v: '2133 MHz' 			, },
		{ k: '' 				, v: 'SODIMM' 				, },
		{ backspace: true },

		{ k: 'дісплей' 			, v: '15.6&#698;, 1920 x 1080' 							, },
		{ k: 'відео' 			, v: 'Intel HD Graphic 620' 							, },
		{ k: '' 				, v: 'nVidia GeForce 640 MX (2 GB)' 					, },
		{ k: 'SSD' 				, v: '256 GB' 											, },
		{ backspace: true },

		{ k: 'BIOS' 			, v: ' F2' 							, },
		{ k: 'Boot' 			, v: ' F12' 						, },
		{ backspace: true },

		{ k: 'Блок живлення' 	, v: '' 							, },
		{ k: '- модель' 		, v: 'ADLX65CDGE2A' 				, },
		{ k: '- input' 			, v: '100-240 V, 1.5 A, 50-60 Hz' 	, },
		{ k: '- output' 		, v: '20 V, 3.25 A (65 Вт)' 		, },
		{ backspace: true },

		{ k: 'продавець' 		, v: 'Comfy' 			, gps: 'https://maps.app.goo.gl/gdXKpmaikkyycc99A', }, 	// вул. Героїв Праці, 9
		{ k: 'ціна' 			, v: '16000 грн' 		, },
		{ backspace: true },

		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 	, href: 'https://rozetka.com.ua/ua/lenovo_80xl03wbra/p28306433/', },
		{ k: 'Elmir' 			, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/laptops/notebook_lenovo_ideapad_320-15_80xl03wbra.html', },
		{ backspace: true },

		{ k: 'Сведения о системе' 		, v: '' 		, },
		{ k: 'Win + R' 					, v: 'msinfo32' 		, },
		{ backspace: true },

		{ k: 'Розборка' 			, v: 'youtube.com' 		, href: 'https://www.youtube.com/watch?v=4epRkTuxqLE', },
		{ backspace: true },

	],
},
{
	id: 'pc_desktop', title: 'PC', type: 'Компьютер', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: '--- MotherBoard' 		, v: '' 								, },
		{ k: 'Модель' 				, v: 'Gigabyte Z370 HD3' 				, },
		{ k: 'Сокет' 				, v: 's-1151' 							, },
		{ k: 'Чипсет' 				, v: 'Intel Z370' 						, },
		{ k: 'Тип RAM' 				, v: 'DDR4 * 4 шт' 						, },
		{ k: 'Об\'єм RAM' 			, v: '64 Гб' 							, },
		{ k: 'Частоти пам\'яті' 	, v: '2133 МГц, 2400 МГц, 2666 МГц' 	, },
		
		{ k: 'Процесори для Z370' 	, v: 'gigabyte.com' 					, href: 'https://www.gigabyte.com/Motherboard/Z370-HD3-rev-10/support#support-cpu' 		, },

		{ k: 'Продавець' 			, v: 'PC Shop' 			, },
		{ k: 'ElMir' 				, v: 'elmir.ua' 		, href: 'https://elmir.ua/motherboards/motherboard_gigabyte_z370_hd3_s-1151_z370.html' 	, },
		{ k: 'Rozetka' 				, v: 'rozetka.com.ua' 	, href: 'https://hard.rozetka.com.ua/ua/gigabyte_z370_hd3/p24386964/'					, },
		{ backspace: true },
		
		{ k: '--- CPU' 				, v: '' 					, },
		{ k: 'Модель' 				, v: 'Intel Core i3-8100' 	, },
		{ k: 'Частота ядра' 		, v: '3.6 ГГц' 				, },
		{ k: 'Кількість ядер' 		, v: 4 						, },
		{ k: 'Тип пам\'яти' 		, v: 'DDR4' 				, },
		{ k: 'Частота пам\'яті' 	, v: '2400 МГц' 			, },
		{ k: 'Ядро' 				, v: 'Coffee Lake' 			, },
		{ k: 'Кеш L1' 				, v: '256 КБ' 				, },
		{ k: 'Кеш L2' 				, v: '1 МБ' 				, },
		{ k: 'Кеш L3' 				, v: '6 МБ' 				, },
		{ k: 'Техпроцес' 			, v: '14 нм' 				, },
		{ k: 'TDP' 					, v: '65 Вт' 				, },

		{ k: 'Відеоядро' 			, v: 'Intel UHD Graphics 630' 	, },
		{ k: 'Пропускна здатність' 	, v: '42.7 GB/s' 				, },
		{ k: 'Шина' 				, v: '128 bit' 					, },

		{ k: 'Продавець' 			, v: 'PC Shop' 					, },
		{ k: 'ElMir' 				, v: 'elmir.ua' 				, href: 'https://elmir.ua/processors/processor_intel_core_i3-8100_s-1151_3_6ghz_6mb_box_bx80684i38100.html' 	, },
		{ k: 'Rozetka' 				, v: 'rozetka.com.ua' 			, href: 'https://hard.rozetka.com.ua/intel_core_i3_8100/p23602096/characteristics/' 							, },
		{ backspace: true },

		{ k: '--- RAM' 			, v: '' 					, },
		{ k: 'Модель' 			, v: 'HyperX Fury Black' 	, },
		{ k: 'Код' 				, v: 'HX426C16FB3K2/16' 	, },
		{ k: 'Тип' 				, v: 'DDR4' 				, },
		{ k: 'Об\'єм' 			, v: '16 Гб = 8GB * 2' 		, },
		{ k: 'Частота' 			, v: '2666(1333) МГц' 		, },
		{ k: 'Таймінги' 		, v: 'CL16' 				, },
		{ k: 'Напруга' 			, v: '1,2 В' 				, },

		{ k: 'Продавець' 		, v: 'PC Shop' 				, },
		{ k: 'ElMir' 			, v: 'elmir.ua' 			, href: 'https://elmir.ua/memory_modules/memory_module_hyperx_ddr4_16gb_2x8gb_2666mhz_fury_black_hx426c16fb3k2_16.html', },
		{ backspace: true },

		{ k: '--- Power AC/DC' 	, v: '', },
		{ k: 'Модель' 			, v: 'Chieftec Core BBS-700S' 	, },
		{ k: 'Потужність' 		, v: '700 Вт' 					, },
		{ k: 'Продавець' 		, v: 'PC Shop' 					, },
		{ k: 'ElMir' 			, v: 'elmir.ua' 				, href: 'https://elmir.ua/power_supplies/power_supply_unit_700w_chieftec_core_bbs-700s.html', },
		{ backspace: true },

		{ k: '--- SSD M.2' 	, v: '' 			, },
		{ k: 'Назва' 		, v: 'Kingston NV1' , },
		{ k: 'об\'єм' 		, v: '1 TB' 		, },
		{ k: 'запис' 		, v: '1700 МБ/с' 	, },
		{ k: 'зчитування' 	, v: '2100 МБ/с' 	, },
		{ k: 'ключ' 		, v: 'М' 			, },

		{ k: 'Продавець' 	, v: 'ElMir' 		, },
		{ k: 'ElMir' 		, v: 'elmir.ua' 	, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_m_2_1tb_kingston_nv1_snvs_1000g.html', },
		{ backspace: true },

		{ k: '--- SSD SATA-3' 	, v: '' 					, },
		{ k: 'Назва' 			, v: 'Silicon Power A55' 	, },
		{ k: 'об\'єм' 			, v: '128 GB' 				, },
		{ k: 'запис' 			, v: '360 МБ/с' 			, },
		{ k: 'зчитування' 		, v: '460 МБ/с' 			, },
		{ k: 'Продавець' 		, v: 'ElMir' 				, },
		{ k: 'ElMir' 			, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_2_5_sata_128gb_silicon_power_a55_sp128gbss3a55s25.html', },
		{ backspace: true },

		{ k: '--- Монітор' 		, v: '' 								, },
		{ k: 'Назва' 			, v: 'Samsung' 							, },
		{ k: 'Модель' 			, v: 'S32D700EAI (LS32D700EAIXCI)' 		, },
		{ k: 's/n' 				, v: '8806095545035, 0UYNHNBX900040' 	, },
		{ k: 'Розширення' 		, v: '3840x2160' 						, },
		{ k: 'Частота' 			, v: '60 Гц' 							, },
		{ k: 'Матриця' 			, v: 'VA' 								, },
		{ k: 'Співвідношення' 	, v: '16:9' 							, },
		{ k: 'Час реакції' 		, v: '5 мс' 							, },
		{ k: 'HDMI' 			, v: '2.0' 								, },
		{ k: 'ElMir' 			, v: 'elmir.ua' 					, href: 'https://elmir.ua/ua/monitors/monitor-32-samsung-s32d700eai-ls32d700eaixci.html', },
		{ backspace: true },

	],
},













];


