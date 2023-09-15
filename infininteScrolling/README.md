# Sample Java Script Projects [Mini Calender]

Fully Responsive Using HTML and CSS UI Designing [Image Gallery]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/HomeAssignmentDay15/Capture.JPG?raw=true)



      
- Explanation:-  
This projects is a just simle image search or filter web application, and it is provide a image gallery when user click the _more image_ then calling an api and load the lots of image in web page, so this is my simple project for Image gallery 

- Project link :-  https://laljisingh.github.io/jsAndReactCode/HomeAssignmentDay15/index.html


#### Website Section
* Main Or Body
## Tools
- VS Code
- Google Chrome
## Language & Library
- HTML
- CSS
- Java Script
## function of JS
```
const resultDiv = document.getElementById("main");
let result;

const fetchDetails = ()=>{
    const url = fetch("https://api.unsplash.com/search/photos?page=1&query=car&client_id=NBTsuh7R1c4xBe1PG9GAfL2KirDVnMBM2zf184DJD9w");
    url.then((ele)=>{
        
        return ele.json();
    }).then((data)=>{
        // return data;
        result  = data["results"];
        // console.log(result);
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


const moreButton = document.getElementById("more");
moreButton.addEventListener("click",(e)=>{
    e.preventDefault();

    const url = fetch("https://api.unsplash.com/photos/?client_id=NBTsuh7R1c4xBe1PG9GAfL2KirDVnMBM2zf184DJD9w");
    url.then((ele)=>{
        console.log(ele);
        return ele.json();
    }).then((data)=>{
        data.map((dt)=>{
            result.push(dt);
        });
        console.log(result);
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
                });
                
                console.log(res);
                res.map((dt)=>{
                    console.log(dt);
                    resultDiv = "";
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
            
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <p id="desc" class="desc">${dt.alt_description}</p>
            <img src="${dt.urls.full}" alt="">
            `;
            resultDiv.appendChild(card);
        });
        
    });


});

fetchDetails();

```


   



# ********** **THANK YOU** *********