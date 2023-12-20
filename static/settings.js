var settingsBackdrop = document.getElementById('settings-backdrop');
  var settingsPopup = document.getElementById('settings-popup');

  document.getElementById('settings-icon').addEventListener('click', function() {
    settingsBackdrop.style.display = 'block';
    settingsPopup.style.display = 'block';
    settingsPopup.style.filter = 'blur(5px)';
  });

  document.getElementById('closeSettings').addEventListener('click', closeSettingsPopup);

  document.getElementById('saveSettings').addEventListener('click', function() {
    saveSetting('closeOnInjection', document.getElementById('closeOnInjection').checked);
    saveSetting('choice2', document.getElementById('choice2').checked);
    closeSettingsPopup();
  });

  function closeSettingsPopup() {
    settingsBackdrop.style.display = 'none';
    settingsPopup.style.display = 'none';
    settingsPopup.style.filter = 'blur(0)';
  }

  function saveSetting(name, value) {
    document.cookie = name + '=' + value + '; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/';
  }



// scrolls to top

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
