const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fruit-basket-2.jpeg") {
    myImage.setAttribute("src", "images/apple.jpeg");
  } else {
    myImage.setAttribute("src", "images/fruit-basket-2.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (myName === null) {
    return; // Exit the function if Cancel is pressed
  }

  if (myName.trim() === "") {
    setUserName(); // Recursively call the function if input is empty
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Have you eaten a fruit today, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Have you eaten a fruit today, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
