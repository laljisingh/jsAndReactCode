const light = document.getElementById("light");
let themes;

light.addEventListener("click",()=>{
    if(themes==true){
        document.getElementById("body").style.backgroundColor = "rgb(20, 154, 111)";
        themes = false;
        light.style.backgroundColor = "black";
        light.innerText = "Dark";
    }else{
        light.style.backgroundColor = "rgb(28, 180, 111)";
        themes = true;
        light.innerText = "Light";
        document.getElementById("body").style.backgroundColor = "black";
    }
});

const dbData = localStorage.getItem("information");

const nameTag = document.getElementById("name");
const addressTag = document.getElementById("address");
const emailTag = document.getElementById("email");
const contactTag = document.getElementById("contact");
const stateTag = document.getElementById("state");
const districtTag = document.getElementById("district");
if(dbData != null){
    const userData = JSON.parse(dbData);

    nameTag.innerText = userData.name;
    addressTag.innerText = userData.address;
    emailTag.innerText = userData.email;
    contactTag.innerText = userData.contact;
    districtTag.innerText = userData.district;
    stateTag.innerText = userData.state;
}else{
    
}
function saveUser(){
    const name = prompt("Enter your full name:");
    const address = prompt("Enter your address:");
    const email = prompt("Enter your email:");
    const contact = prompt("Enter your contact number:");
    const state = prompt("Enter your state:");
    const district = prompt("Enter your district:");

    const userData = {
        name,
        address,
        email,
        contact,
        state,
        district
    };
    
    localStorage.setItem("dbData", JSON.stringify(userData));
    
    nameTag.innerText = userData.name;
    addressTag.innerText = userData.address;
    emailTag.innerText = userData.email;
    contactTag.innerText = userData.contact;
    districtTag.innerText = userData.district;
    stateTag.innerText = userData.state;

}  
saveUser();
