//your code here


function sortedBand(arr) {
    const articles = /^(a|an|the)\s+/i;

    arr.sort((a, b) => {
        const nameA = a.replace(articles, "").trim();
        const nameB = b.replace(articles, "").trim();

        return nameA.localeCompare(nameB);
    });

    const bandList = document.getElementById("band");
    bandList.innerHTML = "";

    arr.forEach((band) => {
        const li = document.createElement("li");
        li.textContent = band;
        bandList.appendChild(li);
    });
}
sortedBand(touristSpots;