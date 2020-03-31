
var submit = document.getElementById("submit1");
submit.addEventListener('click', manager)
var totalinc;
var totalexp;
var totalbal;


var income = document.querySelector("#inc");
var expenditure = document.querySelector("#exp");
var balance = document.querySelector("#bal");

function manager() {
  var salary = Number(document.querySelector("#salary").value);
  var other =  Number(document.querySelector("#other").value);
  totalinc = salary + other;
  income.innerHTML = totalinc;
  var food =   Number(document.querySelector("#food").value);
  var rent =   Number(document.querySelector("#rent").value);
  var travel=  Number(document.querySelector("#travel").value);
  var gym =    Number(document.querySelector("#gym").value);


  totalexp = food + rent + travel + gym;
  expenditure.innerHTML = totalexp
   totalbal = totalinc - totalexp;
   balance.innerHTML = totalbal;
}