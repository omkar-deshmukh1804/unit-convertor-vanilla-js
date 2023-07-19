/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector(".numeric--input")
const convertBtn = document.querySelector(".convert--btn")
const convertText1 = document.querySelector(".convert--text1")
const convertText2 = document.querySelector(".convert--text2")
const convertText3 = document.querySelector(".convert--text3")
const errorEl = document.querySelector(".error--message")
const footerEl = document.querySelector(".footer--container")
const modeBtn = document.querySelector("#checkbox")
const displayConEl = document.querySelector(".display--conversion")
const card1El = document.querySelector(".convert--card1")
const card2El = document.querySelector(".convert--card2")
const card3El = document.querySelector(".convert--card3")
const heading1El = document.querySelector(".convert--heading1")
const heading2El = document.querySelector(".convert--heading2")
const heading3El = document.querySelector(".convert--heading3")
const subHeading1El = document.querySelector(".convert--text1")
const subHeading2El = document.querySelector(".convert--text2")
const subHeading3El = document.querySelector(".convert--text3")
const authorEl = document.querySelector(".author--name")

modeBtn.addEventListener("click", function(){
    displayConEl.classList.toggle("dark--mode--bgc1")
    card1El.classList.toggle("dark--mode--bgc2")
    card2El.classList.toggle("dark--mode--bgc2")
    card3El.classList.toggle("dark--mode--bgc2")
    
    heading1El.classList.toggle("dark--mode--heading")
    heading2El.classList.toggle("dark--mode--heading")
    heading3El.classList.toggle("dark--mode--heading")
    
    subHeading1El.classList.toggle("dark--mode--subheading")
    subHeading2El.classList.toggle("dark--mode--subheading")
    subHeading3El.classList.toggle("dark--mode--subheading")
    
    footerEl.classList.toggle("dark--mode--bgc1")
    authorEl.classList.toggle("dark--mode--subheading")
})
    
convertBtn.addEventListener("click", function(){
    let inputVal = inputEl.value
    let meters = 0 
    let feet = 0
    let liters = 0
    let gallons = 0
    let kilos = 0
    let pounds = 0
    let finalText1 = ""
    let finalText2 = ""
    let finalText3 = ""
    var reg = new RegExp('^[0-9]+$')
    
    let errorCheck = reg.test(inputVal)
    
    if(!errorCheck){
        errorEl.style.display="inline-block"
        finalText1 = ` meters =  feet |  feet =  meters`
        finalText2 = ` liters =  gallons |  gallons =  liters`
        finalText3 = ` kilos =  pounds |  pounds =  kilos`
    }
    else{
        
        errorEl.style.display="none"
        
        feet = (inputVal * 3.281).toFixed(3)
        meters = (inputVal / 3.281).toFixed(3)
        
        liters = (inputVal * 0.264).toFixed(3)
        gallons = (inputVal / 0.264).toFixed(3)
        
        kilos = (inputVal * 2.204).toFixed(3)
        pounds = (inputVal / 2.204).toFixed(3)

        finalText1 = `${inputVal} meters = ${feet} feet | ${inputVal} feet = ${meters} meters`
        finalText2 = `${inputVal} liters = ${gallons} gallons | ${inputVal} gallons = ${liters} liters`
        finalText3 = `${inputVal} kilos = ${pounds} pounds | ${inputVal} pounds = ${kilos} kilos`
         
    } 
    
        convertText1.textContent =  finalText1
        convertText2.textContent =  finalText2
        convertText3.textContent =  finalText3     
})
