# Sample Java Script Projects [Saved User Information In LocalStorage]

Fully Responsive Using HTML and CSS UI Designing [Saved User Information In LocalStorage]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay16Home/Capture.JPG?raw=true)



      
- Explanation:-  
In this project, I am utilizing the browser's local storage as a storage space. In this project, I collect data from the user, create an object, and subsequently save this object in local storage. Afterward, I retrieve the data from local storage and display the output on the browser's screen.

- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay16Home/index.html


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

```


   



# ********** **THANK YOU** *********