let deferredPrompt;

// Load dog data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    window.dogData = data.dogs;
  })
  .catch(err => {
    console.error('Failed to load dog data:', err);
  });

// Show dog info when a breed button is clicked
function showInfo(breed) {
  if (!window.dogData) {
    alert('Data not loaded yet. Please wait a moment.');
    return;
  }

  const dog = window.dogData[breed];
  if (dog) {
    document.getElementById('title').textContent = dog.title;
    document.getElementById('description').textContent = dog.description;
    document.getElementById('image').src = dog.image;
  }
}

// Listen for the install prompt event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show the install button
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'inline-block';

    installBtn.addEventListener('click', () => {
      installBtn.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    });
  }
});
