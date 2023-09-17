const currentURL = window.location.href;

const id = currentURL.split("?")[1].split("=")[1];
console.log(id);

// API Call for details page
const resultDiv = document.getElementById("searchSectionMainContainer");
const apiCall = async () => {
  const data = await fetch(`
    https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`).then(
    (data) => data.json()
  );

  const res = document.createElement("div");
  console.log(data);
    res.classList.add("container");
  res.innerHTML = `
        <img class="product-image" src="${data["image"].large}" alt="Product Image">
        <div class="product-details">
            <h1>${data["name"]}</h1>
            <div class="price">
                <spam>${data["market_data"]["ath"].aed} ₹</spam>
                <spam>${data["market_data"]["ath"].eos} €</spam>
                <spam>${data["market_data"]["ath"].sek} ¥</spam>
                <spam>${data["market_data"]["ath"].xau} $</spam>
            </div>
            <p class="product-description">
            ${data["description"].en}
            </p>
           
        </div>`;


//   res.innerHTML = `
//         <div>
//             <img src="${data["image"].large}"/>${data["description"].en}</p>
//         </div>
//         <div>
//             <div></div>
//             <p>${data["description"].en}</p>
//         </div>
//     `;
  resultDiv.appendChild(res);
};

apiCall();
