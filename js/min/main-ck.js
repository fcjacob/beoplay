$(window).load(function(){$("#loader").velocity("fadeOut",{duration:500})}),$(window).resize(function(){var n=window.innerWidth;n>600&&$("nav#menu ul").removeAttr("style")}),$(document).ready(function(){$("a#menu-button").click(function(){var n=$("nav#menu ul").hasClass("display");n===!0?($("nav#menu ul").removeClass("display"),$("nav#menu ul").velocity("fadeOut",{easing:"easeInOut",duration:500})):($("nav#menu ul").addClass("display"),$("nav#menu ul").velocity("fadeIn",{easing:"easeInOut",duration:500}))}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html,body").animate({scrollTop:n.offset().top},1e3),!1}})})});