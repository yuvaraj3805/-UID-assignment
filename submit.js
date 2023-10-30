const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values entered by the user
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;

  // Check if all required fields are not empty
  if (name && email && phone && country) {
    // Redirect to the captcha page
    alert('Form Submitted! Redirecting to Captcha page.');
    window.location.href = 'securityApp.html';
  } else {
    // Show an error message if any required field is empty
    alert('Please enter all required fields: Name, Email, Phone, and Country.');
  }
});
