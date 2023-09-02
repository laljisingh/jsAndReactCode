# Sample Java Script Projects 

Fully Responsive Using HTML and CSS UI Designing
And Java Script[Emoji Projects]

## Screenshots

 ![App Screenshot](https://raw.githubusercontent.com/laljisingh/jsAndReactCode/main/colorChangeBackground/Capture.JPG)


- Project link :-  https://laljisingh.github.io/jsAndReactCode/colorChangeBackground/index.html


- Explanation:-  
This projects Have there are one Main Div and in this main div all Emojis are showned ,and if user want to filter emoji then needs to type the name of emoji, then in js file a funtion called on keypress , and automatically filter emoji in this projects this was the my simple projects .
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
const searchField = document.getElementById("search");
const submitButton = document.getElementById("button");
console.log(searchField, submitButton);

const searchEmoji = () => {

if(searchField.value !== ""){
submitButton.style.display = "flex"
}else{
submitButton.style.display = "none"

}
console.log(submitButton)


  console.log("function called");
  const searchFieldValue = searchField.value;

  console.log(emojiList);
  const filteredList = emojiList.filter((e) => {
    if (e.aliases.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
    if (e.tags.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
  });
  const searchResultContainer = document.getElementById(
    "searchResultContainer"
  );
  searchResultContainer.innerText = "";
  filteredList.map((ele) => {
    console.log(ele);
    const res =  document.createElement("div");

    const emoji = document.createElement("h1");
    const description = document.createElement("p");
    const category = document.createElement("h3");

    emoji.innerText = ele.emoji;
    description.innerText = ele.description;
    category.innerText = ele.category;

    res.appendChild(emoji);
    res.appendChild(category);
    res.appendChild(category);
    searchResultContainer.appendChild(res);
  });
};


if(searchField.value == ""){

	submitButton.style.display = "none"
}

submitButton.addEventListener("click", searchEmoji);
searchField.addEventListener("keyup", searchEmoji);

window.onload = () => searchEmoji()

```


      
   



# ********** **THANKS** *********