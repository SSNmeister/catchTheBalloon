const notification = document.querySelector("#notification");

const aboutGame = document.querySelector("#about");
const instructions = document.querySelector("#instructions");
console.log(instructions);

const easyButton = document.querySelector("#easyButton");
const mediumButton = document.querySelector("#mediumButton");
const hardButton = document.querySelector("#hardButton");

aboutGame.addEventListener("click", () => {
  document.querySelector("#descriptionBox2").innerHTML =
    "Damien a devoted Kung Fu master is tired of Man-kind and the damages man have done to Mother Earth. <br> <br> After years of farming and mining BTC, Damien has saved enough to challenge Elon Musk in building the next generation Green technology. <br> <br> To save Earth, it is vital that Damien catches the Bang Balloon to Austin, Texas, United States...";
});

instructions.addEventListener("click", () => {
  document.querySelector("#descriptionBox2").innerHTML =
    "Help Damien get to the Bang Balloon. <br><br> Legend has it, there are multiple obstacles along the way, avoid them at all cost. <br><br> Use W, A, S, D to control the movement of Damien. <br><br> Good Luck.";
});

easyButton.addEventListener("click", restartGame);
mediumButton.addEventListener("click", restartGameMedium);
hardButton.addEventListener("click", restartGameHard);
