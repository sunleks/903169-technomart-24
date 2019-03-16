
var link = document.querySelector(".help");
var popup = document.querySelector(".feedback-form");
var closeForm = document.querySelectorAll(".modal-close");

console.log(closeForm);

if (link){
	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
})};

if (closeForm = popup) {
	closeForm.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");	
})};

var map = document.querySelector(".save-back");
var popupMap = document.querySelector(".modal");

if (map) {
	map.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.add("modal-show");
})};

if (closeForm = popupMap) {
	closeForm.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.remove("modal-show");	
})};

var firstSlaid = document.querySelector(".slaid-one");
var secondSlaid = document.querySelector(".slaid-two");
var nextSlaid = document.querySelector(".button-next");
var backSlaid = document.querySelector(".button-back");
var inputActive = document.querySelector(".slaid-active::before");

if (nextSlaid) {
	nextSlaid.addEventListener("click", function(evt) {
		evt.preventDefault();
		firstSlaid.classList.remove("slaid-active");
		secondSlaid.classList.add("slaid-active");
})};

if (backSlaid) {
	backSlaid.addEventListener("click", function(evt) {
		evt.preventDefault();
		secondSlaid.classList.remove("slaid-active");
		firstSlaid.classList.add("slaid-active");
})};	

var bookmark = document.querySelectorAll(".in-bookmark");
var popupBookmark = document.querySelector(".modal-access");

console.log(bookmark);

if (closeForm = popupBookmark) {
	for (var i = 0; i <= bookmark.length; i++) {
		bookmark[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			console.log("KLICK");
			popupBookmark.classList.add("modal-show");
})}};