// var x = myFunction(4, 3);
// // document.getElementById("demo").innerHTML = x;

// function myFunction(a, b) {
//   console.log(a);
//   return a * b;
// }

// weather = "rssainy";
// weather === "sunny"
//   ? console.log("sunny")
//   : weather === "rainy"
//   ? console.log("rainy")
//   : console.log("not fount");

// console.log("helllo");
// setTimeout(function hello(){
//     console.log("bye bye");
// },5000);

// // hell();
// console.log("hii");

const apiUrl = "https://geek-store.onrender.com/user/forgot-password";

// Define the data you want to send in the request body
const data = {
    "email":"lalji7411@gmail.com"
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
    // Handle the response data here
    console.log(responseData);
  })
  .catch((error) => {
    // Handle errors here
    console.error("Fetch error:", error);
  });