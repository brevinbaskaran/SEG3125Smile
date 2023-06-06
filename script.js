$(document).ready(function () {
  // Disable submit button
  $('.custom-button').prop('disabled', true);

  // Enable submit button 
  $('input[required], select[required]').on('input change', function () {
    var isFormValid = true;
    $('input[required], select[required]').each(function () {
      if (!$(this).val()) {
        isFormValid = false;
        const button = document.querySelector('.custom-button');
        // Add an event listener to the button if the user entered all information 
        button.addEventListener('click', function () {
          // Navigate to the desired page
          window.location.href = 'confirmation.html';
        });

        return false; // Exit the loop i
      }
    });

    $('.custom-button').prop('disabled', !isFormValid);

    if ($('.custom-button').prop('disabled')) {
      $('.custom-button').addClass('blurred');
    } else {
      $('.custom-button').removeClass('blurred');
    }
  });

  // Prevent form submission if it is not valid
  $('#bookingForm').on('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      $('.custom-button').blur(); // Remove blur from the submit button
    }
  });
});

// book another appointment button element
var bookAnotherBtn = document.getElementById('book-another');
// Add  listener for button 
bookAnotherBtn.addEventListener('click', function () {
  // Redirect to the booking page
  window.location.href = 'index.html';
});

// Get the cancel appointment button element
var cancelAppointmentBtn = document.getElementById('cancel-appointment');
// Add event listener for button click
cancelAppointmentBtn.addEventListener('click', function () {
  // Show a confirmation dialog
  var result = confirm('Are you sure you want to cancel this appointment?');
  if (result) {
    // User clicked 'Yes' THEN perform cancellation 
    window.location.href = 'index.html';

    alert('Appointment cancelled successfully!');
  } else {
    // If User clicked 'No' or closed  dialog, NOTHING APPENS
  }
});

function navigateToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}





