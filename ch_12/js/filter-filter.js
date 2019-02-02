$(function() {
    // DATA ABOUT PEOPLE GOES HERE 
    var people = [
        {
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel', 
            rate: 120
        }
    ];
    // FILTERING CODE GOES HERE - CREATES A NEW ARRAY CALLED results

    // THE FUNCTION ACTS AS A FILTER
    function priceRange(person) { // Declare priceRange()
        return (person.rate >= 65) && (person.rate <= 90); // In range returns true
    }; 
    // FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
    var results = []; // Array for matching people
    results = people.filter(priceRange);

    // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody = $('<tbody></tbody>'); // New content jQuery
    for (var i = 0; i < results.length; i++) { // Loop through matches
        var person = results[i]; // Store current person
        var $row = $('<tr></tr>'); // Create a row for them
        $row.append($('<td></td>').text(person.name)); // Add their name
        $row.append($('<td></td>').text(person.rate)); // Add their rate
        $tableBody.append($row); // Add row to new content
    }

    // Add the new content after the body of the page
    $('thead').after($tableBody); // Add tbody after thead
});