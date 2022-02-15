"use strict";
//const totalAmount = document.querySelector(".total");
/*const limeColaBtn = document.querySelector(".lime-cola-btn");

const peanutsBtn = document.querySelector(".peants-btn");
const chocolatebtn = document.querySelector(".chocolate-btn");
const gummiesbtn = document.querySelector(".gummies-btn");


let total = 0;

/*limeColaBtn.addEventListener("click", () => {
  total += 2;
  totalAmount.textContent = `Total: ${total.toFixed(2)}`;
  console.log(total);
});
peanutsBtn.addEventListener("click", () => {
  total += 3;
  totalAmount.textContent = `Total: ${total.toFixed(2)}`;
  console.log(total);
});
chocolatebtn.addEventListener("click", () => {
  total += 4;
  totalAmount.textContent = `Total: ${total.toFixed(2)}`;
  console.log(total);
});
gummiesbtn.addEventListener("click", () => {
  total += 6;
  totalAmount.textContent = `Total: ${total.toFixed(2)}`;
  console.log(total);
});*/

const totalParagraph = document.querySelector(".total");

const snackButtons = document.querySelectorAll(".snack-button");
let total = 0;

console.dir(totalParagraph);

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    total += parseInt(cost);
    console.log(total);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

//Make Money
const form = document.querySelector(".two form");
const bank = document.querySelector(".bank");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});
