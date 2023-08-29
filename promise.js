const data = fetch("https://api.github.com/users");
data.then((data)=>{
    return data.json();
}).then((data)=>{
        // return data.json()
    console.log(data[0]);
})