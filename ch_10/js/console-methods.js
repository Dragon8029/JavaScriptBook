console.log('And we\'re off...'); // Info: script running

var $form, width, height, area;
$form = $('#calculator'); 

$('form input[type="text"]').on('blur', function() { // When input loses focus
    console.warn('You entered ', this.value ); // Warn: what was entered
});

$('#calculator').on('submit', function(e) { /// When the user clicks submit
    e.preventDefault(); // Prevent the form submitting
    
    width = $('#width').val(); 
    height = $('#height').val();

    area = width * height; 
    console.error(area); // Error: show area

    $form.append('<p class="result">' + area + '</p>')
});