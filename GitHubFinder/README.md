# Sample Java Script Projects [Mini Calender]

Fully Responsive Using HTML and CSS UI Designing [GITHUB FINDER]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/ClassAssignmentDay13Home/Capture.JPG?raw=true)
And Java Script


      
- Explanation:-  
This projects is very helpfull for finding users of github, if you can enterany particular user name then it will be finds the particuar result in your screen,else it will not finding any result then showing a error user not found in the screen, and if you try to search find the as a blank user then this projects display the all data or users profiles

- Project link :-  https://laljisingh.github.io/jsAndReactCode/ClassAssignmentDay13Home/index.html


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
const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("SearchButton");
const getAllUsers = document.getElementById("getAllUsers");
const cardContainer = document.getElementById("cardContainer");

function getUser(searchValue) {
  let apiUrl;
  if (searchValue === undefined) {
    apiUrl = `https://api.github.com/users`;
  } else {
    apiUrl = `https://api.github.com/users/${searchValue}`;
  }
  const users = fetch(apiUrl);
  users
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = data;
      if (searchValue === undefined) {
        result.map((ele) => {
          const card = document.createElement("div");
          const heading = document.createElement("h2");
          const img = document.createElement("img");
          const link = document.createElement("a");
          link.innerHTML = `<i class="fa-solid fa-link"></i> Github Link`;
          heading.innerText = ele.login;
          img.src = ele.avatar_url;
          link.href = ele.html_url;
          card.appendChild(img);
          card.appendChild(heading);
          card.appendChild(link);
          cardContainer.appendChild(card);
        });
      } else {
        cardContainer.innerHTML = "";
        console.log(result);
        if (result.message === "Not Found") {
          const heading = document.createElement("h1");
          heading.innerText = "User Not Found";
          cardContainer.appendChild(heading);
        } else {
          const card = document.createElement("div");
          const heading = document.createElement("h2");
          const img = document.createElement("img");
          const link = document.createElement("a");
          link.innerHTML = `<i class="fa-solid fa-link"></i> Github Link`;
          heading.innerText = result.login;
          img.src = result.avatar_url;
          link.href = result.html_url;
          const tables = document.createElement("table");
           tables.innerHTML = `
            <tr>
                <td><p><i class="fa-brands fa-gratipay"></i> Followers</p></td>
                <td><p><i class="fa-solid fa-star"></i> Following</p></td>
            </tr>
            <tr>  
            <td><p>${result.followers}</p></td>
            <td><p>${result.following}</p></td>
            </tr>
           `; 
           
           
           card.appendChild(img);
           card.appendChild(heading);
           card.appendChild(tables)   
        //   card.appendChild(table);
          card.appendChild(link);
          cardContainer.appendChild(card);
        }
      }
    });
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;
  getUser(searchValue);
});

getAllUsers.addEventListener("click", (e) => {
  e.preventDefault();
  cardContainer.innerHTML = "";
  getUser();
});

getUser();
```


   



# ********** **THANK YOU** *********