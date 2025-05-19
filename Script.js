// const num=12345;
// const str=num.toString();
// const reversed=str.split('').reverse();
// console.log(reversed);

// function forEach(array, callback) { 
//     for (let i = 0; i < array.length; i++) { 
//         callback(array[i]); 
//     } 
// } 
// forEach([2, 5, 8], function(el) { 
//     console.log(el); 
// }); 

// function map(array, callback) { 
//     let result = []; 
//     forEach(array, function(el) { 
//         result.push(callback(el)); 
//     }); 
//     return result; 
// } 
// console.log(map([2, 5, 8], function(el) { 
//     return el + 3;
// })); 
// console.log(map([1, 2, 3, 4, 5], function(el) {
//      return el * 2; 
//     })); 

// function filter(array, callback) { 
//     let result = []; 
//     forEach(array, function(el) { 
//         if (callback(el)) { 
//             result.push(el); 
//         } 
//     }); 
//     return result; 
// } 
// console.log(filter([2, 5, 1, 3, 8, 6], function(el) {
//      return el > 3; 
//     })); 
// console.log(filter([1, 4, 6, 7, 8, 10], function(el) {
//      return el % 2 === 0; 
//     })); 

// function getAdultAppleLovers(data) { 
//     const adultsWhoLoveApples = filter(data, function(person) { 
//         return person.age > 18 && person.favoriteFruit === 'apple'; 
//     }); 
//     return map(adultsWhoLoveApples, function(person) { 
//         return person.name; 
//     }); 
// } 
// const data = [ 
//     { name: 'Bhanu', age: 20, favoriteFruit: 'apple' }, 
//     { name: 'ramu', age: 25, favoriteFruit: 'banana' }, 
//     { name: 'srinu', age: 19, favoriteFruit: 'orange' }, 
//     { name: 'vishnu', age: 16, favoriteFruit: 'mango' } 
// ]; 
// console.log(getAdultAppleLovers(data)); 

// function getKeys(obj) { 
//     let keys = []; 
//     for (let key in obj) { 
//         keys.push(key); 
//     } 
//     return keys; 
// } 
// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 })); 

// function getValues(obj) { 
//     let values = []; 
//     for (let key in obj) { 
//         values.push(obj[key]); 
//     } 
//     return values; 
// } 
// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));



function calculate() {
  const money = parseFloat(document.getElementById("money").value);
  const interestPer100 = parseFloat(document.getElementById("interest").value);
  const years = parseInt(document.getElementById("years").value) || 0;
  const months = parseInt(document.getElementById("months").value) || 0;

  if (isNaN(money) || isNaN(interestPer100)) {
    alert("Please enter valid numbers.");
    return;
  }

  const totalMonths = years * 12 + months;
  const interestPerMonth = (money / 100) * interestPer100;
  const totalInterest = interestPerMonth * totalMonths;

  const totalAmount = money + totalInterest;

  document.getElementById("result").innerHTML = `
    Total Interest: ₹${totalInterest.toFixed(2)}<br>
    Total Amount: ₹${totalAmount.toFixed(2)}
  `;
}
