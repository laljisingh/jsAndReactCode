const resultDiv = document.getElementById("main");


const fetchDetails = ()=>{
    const url = fetch("https://api.unsplash.com/search/photos?page=1&query=car&client_id=NBTsuh7R1c4xBe1PG9GAfL2KirDVnMBM2zf184DJD9w");
    url.then((ele)=>{
        
        return ele.json();
    }).then((data)=>{
        // return data;
        const result  = data["results"];
        const searchText = document.getElementById("text");
        const btn= document.getElementById("btn");

        btn.addEventListener("click",(e)=>{
            resultDiv.innerHTML = "";
            e.preventDefault();
            if(searchText.value === ''){
                console.log("null");
                result.map((dt)=>{
                    // console.log(dt);
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                    <p id="desc" class="desc">${dt.alt_description}</p>
                    <img src="${dt.urls.full}" alt="">
                    `;
                    resultDiv.appendChild(card);
                });
            }else{
                console.log(searchText.value);
                const res = result.filter((e)=>{
                    return e.alt_description.includes(searchText.value.toLocaleLowerCase());
                })
                if(res.length === 0){
                    const h1 = document.createElement("h1");
                    h1.innerText = "Image not available."
                    resultDiv.appendChild(h1);
                }
                console.log(res);
                res.map((dt)=>{
                    console.log(dt);
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                    <p id="desc" class="desc">${dt.alt_description}</p>
                    <img src="${dt.urls.full}" alt="">
                    `;
                    resultDiv.appendChild(card);
                });
            }
        });
        result.map((dt)=>{
            // console.log(dt);
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <p id="desc" class="desc">${dt.alt_description}</p>
            <img src="${dt.urls.full}" alt="">
            `;
            resultDiv.appendChild(card);
        });
        
    });
};

fetchDetails();

