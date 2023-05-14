// document.getElementById("count-el").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function myLabTime() {
    
//     let toutalTime = lap1 + lap2 + lap3
//     console.log(toutalTime)

// }

// myLabTime()


// let lapsCompleted = 0

// function incrementEachClick() {
//     lapsCompleted = lapsCompleted + 1
    
// }

// incrementEachClick()
// incrementEachClick()
// incrementEachClick()

// console.log(lapsCompleted)

//# riseve user message
// let username = "per"
// let message = "You have tree new notifications"
// let messageUser = message + ", " + username + "!"

// console.log(messageUser)


//## increment function 

let count = 0
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let dashSepartor = count + " - "
    saveEL.textContent += dashSepartor
    countEl.textContent = 0
    count = 0
    
}


console.log("Let's count people on the subway!")
