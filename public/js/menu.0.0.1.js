/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var sidebar = $("#main-sidebar");
	var toggleButton = $("#cover .hamburger");
	var nav = $("#main-nav");
	var cover = $("#cover");
	
	var open = false;
	
	toggleButton.on("click", function (event) {
	  open = !open;
	
	  var transform = null;
	
	  if (open) {
	    transform = 'translatex(-' + nav.outerWidth() + 'px)';
	  } else {
	    transform = 'translatex(0px)';
	  }
	
	  cover.css({
	    '-ms-transform': transform,
	    '-moz-transform': transform,
	    '-webkit-transform': transform,
	    'transform': transform
	  });
	
	  toggleButton.toggleClass("cross");
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGY1ZTlhMjQ0NDMyZTNlYTA4MzQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50c3JjL2pzL2VudHJpZXMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBLEtBQU0sVUFBVSxFQUFFLGVBQUYsQ0FBVjtBQUNOLEtBQU0sZUFBZSxFQUFFLG1CQUFGLENBQWY7QUFDTixLQUFNLE1BQU0sRUFBRSxXQUFGLENBQU47QUFDTixLQUFNLFFBQVEsRUFBRSxRQUFGLENBQVI7O0FBRU4sS0FBSSxPQUFPLEtBQVA7O0FBRUosY0FBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGlCQUFTO0FBQ2hDLFVBQU8sQ0FBQyxJQUFELENBRHlCOztBQUdoQyxPQUFJLFlBQVksSUFBWixDQUg0Qjs7QUFLaEMsT0FBRyxJQUFILEVBQVM7QUFDUCxpQkFBWSxpQkFBaUIsSUFBSSxVQUFKLEVBQWpCLEdBQW9DLEtBQXBDLENBREw7SUFBVCxNQUdLO0FBQ0gsaUJBQVksaUJBQVosQ0FERztJQUhMOztBQU9BLFNBQU0sR0FBTixDQUFVO0FBQ1Isc0JBQWlCLFNBQWpCO0FBQ0EsdUJBQWtCLFNBQWxCO0FBQ0EsMEJBQXFCLFNBQXJCO0FBQ0Esa0JBQWEsU0FBYjtJQUpGLEVBWmdDOztBQW1CaEMsZ0JBQWEsV0FBYixDQUF5QixPQUF6QixFQW5CZ0M7RUFBVCxDQUF6QixDIiwiZmlsZSI6Im1lbnUuMC4wLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRmNWU5YTI0NDQzMmUzZWEwODM0XG4gKiovIiwiXHJcbmNvbnN0IHNpZGViYXIgPSAkKFwiI21haW4tc2lkZWJhclwiKVxyXG5jb25zdCB0b2dnbGVCdXR0b24gPSAkKFwiI2NvdmVyIC5oYW1idXJnZXJcIilcclxuY29uc3QgbmF2ID0gJChcIiNtYWluLW5hdlwiKVxyXG5jb25zdCBjb3ZlciA9ICQoXCIjY292ZXJcIilcclxuXHJcbmxldCBvcGVuID0gZmFsc2VcclxuXHJcbnRvZ2dsZUJ1dHRvbi5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICBvcGVuID0gIW9wZW5cclxuICBcclxuICBsZXQgdHJhbnNmb3JtID0gbnVsbFxyXG5cclxuICBpZihvcGVuKSB7XHJcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRleCgtJyArIG5hdi5vdXRlcldpZHRoKCkgKyAncHgpJ1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGV4KDBweCknXHJcbiAgfVxyXG4gIFxyXG4gIGNvdmVyLmNzcyh7XHJcbiAgICAnLW1zLXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcclxuICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcclxuICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcclxuICAgICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm1cclxuICB9KVxyXG5cclxuICB0b2dnbGVCdXR0b24udG9nZ2xlQ2xhc3MoXCJjcm9zc1wiKVxyXG59KVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NsaWVudHNyYy9qcy9lbnRyaWVzL21lbnUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9