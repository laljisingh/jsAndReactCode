# Sample Java Script Projects [Voice Assistance]

Fully Responsive Using HTML and CSS UI Designing [Voice Assistance]
## Screenshots

 ![App Screenshot](https://github.com/laljisingh/jsAndReactCode/blob/main/WeeklyTest10-09-2023/Capture.JPG?raw=true)



      
## Explanation:-  
This project is centered around text-to-voice assistance. I've created the user interface using HTML and CSS, and for interaction, I'm utilizing JavaScript. The interface displays 10-12 pictures on the screen, each accompanied by some text. When users click on these pictures or cards, a voice assistant plays a sound associated with each one.

In this project, I've also added some extra features. These include a voice assistant changer, allowing users to modify the voice of the assistant. Additionally, users can check a text using a toggle button. When the user clicks this button, an input box opens in a pop-up with a text area and a button for playing sounds. This provides a brief overview of my project.

- Project link :-  https://laljisingh.github.io/jsAndReactCode/WeeklyTest10-09-2023/index.html


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
const textData = [
  {
      text: "I'm Thirsty",
      image: "drink",
  },
  {
      text: "I'm Hungry",
      image: "food",
  },
  {
      text: "I'm Tired",
      image: "tired",
  },
  {
      text: "I'm Hurt",
      image: "hurt",
  },
  {
      text: "I'm Happy",
      image: "happy",
  },
  {
      text: "I'm Angry",
      image: "angry",
  },
  {
      text: "I'm Sad",
      image: "sad",
  },
  {
      text: "I'm Scared",
      image: "scared",
  },
  {
      text: "I Want To Go Outside",
      image: "outside",
    },
    {
        text: "I Want To Go Home",
        image: "home",
    },
    {
        text: "I Want To Go To School",
        image: "school",
    },
    {
        text: "I Want To Go To Grandmas",
        image: "grandma",
    },
];

const main = document.querySelector("main");
const selectVoice = document.getElementById("voices");
const textarea = document.getElementById("text");
const readTextbutton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");


function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}

textData.forEach(createBox);

let voices = [];

function voiceGetting() {
  voices = speechSynthesis.voiceGetting();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    selectVoice.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});

speechSynthesis.addEventListener("voiceschanged", voiceGetting);
selectVoice.addEventListener("change", setVoice);
readTextbutton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});


voiceGetting();



// if ('speechSynthesis' in window) {
//     const synthesis = window.speechSynthesis;
//     const input = document.getElementById('text-to-speech-input');
//     const button = document.getElementById('speak-button');
//     const output = document.getElementById('output');

//     // Event listener for the Speak button
//     button.addEventListener('click', () => {
//         const text = input.value;
//         if (text !== '') {
//             const utterance = new SpeechSynthesisUtterance(text);
//             synthesis.speak(utterance);
//             output.textContent = 'Speaking...';
//             utterance.onend = () => {
//                 output.textContent = 'Speech complete.';
//             };
//         }
//     });
// } else {
//     // The Web Speech API is not supported
//     alert('Text-to-speech is not supported in this browser.');
// }
```


# ********** **THANK YOU** *********