const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

const apiUrl = "https://geek-store.onrender.com/user/forgot-password";

const emails=document.getElementById("email").value;

const data = {
    "email":emails
  // Add other data fields as needed
};

// Define custom headers
const headers = {
  "Content-Type": "application/json", // Specify the content type as JSON
  // Add any other headers you need, such as authentication headers
};

// Create the request object
const requestOptions = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data), // Convert data to JSON format
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
    
      console.log(responseData.message);
      alert(responseData.message);
      window.location.href = "enterOtp.html";
    })
  .catch((error) => {
    // Handle errors here
    console.error("Fetch error:", error);
  });
});