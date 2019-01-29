$('.accordion').on('click', '.accordion-control', function(e) { // When Clicked
    e.preventDefault(); // Prevent default action of button
    $(this) // Get the element the user clicked on
        .next('.accordion-panel') // Select the following panel
        .not(':animated') // If it is not currently animating
        .slideToggle(); // Use slide toggle tto show or hide it
});