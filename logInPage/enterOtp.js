const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

const apiUrl = "https://geek-store.onrender.com/user/reset-password";

const emails=document.getElementById("email").value;
const otp=document.getElementById("otp").value;
const password=document.getElementById("password").value;

const data = {
    "email":emails,
    "otp":otp,
    "password":password
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
    if(responseData.message !== "OTP Invalid"){
        console.log();
        alert(responseData.message);
        window.location.href = "loginPage.html";
    }else{
        alert(responseData.message);
        window.location.href = "enterOtp.html";
    }
    })
  .catch((error) => {
    // Handle errors here
    console.error("Fetch error:", error);
  });
});