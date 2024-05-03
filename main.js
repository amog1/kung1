// KF Panda Search

//  HTML Event Listner
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImageEl = document.getElementById("char-img");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // input
  let name = document.getElementById("char-in").value;
  // name = name.toLowercase();
  //   console.log(name);

  //   if statement  -Test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    // console.log("Yes, Po is a KF Panda character");
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImageEl.src = "img/po.png";
  } else if (name === "tigress") {
    // console.log("Yes, Tigress is a KF Panda character");
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was a hardcore!";
    charImageEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    // console.log("Yes, Mantis is a KF Panda character");
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the bug!";
    charImageEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML =
      "We canot give up hope. Po would want us to remain strong, hardcore. Right Tigress";
    charImageEl.src = "img/monkey.png";
  } else if (name === "crane") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice-KA-KAW";
    charImageEl.src = "img/crane.png";
  } else if (name === "shifu") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML = "If you a truly at peace, you can do anything.";
    charImageEl.src = "img/shifu.png";
  } else if (name === "boss-wolf") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Boss-wolf";
    charQuoteEl.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    charImageEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    charImageEl.src = "img/croc.png";
  } else if (name === "kai") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      " Look at you pathetic fools, groveling at the feet of Oogway the Magnificent";
    charImageEl.src = "img/kai.png";
  } else if (name === "mr-ping") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Mr-ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImageEl.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImageEl.src = "img/oogway.png";
  } else if (name === "shen") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "Happiness.. must be taken. And I will take mine.";
    charImageEl.src = "img/shen.png";
  } else if (name === "soothsayer") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Your story may not have a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    charImageEl.src = "img/soothsayer.png";
  } else if (name === "storming-ox") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Storming-ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda . Kung fu is dead.";
    charImageEl.src = "img/storming-ox.png";
  } else if (name === "tai-lung") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Tai-lung";
    charQuoteEl.innerHTML =
      "Whatever I did, I did to make you proud! Tell me how proud you are, Shifu! Tell me! TELL ME!";
    charImageEl.src = "img/tai-lung.png";
  } else if (name === "viper") {
    // console.log("Yes, Monkey is a KF Panda character");
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImageEl.src = "img/viper.png";
  } else {
    // console.log("You didn't type a KF Panda character");
    charNameEl.innerHTML = "???????";
    charQuoteEl.innerHTML = "------------";
    charImageEl.src = "img/question-mark.png";
  }
}

// the end of part 1

// event LIstner
document.getElementById("theme-btn").addEventListener("click", themechange);

// function

function themechange() {
  // input
  let black = "rgb(0, 0, 0, 0.7)";
  let white = "rgb(255,255,255)";
  let theme = document.getElementById("theme-in").value;
  //
  if (theme === "black")
    //
    document.getElementById("change").style.backgroundColor = black;
  document.getElementById("change").style.fontStyle = white;
}
