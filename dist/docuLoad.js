!function($){"use strict";$.fn.docuLoad=function(o){var t=$.extend({bodyLoadClass:"loading",timeOut:240,windowLoad:!0},o);this.on("click touchstart",function(o){var d=$(this).attr("href"),n="#";d.indexOf("#")>=0||0===d.length||null===d||(o.preventDefault(),$("body").addClass(t.bodyLoadClass),setTimeout(function(){return window.location.href=d},t.timeOut))}),t.windowLoad?$(window).load(function(){$("body").removeClass(t.bodyLoadClass)}):$(document).ready(function(){$("body").removeClass(t.bodyLoadClass)})}}(jQuery);
//# sourceMappingURL=./docuLoad.js.map