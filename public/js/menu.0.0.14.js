!function(e){function o(n){if(s[n])return s[n].exports;var r=s[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var s={};return o.m=e,o.c=s,o.p="",o(0)}([function(e,o){"use strict";$(document).ready(function(){var e=$("#main-menu"),o=$("#root"),s=$(".hamburger"),n=5e3,r={open:!1,closeTimer:null};s.on("click",function(e){t(!r.open)}),e.on("click",function(o){return e.hasClass("closed")?(o.preventDefault(),!1):void 0});var t=function c(t){var i=e.outerWidth();r.open=t,$(document).off("click.menuclose"),r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null),r.open?(o.css({transform:"translateX(-"+i+"px)"}),s.css({position:"fixed"}),e.addClass("open"),s.addClass("cross"),r.closeTimer=setTimeout(function(e){return c(!1)},n)):(o.css({transform:"translateX(-0px)"}),s.css({position:"absolute"}),e.removeClass("open"),s.removeClass("cross"))}})}]);