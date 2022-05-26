// Document Object Mode
// 144.
let secondParagraph = document.getElementById("second")

// console.log(secondParagraph)
let colorChange = document.querySelector("button").style.backgroundColor = "yellow"
console.log(colorChange)

// 145. Seperation of Concerns
// HTML - content, CSS - Style, JS - Behavior
// classList
// Once we have queried the class

let classOfButton = document.querySelector("button").classList.toggle("invisible")
console.log(classOfButton)
classOfButton = document.querySelector("button").classList.toggle("invisible")
console.log(classOfButton)
