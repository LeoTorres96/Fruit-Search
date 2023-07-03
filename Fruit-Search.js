const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

function search(str) {
  const results = fruit.filter((val) =>
    val.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}

input.addEventListener('input', (event) => {
  const value = event.target.value;
  suggestions.innerHTML = '';
  if (value.length === 0) {
    return;
  }
  const filteredFruit = fruit.filter((name) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
  filteredFruit.forEach((name) => {
    const suggestionElement = document.createElement('li');
    suggestionElement.textContent = name;
    suggestionElement.addEventListener('click', () => {
      input.value = name;
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
    });
    suggestions.appendChild(suggestionElement);
  });
});

let index = 0;
input.addEventListener('keydown', (e) => {
  const suggestionElement = suggestions.querySelectorAll('li');
  switch (e.key) {
    case 'ArrowUp':
      index--;
      break;
    case 'ArrowDown':
      index++;
      break;
    case 'Enter':
      if (suggestionElement[index]) {
        input.value = suggestionElement[index].textContent;
        suggestions.innerHTML = '';
        suggestions.style.display = '';
      }
      break;
  }
  index = Math.max(-1, Math.min(index, suggestionElement.length - 1));
  suggestionElement.forEach((el, i) => {
    if (i === index) {
      el.classList.add('highlight');
    } else {
      el.classList.remove('highlight');
    }
  });
});

document.querySelector('form').addEventListener('submit', function () {
  location.reload();
});

// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);
