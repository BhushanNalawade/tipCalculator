/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');



// Get number of people from number of people div

let numberOfpeople = Number(numberOfPeopleDiv.innerText);
// const Bill = Number(billTotalInput.innerText);
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  // console.log(numberOfpeople);
  // console.log(billInput.value);
  let Bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  let tipPercentage = Number(tipInput.value)/100;
  // console.log(tipPercentage);

  // get the total tip amount
  let Total = (Bill * tipPercentage) + Bill;
  // const perPerson = Total + tipPercentage; 
  console.log(Total );

  // calculate the total (tip amount + bill)
  
   let perPersonTotal = Total/numberOfpeople;
  console.log({perPersonTotal});
  // calculate the per person total (total divided by number of people)

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`;
  // const perPersonTotal = (Total/numberOfpeople);
  // console.log(perPersonTotal);
  // update the perPersonTotal on DOM & show it to user

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
    
    numberOfpeople += 1;
  // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfpeople;

  // calculate the bill based on the new number of people
      calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfpeople <=1){
      return ;
    }
  numberOfpeople -= 1;
  // decrement the amount of people
    numberOfPeopleDiv.innerText = numberOfpeople;

  // update the DOM with the new number of people
    calculateBill();

  // calculate the bill based on the new number of people

}