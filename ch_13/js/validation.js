// SET UP THE SCRIPT
(function () {
    document.forms.register.noValidate = true; // Disable HTML5 validation
    $('form').on('submit', function(e) { // When form is submitted
        var elements = this.elements; // Collection of form controls
        var valid = {}; // Custom valid object
        var isValid; // isValid: checks form controls
        var isFormValid; // isFormValid: checks entire form

        // PERFORM GENERIC CHECKS (calls functions outside the event handler)
        for (var i = 0, l = (elements.length - 1); i < l; i++) {
            // Next line calls validateRequired() see p606 & validateTypes() p610
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
            if (!isValid) { // If it does not pass these two tests
                showErrorMessage(elements[i]); // Show error messages (see p608)
            } else { // Otherwise
                removeErrorMessage(elements[i]); // Remove error messages
            } // End if statement
            valid[elements[i].id] = isValid; // Add element to the valid object 
        } // End for loop

        // PERFORM CUSTOM VALIDATION (just 1 of 3 functions - see p614-p617) 
        if (!validateBio()) { // Call validateBio(), if not valid
            showErrorMessage(document.getElementById('bio')); // Show error
            valid.bio = false; // Update valid object-not valid
        } else { // Otherwise
            removeErrorMessage(document.getElementById('bio')); // Remove error
        } // two more functions follow here (see p614-p617)

        // DID IT PASS / CAN IT SUBMIT THE FORM?
        // Loop through valid object, if ther are errors set isFormValid to false
        for (var field in valid) { // Check properties of the valid object
            if (!valid[field]) { // If it is not valid
                isFormValid = false; // Set isFormValid variable to false
                break; // Stop the for loop, error was found
            } // Otherwise
            isFormValid = true; // The form is valid and OK to submit
        }
        // If the form did not validate, prevent it being submitted
        if (!isFormValid) { // If isFormValid is not true
            e.preventDefault(); // Prevent the form being submitted
        }
    }); // End event handler
    
    // Function called above are here

}()); //End of IIFE