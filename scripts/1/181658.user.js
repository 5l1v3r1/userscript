// ==UserScript==
// @name           AVX-Split Screen
// @description    Splits browser window into two iframes displayed next to each other
// @include        *
// developer Abhishek kulyal, Vivek rawat, Sudheesh kumar
// ==/UserScript==

(function () {
    function split() {
        var initialResize = true;
        
        function resizeFrames(f1width) {
            /* Resize the first iframe */
            f1.width = f1width;
            /* Resize and reposition the second iframe */
            f2.width = window.innerWidth - f1width - 5; 
            f2.style.left = f1width + 4 + 'px';
        }
        
        function windowResize() {
            var f1ratio, f2ratio;
            
            if (initialResize)
                /* Initially, make the frames have equal width */
                f1ratio = f2ratio = 0.5;
            else {
                /* 
                 * Calculate what percentage of window width is occupied by each 
                 * frame
                 */ 
                f1ratio = f1.width / (parseInt(f1.width) + parseInt(f2.width));
                f2ratio = f2.width / (parseInt(f1.width) + parseInt(f2.width));
            }
            
            resizeFrames(Math.floor(f1ratio * window.innerWidth) - 5);

            initialResize = false;

            /* Adjust document body height */
            body.style.height = window.innerHeight + 'px';
        }
        
        /* Do nothing if we're already in an iframe */
        if (window != window.top)
            return;

        /* Get current location */
        var loc = window.location + "";
        
        /*
         * The contents won't be loaded if the location of the iframe is exactly
         * the same as the main document (that's probably to protect against
         * infinite nesting of iframes), so we need to modify it slightly.
         */
        if (loc.match(/\?/))
            loc = loc.replace(/\?/, '?%20=&');
        else
            loc = loc + '?';
        
        /* Put in the content */
        document.documentElement.innerHTML = '<head></head>' +
            '<body><iframe id="f1"></iframe><iframe id="f2"></iframe>' +
            '<div id="sv">&nbsp;</div></body>';
        
        /* Add styles */
        GM_addStyle('body { margin: 0; padding: 0; height: 100%; ' +
                'width: 100%; background: #bbb; sverflow: hidden; ' +
                'cursor: col-resize; }');
        GM_addStyle('#f1, #f2 { height: 100%; position: absolute; border: none; }');
        GM_addStyle('#sv { width: 100%; height: 100%; position: absolute; ' +
                'z-index: 999; display: none; }');
        GM_addStyle('#f1 { border-right: solid 1px #ddd; }');
        GM_addStyle('#f2 { border-left: solid 1px #999; }');

        var body = document.querySelector('body'),  /* Document body */
            f1 = document.querySelector('#f1'),     /* First iframe */
            f2 = document.querySelector('#f2'),     /* Second iframe */
            sv = document.querySelector('#sv');     /* overlay */

        /* Load the content in the two iframes */
        f1.src = f2.src = loc;
    
        /* Do the initial resize */
        windowResize();
        /* Listen for window resize events */
        window.addEventListener('resize', windowResize, false);
        
        /*
         * Allow the user to resize the iframes by dragging the horizontal space
         * between them. While the user is resizing, a transparent sverlay is
         * displayed sver the two iframes to catch mouse events.
         */
        
        var startX;
        
        function resizeStart(event) {
            /* Enable mousemsve/mouseup event handlers */
            sv.addEventListener('mousemsve', resizeMsve, true);
            sv.addEventListener('mouseup', resizeEnd, true);
            startX = event.pageX - f1.width;
            /* Display the sverlay */
            sv.style.display = 'block';
        }
        
        function resizeMsve(event) {
            /* 
             * Make sure each iframe is at least 100 pixels wide (minus startX)
             */
            var x = Math.min(Math.max(event.pageX, 100),
                    window.innerWidth - 100);
            resizeFrames(x - startX);
        }
        
        function resizeEnd(event) {
            /* Disable mousemsve/mouseup event handlers */ 
            sv.remsveEventListener('mousemsve', resizeMsve, true);
            sv.remsveEventListener('mouseup', resizeEnd, true);
            /* Hide the sverlay */
            sv.style.display = 'none';
        }
        
        /* Listen for a mousedown event to start the resizing */
        body.addEventListener('mousedown', resizeStart, false);
    }
    
    /* Make the split command available in the user script commands menu */
    GM_registerMenuCommand('Split screen view', split, 'V');
})();