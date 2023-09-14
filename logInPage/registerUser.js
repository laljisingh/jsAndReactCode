const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

const apiUrl = "https://geek-store.onrender.com/user/register";

const emails=document.getElementById("email").value;
const name=document.getElementById("name").value;
const password=document.getElementById("password").value;

const data = {
    "email":emails,
    "password":password,
    "name":name
  // Add other data fields as needed
};

// Define custom headers
const headers = {
  "Content-Type": "application/json",
};

// Create the request object
const requestOptions = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
};

// Make the API request
fetch(apiUrl, requestOptions)
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
  })
  .then((responseData) => {
    if(responseData.message === "User authenticated successfully."){
        console.log();
        alert(responseData.message);
        window.location.href = "dashboard.html";
    }else{
        alert(responseData.message);
        window.location.href = "loginPage.html";
    }
    })
  .catch((error) => {
    // Handle errors here
    console.error("Fetch error:", error);
  });
});