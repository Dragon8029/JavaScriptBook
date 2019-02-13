// Helper function to add an event listener
function addEvent(el, event, callback) {
    if('addEventListener' in el) { // If addEventListener works
        el.addEventListener(event, callback, false); // Use it
    } else { // Otherwise 
        el['e' + event + callback] = callback; // Make callback a method of el
        el[event + callback] = function() { // Add second method
            el['e' + event + callback](window.event); // Use it to call prev func
        };
        el.attachEvent('on' + event, el[event + callback]); // Use attachEvent()
    } // to call the second function, which then calls the first one
}

// Helper function to remove an event listener
function removeEvent(el, event, callback) {
    if ('removeEventListener' in el) {
        // If removeEventListener works
        el.removeEventListener(event, callback, false); // Use it
    } else { 
        // Otherwise
        el.detachEvent('on' + event, el[event + callback]); // Create IE fallback
        el[event + callback] = null; 
        el['e' + event + callback] = null; 
    }
}