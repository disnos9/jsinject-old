// Check if the URL contains ?id=
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');

if (idParam) {
    // Fetch the JSON file
    fetch('https://raw.githubusercontent.com/disnos9/jsinject/main/hotlinks/hotlinks.json')
        .then(response => response.json())
        .then(data => {
            // Find the matching id in the JSON file
            const matchingEntry = data.find(entry => entry.id === parseInt(idParam));

            if (matchingEntry) {
                // Launch the associated js-file and close the referrer window
                launchScript(matchingEntry.jsFile);
                window.close(); // Close the referrer window
            } else {
                // Redirect to troubleshoot page
                window.location.href = 'https://disnos9.github.io/jsinject/#docs-hotlinks-troubleshoot';
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Function to launch the script
function launchScript(jsFile) {
    let win = window.open('about:blank');
    let script = win.document.createElement('script');
    
    // Fetch the JS file content and inject it
    fetch(jsFile)
        .then(response => response.text())
        .then(js => {
            script.innerHTML = js;
            win.document.body.appendChild(script);
        })
        .catch(error => {
            console.error('Error fetching JS file:', error);
        });
}
