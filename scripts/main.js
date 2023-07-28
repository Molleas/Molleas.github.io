let h2 = document.querySelector("h2");
h2.textContent = "Hello world!";

alert("hello!");

// document.querySelector("h2").addEventListener("click", function () {
//     alert("我是h2。");
// });

// document.querySelector("html").addEventListener("click", () => {
//     alert("我是html。");
// });

let myImage = document.querySelector("img");

myImage.onclick = function () {
let mySrc = myImage.getAttribute("src");
if (mySrc === "images/icon1.png") {
    myImage.setAttribute("src", "images/icon2.png");
} else {
    myImage.setAttribute("src", "images/icon1.png");
}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
    setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}
