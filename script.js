// Define the array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'The Who', 'Pink Floyd'];

// Function to remove articles ('a', 'an', 'the') from a band name
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names without articles in lexicographic order
bandNames.sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// Get the <ul> element by its id 'bands'
const ulElement = document.getElementById('bands');

// Create and append <li> elements for each sorted band name
bandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
