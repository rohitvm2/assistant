let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  // speakInput.rate = 1;
  // speakInput.pitch = 1;
  speakInput.volume = 1.0;
  speakInput.lang = "en-US";
  window.speechSynthesis.speak(speakInput);
};
window.onload = () => {
  // speakFunc("Hello Rohit");
  greetingFunc();
};

const greetingFunc = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    speakFunc("Good morning sir, how can i help you !");
  } else if (hour >= 12 && hour < 16) {
    speakFunc("Good afternoon sir, how can i help you !");
  } else {
    speakFunc("Good evening sir, how can i help you !");
  }
};

const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      let spokenText = e.results[0][0].transcript;
      handleCommands(spokenText.toLowerCase());
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start();
  } else {
    alert("Your Browser does not support voice input !");
  }
};

btn.onclick = () => {
  btn.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommands = (command) => {
  if (
    command.includes("hello") ||
    command.includes("hey") ||
    command.includes("hi")
  ) {
    speakFunc("Hello sir , How Can I help you !");
  } else if (
    command.includes("who are you") ||
    command.includes("developed") ||
    command.includes("who")
  ) {
    speakFunc("I Am Virtual Assistance,Developed by Rohit Mahajan !");
  } else if (
    command.includes("open just for code youtube channel") ||
    command.includes("just for code") ||
    command.includes("channel")
  ) {
    speakFunc("Opening... Just for code youtube channel");
    window.open("https://www.youtube.com");
  } else if (
    command.includes("open just for code website") ||
    command.includes("website")
  ) {
    speakFunc("Opening... Just for code website");
    window.open("https://www.justforcode.in");
  } else if (command.includes("open google") || command.includes("google")) {
    speakFunc("Opening... google");
    window.open("https://www.google.com");
  } else if (
    command.includes("open facebook") ||
    command.includes("facebook")
  ) {
    speakFunc("Opening... facebook");
    window.open("https://www.facebook.com");
  } else if (command.includes("open youtube") || command.includes("youtube")) {
    speakFunc("Opening... youtube");
    window.open("https://www.youtube.com");
  } else if (command.includes("tell me time") || command.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speakFunc(time);
  } else {
    speakFunc(`This is,what i found on internet regarding ${command}`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
