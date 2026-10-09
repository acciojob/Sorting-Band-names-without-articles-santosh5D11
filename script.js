//your code here

function sortedBand(arr) {
    const articles = /^(a|an|the)\s+/i;

    arr.sort((a, b) => {
        return a.replace(articles, "").localeCompare(
            b.replace(articles, "")
        );
    });

    let bandList = document.getElementById("band");

    if (!bandList) {
        bandList = document.createElement("ul");
        bandList.id = "band";
        document.body.appendChild(bandList);
    }

    bandList.innerHTML = "";

    arr.forEach(band => {
        const li = document.createElement("li");
        li.textContent = band;
        bandList.appendChild(li);
    });
}

sortedBand(touristSpots);