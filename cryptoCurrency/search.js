document.getElementById("search-btn").addEventListener("click", async () => {
    const query = document.getElementById("search-input").value;

    const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(data => data.json())

    const coinsData = data.coins;



    coinsData.forEach((elem, index) => {
        const container = document.getElementById("searchResultContainer");
        const div = document.createElement("div");

        div.innerHTML = `<div class="head-data" style="border: 2px solid green;">
            <span>${index + 1}</span>
            <img width="50" src="${elem.large}"/>
            <span>${elem.name}</span>
            <button id="${elem.id}-info-btn">
            <a href="./detail.html?id=${elem.id}">More Info</a>
            </button>
            </div>`;

        container.appendChild(div);
        console.log(div);
    });
    // coinsData.forEach((elem,index) => {
    // });

})