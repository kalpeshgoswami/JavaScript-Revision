// let Hello = document.getElementById("hello");

// Hello.textContent = "this is change updated"


const paragraph = document.getElementsByClassName("paragraph");

paragraph[0].textContent = "This is changed first paragraph";
paragraph[1].textContent = "second paragraph changed";


let Heading = document.querySelector(".heading");
Heading.textContent = "change by querySelector";


let text = document.querySelectorAll(".heading");
text.textContent = "change by querySelectorAll";

text.forEach((element) => {
    element.textContent = "change by querySelectorAll";
});


let button = document.getElementById("btn");

button.addEventListener("click", () => {
    button.textContent = "Okay Done"
});
