const cardCode = document.querySelector("#card-code");
const cardName = document.querySelector("#card-name");
const cardHistory = document.querySelector("#card-history");
const confirmBtn = document.querySelector("#confirm-btn");
const cardCvv = document.querySelector("#card-cvv")

let newCardName = document.querySelector("#new-card-name");
let newCardCode = document.querySelector("#new-card-code");
let newCardHistory1 = document.querySelector("#new-card-history1");
let newCardHistory2 = document.querySelector("#new-card-history2");
let newCvv = document.querySelector("#new-cvv");



confirmBtn.addEventListener("click", function(){
    cardName.textContent = newCardName.value;
    cardCode.textContent = newCardCode.value;
    cardHistory.textContent = newCardHistory1.value + "/" + newCardHistory2.value;
    cardCvv.textContent = newCvv.value;
})
