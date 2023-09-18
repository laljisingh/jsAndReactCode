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