document.getElementById('settings-icon').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'block';
  });

  document.getElementById('closeSettings').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'none';
  });

  document.getElementById('saveSettings').addEventListener('click', function() {
    // Save settings to cookies
    saveSetting('closeOnInjection', document.getElementById('closeOnInjection').checked);
    saveSetting('choice2', document.getElementById('choice2').checked);

    // Close the settings popup
    document.getElementById('settings-popup').style.display = 'none';
  });

  // Function to save settings to cookies
  function saveSetting(name, value) {
    document.cookie = name + '=' + value + '; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/';
  }
