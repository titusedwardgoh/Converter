const inputNumber = document.querySelector("input")
const convertBtn = document.getElementById("convert-button")
const lengthDes = document.getElementById("length-des")
const volumeDes = document.getElementById("volume-des")
const massDes = document.getElementById("mass-des")

convertBtn.addEventListener("click",()=> {convertUnits(inputNumber.value)})

function convertUnits(inputValue) {
    let lengthString = `${inputValue} meters = ${(inputValue*3.28084).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.28084).toFixed(3)} meters`
    lengthDes.textContent=lengthString
    
    let volString = `${inputValue} liters = ${(inputValue*3.78541).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/3.78541).toFixed(3)} liters`
    volumeDes.textContent = volString
    
    let massString = `${inputValue} kilos = ${(inputValue*2.20462).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.20462).toFixed(3)} kilos`
    massDes.textContent = massString
}


