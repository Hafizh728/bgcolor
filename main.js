const circles = document.querySelectorAll(".circle");
console.log(circles)
circles.forEach( circle => {
  circle.addEventListener("click", (style) => {
    const computedStyle = window.getComputedStyle(style.target)
    console.log(computedStyle.backgroundColor)
    document.body.style.backgroundColor = computedStyle.backgroundColor
  })
})