let res = document.getElementById("main");
const btn = document.getElementById("btn");


function callApi() {
    res.innerHTML = ""
   fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      return response.json();
    })
    .then(data => {

        console.log(data[0]);
        
        let div= document.createElement("div");


        div.innerHTML = `
        <img src="${data[0].url}" alt="Sample Image" class="card-image">
        
        
        `;
        res.appendChild(div);
    });
    
}

btn.addEventListener("click",(e)=>{
    callApi();

});
callApi();

function selfInvoke() {
    // Code to execute every 1 second
    console.log("This function is self-invoking every 1 second.");
    callApi();
}

setInterval(selfInvoke, 4000); // 1000 milliseconds = 1 second
