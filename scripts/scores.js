

let redScore=document.getElementById("red_score");
let redAdd5=document.getElementById("red_add5");
let redAdd1=document.getElementById("red_add1");
let redMinus1=document.getElementById("red_minus1");
let redTotal=0;
redScore.textContent=redTotal;

let purpleScore=document.getElementById("purple_score");
let purpleAdd5=document.getElementById("purple_add5");
let purpleAdd1=document.getElementById("purple_add1");
let purpleMinus1=document.getElementById("purple_minus1");
let purpleTotal=0;
purpleScore.textContent=purpleTotal;

let greenScore=document.getElementById("green_score");
let greenAdd5=document.getElementById("green_add5");
let greenAdd1=document.getElementById("green_add1");
let greenMinus1=document.getElementById("green_minus1");
let greenTotal=0;
greenScore.textContent=greenTotal;

function changeScore(totalValue,n) {
  totalValue=totalValue+n
  return totalValue
}

redAdd5.addEventListener("click",() => {
  redTotal=changeScore(redTotal,5)
  redScore.textContent=redTotal
});
redAdd1.addEventListener("click",() => {
  redTotal=changeScore(redTotal,1)
  redScore.textContent=redTotal
});
redMinus1.addEventListener("click",() => {
  redTotal=changeScore(redTotal,-1)
  redScore.textContent=redTotal
});

purpleAdd5.addEventListener("click",() => {
  purpleTotal=changeScore(purpleTotal,5)
  purpleScore.textContent=purpleTotal
});
purpleAdd1.addEventListener("click",() => {
  purpleTotal=changeScore(purpleTotal,1)
  purpleScore.textContent=purpleTotal
});
purpleMinus1.addEventListener("click",() => {
  purpleTotal=changeScore(purpleTotal,-1)
  purpleScore.textContent=purpleTotal
});

greenAdd5.addEventListener("click",() => {
  greenTotal=changeScore(greenTotal,5)
  greenScore.textContent=greenTotal
});
greenAdd1.addEventListener("click",() => {
  greenTotal=changeScore(greenTotal,1)
  greenScore.textContent=greenTotal
});
greenMinus1.addEventListener("click",() => {
  greenTotal=changeScore(greenTotal,-1)
  greenScore.textContent=greenTotal
});





