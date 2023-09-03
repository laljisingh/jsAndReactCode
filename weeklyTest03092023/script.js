// const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '13dc6c0d61msh2b1102f9dc5fb4ap198cb1jsn058fcba3c8ef',
// 		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const btn = document.getElementById("search-button");
btn.addEventListener("click",()=>{
     const destination = document.getElementById("destination").value;   
     
    console.log(destination);

    let response = fetch(
	'https://hotels4.p.rapidapi.com/v2/get-meta-data',
	{
        method: 'GET',
		headers: {
            'x-rapidapi-key': '13dc6c0d61msh2b1102f9dc5fb4ap198cb1jsn058fcba3c8ef'
		}
	}
    ).then(response => {
        // console.log(response);
        return response.json()
    }).then((data)=>{
        console.log(data[destination]);
        const result = document.getElementById("right");
        result.innerHTML=`<div class="card" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data[destination]}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data[destination]}</h5>
              <p class="card-text">In this hotels All Service are good</p>
              <p>Rating : 5 star</p>
              <p>Price : 25000rs</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>`;
    return data;
});

});
