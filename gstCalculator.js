document.getElementById('calculateBtn').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amount').value);
    var gstRate = parseFloat(document.getElementById('gstRate').value);
  
    if (!isNaN(amount) && !isNaN(gstRate)) {
      var gstAmount = (amount * gstRate) / 100;
      var totalAmount = amount + gstAmount;
  
      document.getElementById('result').innerText = `GST Amount: ${gstAmount.toFixed(2)}\nTotal Amount: ${totalAmount.toFixed(2)}`;
    } else {
      document.getElementById('result').innerText = 'Invalid input. Please enter valid numbers.';
    }
  });
  