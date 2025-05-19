fetch('data.json')
  .then(response => response.json())
  .then(data => {
    window.dogData = data.dogs;
  });

function showInfo(breed) {
  const dog = window.dogData?.[breed];
  if (dog) {
    document.getElementById('title').textContent = dog.title;
    document.getElementById('description').textContent = dog.description;
    document.getElementById('image').src = dog.image;
  } else {
    alert('Breed not found.');
  }
}
