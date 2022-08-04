// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    const pennyImage = document.querySelector('img')
    const flipButton = document.querySelector("#flip")
    const clearButton = document.querySelector("#clear")
    let numHead = 0
    let numTail = 0
    let numTotal = 0
    let headPercent = 0
    let tailPercent = 0

    const headsTd = document.querySelector("#heads")
    const headsPercentTd = document.querySelector("#heads-percent")
    const tailsTd = document.querySelector("#tails")
    const tailsPercentTd = document.querySelector("#tails-percent")


    // Flip Button Click Handler
    // TODO: Determine flip outcome
    flipButton.addEventListener('click', function () {
        let pennyFace = Math.random()
        if (pennyFace >= 0.5) {
            numHead = numHead + 1
            pennyImage.setAttribute('src', 'assets/images/penny-heads.jpg')

            headsTd.textContent = numHead
            numTotal = numTotal + 1

        }
        else {
            pennyImage.setAttribute('src', 'assets/images/penny-tails.jpg')
            numTail = numTail + 1
            tailsTd.textContent = numTail
            numTotal = numTotal + 1
            tailPercent = numTail / numTotal * 100
            tailsPercentTd.textContent = `${tailPercent}%`
        }
        headPercent = numHead / numTotal * 100
        headsPercentTd.textContent = `${headPercent}%`
        tailPercent = numTail / numTotal * 100
        tailsPercentTd.textContent = `${tailPercent}%`
    });
    // TODO: Update image and status message in the DOM

    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell


    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    clearButton.addEventListener('click', function () {
        pennyImage.setAttribute('src', 'assets/images/penny-heads.jpg')
        numHead = 0
        numTail = 0
        numTotal = 0
        headPercent = 0
        tailPercent = 0
        headsTd.textContent = 0
        headsPercentTd.textContent = '0%'
        tailsTd.textContent = 0
        tailsPercentTd.textContent = '0%'


    })
})