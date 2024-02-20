let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let totalEl = document.getElementById("total-el")
let count = 0
let totalCount = 0 


function increment() {
    count = count + 1
    countEl.textContent= count
    console.log(count)
    
    
}

function save() {
    let countStr = count + " " + "-" 
    saveEl.textContent += countStr
    saveEl.textContent + 0
    count=0
    
    
}

function totalincrement () {
    
    totalCount = totalCount+1 
    totalEl.textContent=totalCount

}
