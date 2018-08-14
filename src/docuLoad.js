/**
 * Docu load
 * =======
 *
 * Add loading screens to your web app 
 *
 * USAGE
 * =====
 *
 * $(elm).docuLoad({
 *  // OPTIONS 
 *  bodyLoadClass: 'loading',
 *  timeOut: 240,
 *  windowLoad: true
 * });
 *
 *  Author: Nathanael McMillan (Inside Creative)
 * ver: 0.0.3
 * 
 */


;(function ($) {
    'use strict';
    $.fn.docuLoad = function (options) {

        var settings = $.extend({
            bodyLoadClass: 'loading',
            timeOut: 240,
            windowLoad: true
        }, options);

        // When the element is clicked or touchstarted
        this.on("click touchstart", function (e) {

            // Find the href location 
            var loc = $(this).attr('href');
            // Exclude any HASH in URL as this is not designed for a reload
            var exclude = "#";

            // If the link URL contains a HASH, is null/ >0 then return to 
            // exit out of the script
            if (loc.indexOf(exclude) >= 0 || loc.length === 0 || loc === null) {
                return;
            } else {
                // prevent the link from auto redirecting to the URI
                e.preventDefault();
                // Add in the settings.bodyLoadClass, once 
                // the body has the load class you can use CSS to 
                // call your loading screen i.e. body.loading .loading-screen {} etc
                $('body').addClass(settings.bodyLoadClass);

                // Set a timeout function so the loading screen has time to appear 
                // ideal for use with animations/ fading out the page etc 
                // DO NOT SET THIS RIDICULOUSLY HIGH!! Remember less is more, 
                // people do not want to wait 5 seconds just to see your animation 
                // before being sent to the next page!
                setTimeout(function () {
                    // Send the browser to the original location
                    return window.location.href = loc;
                }, settings.timeOut);
            }
        });

        // Remove loading class when page has fully loaded 
        // Be aware that this will wait for all images 
        // and JS to load before firing and can take 
        // a long time! So you may want to set settings.windowLoad
        // to false to trigger on document ready for a speedier 
        // response.
        if (settings.windowLoad) {
            $(window).load(function () {
                $('body').removeClass(settings.bodyLoadClass);
            });
        } else {
            $(document).ready(function () {
                $('body').removeClass(settings.bodyLoadClass);
            });
        }

    };
}(jQuery));