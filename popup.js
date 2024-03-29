if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");

  let buttonOn = false;

  button.addEventListener("click", () => {
    if (!buttonOn) 
    {
      buttonOn = true;

      circle.style.animation = "moveCircleRight 1s forwards";
      button.style.animation = "backgroundYellow 1s forwards";

      chrome.tabs.executeScript({
        file: "appOn.js",
      });
    } 
    else 
    {
      buttonOn = false;
      console.log("false");
      circle.style.animation = "moveCircleLeft 1s forwards";
      button.style.animation = "backgroundBlue 1s forwards";

      chrome.scripting.executeScript({
        file: "appOff.js",
      });
    }
  });
}
