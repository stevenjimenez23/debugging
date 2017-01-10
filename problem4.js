var namespace = "http://www.w3.org/2000/svg"

var canvas = document.getElementById("problem-four-canvas")

// Create a circle and add it to the canvas.
var shape = document.createElementNS(namespace, "circle")
myFirstShape.setAttribute("cx", 100)
myFirstShape.setAttribute("cy", 100)
myFirstShape.setAttribute("r", 50)
myFirstShape.setAttribute("fill", "indigo")
canvas.appendChild(myFirstShape)


// Create a rectangle and add it to the canvas.
var mySecondShape = document.createElementById(namespace, "rect")
mySecondShape.setAttribute("x", 100)
mySecondShape.setAttribute("y", 40)
mySecondShape.setAttribute("width", 70)
mySecondShape.setAttribute("height", 70)
mySecondShape.setAttribute("fill", "purple")
canvas.appendChild(mySecondShape)
