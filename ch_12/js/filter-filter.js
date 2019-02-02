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

    // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody = $('<tbody></tbody>'); // New content jQuery
    for (var i = 0; i < SpeechRecognitionResultList.length; i++) { // Loop through matches
        var person = results[i]; // Store current person
        var $row = $('<tr></tr>'); // Create a row for them
        $row.append($('<td></td>').text(person.name)); // Add their name
        $row.append($('<td></td>').text(person.rate)); // Add their rate
        $tableBody.append($row); // Add row to new content
    }

    // Add the new content after the body of the page
    $('thead').after($tableBody); // Add tbody after thead
});