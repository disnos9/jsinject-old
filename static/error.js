  document.getElementById('inject').addEventListener('click', function() {
    // Attempt to create a new window without a URL
    var newWindow = window.open('', '_blank', 'width=500,height=500');

    // Close the new window immediately
    newWindow.close();

    // Check if the new window could be opened
    if (newWindow && newWindow.closed) {
      // The window can be opened
      console.log('Window can be opened!');
    } else {
      // If not, display the error message
      document.querySelector('.error-no-popup').style.display = 'block';
    }
  });
