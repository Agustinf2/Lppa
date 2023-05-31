function add3Points () {
    myPoints = myPoints + 3
}
function remove1Point(){
    myPoints = myPoints - 1
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
function add(){
    console.log("button clicked")
    let suma = num1 + num2
    sumEl.textContent = suma
    //sumEl.innerText = num1 + num2
}

function subtract(){
    console.log("button clicked") 
    let resta = num1 - num2  
    sumEl.textContent = resta
    //sumEl.innerText = num1 - num2
}