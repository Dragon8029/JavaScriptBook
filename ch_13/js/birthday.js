(function() {
    var $birth            = $('#birthday'); // D-O-B input
    var $parentsConsent   = $('#parents-consent'); // Consent checkbox
    var $consentContainer = $('#consent-container'); // Checkbox container
    // Create the date picker using jQuery UI
    $birth.prop('type', 'text').data('type', 'date').datepicker({
        dateFormat: 'yy-mm-dd' // Set date format
    }); 
    $birth.on('blur change', checkDate); // D-O-B loses focus
    function checkDate() { // Declare checkDate()
        var dob = this.value.split('-'); // Array from date
        // Pass toggleParentsConsent() the date of birth as a date object
        toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
    }
    function toggleParentsConsent(date) { // Declare function
        if (isNaN(date)) return; // Stop if date invalid
        var now = new Date(); // New date obj: today
        // If difference (now minus date of birth, is less than 13 years
        // show parents consent checkbox (does not account for leap years)
        // To get 13 yrs ms * secs * mins * hrs * days * years
        if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {
            $consentContainer.removeClass('hide'); // Remove hide class
            $parentsConsent.focus(); // Give it focus
        } else { // Otherwise
            $consentContainer.addClass('hide'); // Add hide to class
            $parentsConsent.prop('checked', false);
        }
    }
}());