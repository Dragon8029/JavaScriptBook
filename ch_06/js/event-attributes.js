function checkUsername() { // Declare function
    var elMsg = document.getElementById('feedback'); // Get feedback element
    var elUsername = document.getElementById('username'); // Get Username input
    if (elUsername.value.length < 5) { // If username too short
        elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
    } else { // otherwise
        elMsg.textContent = ''; // clear msg
    }
}