//your code here

let touristSpots = [
    'The Virupaksha Temple',
    'Victoria Memorial',
    'Tajmahal'
];

function sortedBand(arr) {
    const articles = /^(a|an|the)\s+/i;

    arr.sort((a, b) => {
        const nameA = a.replace(articles, '').trim();
        const nameB = b.replace(articles, '').trim();
        return nameA.localeCompare(nameB);
    });

    const bandList = document.querySelector('ul');
    bandList.id = 'bands';
    bandList.innerHTML = '';

    arr.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        bandList.appendChild(li);
    });
}

sortedBand(touristSpots);