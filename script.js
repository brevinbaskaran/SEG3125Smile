$(document).ready(function () {
  // Disable book button for form
  $('.custom-button').prop('disabled', true);

  // Enable submit button 
  $('input[required], select[required]').on('input change', function () {
    var isFormValid = true;
    $('input[required], select[required]').each(function () {
      if (!$(this).val()) {
        isFormValid = false; //boolean for valid form
        return false; // Exit the loop
      }
    });

    $('.custom-button').prop('disabled', !isFormValid);

    if ($('.custom-button').prop('disabled')) {
      $('.custom-button').addClass('blurred');
    } else {
      $('.custom-button').removeClass('blurred');
    }
  });

  // Handle form submission
  $('#bookingForm').on('submit', function (event) {
    if (this.checkValidity()) {
      // Form is valid so  get the data and redirect 
      event.preventDefault();

      // Capture form data
      var bookingData = {
        name: $('#name').val(),
        email: $('#email').val(),
        service: $('#service').val(),
        expert: $('#expert').val(),
        date: $('#date').val(),
        time: $('#time').val(),
        bookId: generateBookId().toString(), 
        phone: $('#phone').val()
      };

      // Store booking data 
      localStorage.setItem('bookingData', JSON.stringify(bookingData));

      window.location.href = 'confirmation.html';
    } else {
      event.preventDefault(); // Prevent form submission
      $('.custom-button').blur(); // Remove blur from the submit button
    }
  });
});

// Generate a random 9-digit booking ID
function generateBookId() {
  return Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
}



// book another appointment button element
var bookAnotherBtn = document.getElementById('book-another');
// Add listener for button 
bookAnotherBtn.addEventListener('click', function () {
  // Redirect to the booking page
  window.location.href = 'index.html';
});

// Gets the cancel appointment button element
var cancelAppointmentBtn = document.getElementById('cancel-appointment');

cancelAppointmentBtn.addEventListener('click', function () {
  // Show a confirmation dialog
  var result = confirm('Are you sure you want to cancel this appointment?');
  if (result) {
    //perform cancellation 
    window.location.href = 'index.html';
    alert('Appointment cancelled successfully!');
  } else {
    // If User clicked 'No' nothing should happen
  }
});

// Retrieve captured data 
document.addEventListener('DOMContentLoaded', function () {
  var bookingData = JSON.parse(localStorage.getItem('bookingData'));

  // Display the data on the page
  document.getElementById('name').textContent = bookingData.name;
  document.getElementById('email').textContent = bookingData.email;
  document.getElementById('service-type').textContent = bookingData.service;
  document.getElementById('service-expert').textContent = bookingData.expert;
  document.getElementById('phone').textContent = bookingData.phone;
  document.getElementById('date').textContent = bookingData.date;
  document.getElementById('time').textContent = bookingData.time;
  document.getElementById('book-id').textContent = bookingData.bookId;
});
