//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"DOSA", "description":"rice batter with vegetables and  fries", "price":"48 kcal" },' +
		'{ "type":"food", "name":"POTATO FRY", "description":"with café de paris herbs butter, fries and vegetables", "price":"35 kcal" },' +
		'{ "type":"separator", "description":"EGGS & BREAD" },' +
		'{ "type":"food", "name":"EGG SCRAMBLE", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"25 kcal" },' +
        '{ "type":"food", "name":"FRUIT JAM", "description":"", "price":"25 kcal" },' +
        '{ "type":"food", "name":"BUTTER", "description":"", "price":"25 kcal" },' +
		'{ "type":"separator", "description":"LUNCH" },' +
		'{ "type":"food", "name":"BUTTER CHICKEN", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"SAMBAR", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"CARROT CURRY", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DINNER" },' +
    '{ "type":"food", "name":"BUTTER MALAI", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
    '{ "type":"food", "name":"SAMBAR", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
    '{ "type":"food", "name":"MIXED VEG", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
    '{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
    '{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"", "price":"100 kcal" },' +
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"MALAI JALEBI", "description":"with star anise, a pecan brownie and salty caramel sauce", "price":"90 kcal" },' +
		'{ "type":"food", "name":"ICE CREAM", "description":"rolled rhubarb pistachio with vanilla strawberry amaretto sauce", "price":"13 kcal" },' +
		'{ "type":"separator", "description":"SNACKS" },' +
		'{ "type":"drink", "name":"SAMOSA", "description":"", "price":"40 kcal" },' +
		'{ "type":"drink", "name":"COFFEE", "description":"", "price":"55 kcal" },' +
        '{ "type":"drink", "name":"MILK", "description":"", "price":"35 kcal" },' +

		'{ "type":"food", "name":"BREAD TOAST", "description":"", "price":"28 kcal" }  ]'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"RAVA UPMA", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"CHUTNEY", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"SAMBAR", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DESSERT" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"20 kcal" },' +
		'{ "type":"food", "name":"ICE CREAM", "description":"filled with truffle-ricotta and hazelnuts butter", "price":"50 kcal" } ]'
);
const desserts = JSON.parse(
	"[" +
    '{ "type":"separator", "description":"BREAKFAST" },' +
    '{ "type":"food", "name":"IDLY", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
    '{ "type":"food", "name":"SAMBAR", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
    '{ "type":"food", "name":"MIXED VEG", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
    '{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
    '{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"", "price":"100 kcal" },' +
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"MALAI JALEBI", "description":"with star anise, a pecan brownie and salty caramel sauce", "price":"90 kcal" },' +
		'{ "type":"food", "name":"ICE CREAM", "description":"rolled rhubarb pistachio with vanilla strawberry amaretto sauce", "price":"13 kcal" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"exotic fruits", "price":"20 kcal" } ]'
);
const drinks = JSON.parse(
	"[" +
	'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"PAV BHAJI", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"MIXED VEG CURRY", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"COCONUT CURRY", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DESSERT" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"20 kcal" },' +
    '{ "type":"drink", "name":"SAMOSA", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"COFFEE", "description":"", "price":"40 kcal" },' +
		'{ "type":"drink", "name":"ENERGY DRINKS", "description":"", "price":"55 kcal" },' +
        '{ "type":"drink", "name":"MILK", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"20 kcal" } ]'
);
const Friday = JSON.parse(
	"[" +
	'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"VADA PAV", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"CHUTNEY", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"CARROT CURRY", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DESSERT" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"20 kcal" },' +
    '{ "type":"drink", "name":"VEG ROLL", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"COFFEE", "description":"", "price":"40 kcal" },' +
		'{ "type":"drink", "name":"ENERGY DRINKS", "description":"", "price":"55 kcal" },' +
        '{ "type":"drink", "name":"MILK", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"20 kcal" } ]'
);
const Saturday = JSON.parse(
	"[" +
	'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"POORI", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"CHOLE", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"CARROT CURRY", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DESSERT" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"20 kcal" },' +
    '{ "type":"drink", "name":"BONDA", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"COFFEE", "description":"", "price":"40 kcal" },' +
		'{ "type":"drink", "name":"ENERGY DRINKS", "description":"", "price":"55 kcal" },' +
        '{ "type":"drink", "name":"MILK", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"20 kcal" } ]'
);
const Sunday = JSON.parse(
	"[" +
	'{ "type":"separator", "description":"BREAKFAST" },' +
		'{ "type":"food", "name":"MASALA DOSA", "description":"Tomato sauce, mozzarella, organic oregano", "price":"100 kcal" },' +
		'{ "type":"food", "name":"SAMBAR", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"50 kcal" },' +
		'{ "type":"food", "name":"CARROT CURRY", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"80 kcal" },' +
		'{ "type":"food", "name":"RASAM", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"90 kcal" },' +
		'{ "type":"separator", "description":"RICE" },' +
		'{ "type":"food", "name":"WHITE RICE", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"100 kcal" },' +
		'{ "type":"food", "name":"GHEE RICE", "description":"with café de paris herbs butter, fries and vegetables", "price":"120 kcal" },' +
		'{ "type":"separator", "description":"DESSERT" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"20 kcal" },' +
    '{ "type":"drink", "name":"EGG PUFF", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"COFFEE", "description":"", "price":"40 kcal" },' +
		'{ "type":"drink", "name":"ENERGY DRINKS", "description":"", "price":"55 kcal" },' +
        '{ "type":"drink", "name":"MILK", "description":"", "price":"35 kcal" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"20 kcal" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");
let fributton = document.getElementById("fributton");
let satbutton = document.getElementById("satbutton");
let sunbutton = document.getElementById("sunbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});
fributton.addEventListener("click", (e) => {
	setIndicator(4);
	populateItems(Friday);
});
satbutton.addEventListener("click", (e) => {
	setIndicator(5);
	populateItems(Saturday);
});
sunbutton.addEventListener("click", (e) => {
	setIndicator(6);
	populateItems(Sunday);
});


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const menuData = {
    Monday: starters,
    Tuesday: mains,
    Wednesday: desserts,
    Thursday: drinks,
    Friday: Friday,
    Saturday: Saturday,
    Sunday: Sunday
};

const buttons = [
    startersbutton,
    mainsbutton,
    dessertsbutton,
    drinksbutton,
    fributton,
    satbutton,
    sunbutton
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        setIndicator(index);
        const day = daysOfWeek[index];
        populateItems(menuData[day]);
    });
});








function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});


// Default runs
const defaultDayIndex = 0; // Adjust as needed, for example, if you want Monday as the default day
setIndicator(defaultDayIndex);
populateItems(menuData[daysOfWeek[defaultDayIndex]]);