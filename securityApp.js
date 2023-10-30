// Generate a random CAPTCHA code
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }
  
  // Update the CAPTCHA in the UI
  function updateCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.innerText = generateCaptcha();
  }
  
  // Check CAPTCHA input
  function checkCaptcha() {
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaCode = document.getElementById('captcha').innerText;
  
    if (captchaInput === captchaCode) {
      alert('CAPTCHA verification successful! Proceed with the form submission.');
    } else {
      alert('CAPTCHA verification failed! Please try again.');
      updateCaptcha(); // Update CAPTCHA for another attempt
    }
  }
  
  // Initial setup: Update CAPTCHA when the page loads
  window.onload = function() {
    updateCaptcha();
    
    // Add event listener to the CAPTCHA input field
    const captchaInput = document.getElementById('captchaInput');
    captchaInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        checkCaptcha(); // Check CAPTCHA when Enter key is pressed
      }
    });
  };
  // Check CAPTCHA input and redirect to GST Calculator on successful verification
function checkCaptcha() {
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaCode = document.getElementById('captcha').innerText;
  
    if (captchaInput === captchaCode) {
      alert('CAPTCHA verification successful! Redirecting to GST Calculator...');
      window.location.href = 'gstCalculator.html'; // Redirect to GST Calculator page
    } else {
      alert('CAPTCHA verification failed! Please try again.');
      updateCaptcha(); // Update CAPTCHA for another attempt
    }
  }
  
  // Initial setup: Update CAPTCHA when the page loads
  window.onload = function() {
    updateCaptcha();
    
    // Add event listener to the CAPTCHA input field
    const captchaInput = document.getElementById('captchaInput');
    captchaInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        checkCaptcha(); // Check CAPTCHA when Enter key is pressed
      }
    });
  };
  