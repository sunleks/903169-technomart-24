
var link = document.querySelector(".help");
var popup = document.querySelector(".feedback-form");
var closeForm = popup.querySelector(".modal-close");

var map = document.querySelector(".save-back");
var popupMap = document.querySelector(".modal");
var closeMap = popupMap.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

closeForm.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");	
});


map.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");	
});

var firstSlaid = document.querySelector(".slaid-one");
var secondSlaid = document.querySelector(".slaid-two");
var nextSlaid = document.querySelector(".button-next");
var backSlaid = document.querySelector(".button-back");
var inputActive = document.querySelector(".slaid-active::before");


nextSlaid.addEventListener("click", function(evt) {
	evt.preventDefault();
	firstSlaid.classList.remove("slaid-active");
	secondSlaid.classList.add("slaid-active");
});

inputActive = nextSlaid;

backSlaid.addEventListener("click", function(evt) {
	evt.preventDefault();
	secondSlaid.classList.remove("slaid-active");
	firstSlaid.classList.add("slaid-active");
});	
/*var bookmark = document.querySelector(".in-bookmark");
// var popupBookmark = document.querySelector(".modal-access");
// var closeBookmark = popupBookmark.querySelector(".modal-close")

bookmark.addEventListener("click", function(evt) {
	evt.preventDefault();
	console.log("KLICK");
	// popupBookmark.classList("modal-show");
})*/