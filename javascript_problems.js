/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?                        javaScript basic problems with documented solution PART - 1


//TODO                   install better comment extension in vs code for better experience
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//? Kilometers to miles converter

function KmToMiles(Km){
    const miles = Km * 0.621371;
    return miles;
}
miles = KmToMiles(3); /* call function will activate the function and send argument 3 to parameter Km and the output will be stored in miles parameter*/
// console.log("Value in miles=", miles);

//? Inch to feet converter

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
feet = inchToFeet(4);
// console.log("Value in feet =", feet,"ft")

//? Check if the number is odd or even and display true if the number is even and false if odd.  

function isEven(num) {
    let output = num % 2; /* we know if a number is divisible by 2 its an even number */
    if (output == 0) {
      return true; /* note : true isnt a string. its boolean */
    } else {
      return false;
    }
  }
  
  let checkEven = isEven(12); 
  // console.log(checkEven);
  
//? Leap year checker (simplified version)

function isLeapYear(year){
    let result = year % 4; 
    if(result == 0){ /* if the reminder is equal to zero (0) it will be leap year */
        return true;
    }
    else{
        return false
    }
}
ans = isLeapYear(2000)
console.log(ans)


//? You will be given Celsius as input. calculate the temperature and convert it to Fahrenheit and return the output

function celsiusToFahrenheit(celsiusValue) {
    let fahrenheit = (celsiusValue * 9) / 5 + 32;
    return fahrenheit;
  }
  
  let result = celsiusToFahrenheit(4);
  console.log(result);
  
  //? Someone will tell you how many marks he got out of 100. Make a function to calculate his grade.
  
  function viewGrade(mark) {
    if (mark >= 80) { /* is equal or greater 80, output = A */
      let grade = "A";
      return grade;
    } else if (mark >= 70) {
      let grade = "B";
      return grade;
    } else if (mark >= 60) {
      let grade = "C";
      return grade;
    } else if (mark >= 50) {
      let grade = "D";
      return grade;
    } else {
      let grade = "F";
      return grade;
    }
  }
  let result = viewGrade(65);
  console.log("Your grade is :", result);
  
  //? For 10% interest rate and 20000$ capital 1no.>> find 1 years profit 2no.>> 1 years total earning
  
  function profitCalculator(ammount, year) {
    let profit = (year * ammount * 10) / 100;
    return profit;
  }
  
  var ammount = 20000;
  var year = 1;
  let profit = profitCalculator(ammount, year);
  // console.log("Your profit :", profit);
  
  let total = profit + ammount;
  // console.log("Total earning :", total);
  
  //? Reverse The String
  
  function reverseString(str){
    var splitString = str.split(""); /* it will split all the characters and give output as an array */
    var reverseArray = splitString.reverse(); /* will reverse every item of the array */
    var joinArray = reverseArray.join(""); /* will join reversed items and convert it to string */
    return joinArray;
  }
  let result = reverseString("goodDay");
  // console.log(result)
  
  //Same thing with arrow function
  
  const reverseString = (str)=>{
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
  let result = reverseString("goodDay");
  // console.log(result)
  

//? how to calculate factorial

function getFactorial(number){
    let total = 1; /* before loop starts we need to declare variable total = 1 .otherwise total will remain undeclared and can not multiply inside loop */
    for(i = 1; number >= i; number--){ /* to create 3! = 3! * 2! * 1! */
        total = total * number ;
    }
    return total;
}

getAns = getFactorial(3)
// console.log(getAns)

//? Case conversion to check user (ignoring uppercase or lowercase)

const userName = "Raihan"
const userInput = "RAIHAN"

if(userName.toLowerCase == userInput.toLowerCase){ /* first it will convert both inputs to lower case and will only enter inside condition if they are the same */
    // console.log("valid user")
}
else{
    // console.log("invalid user")
}

//? checking if a string exist inside another string (ignoring uppercase or lowercase)

const user = "Have a good day"
const lowerCasedUser = user.toLowerCase()
const searchInput = "good" 
const lowerCasedSearched = searchInput.toLowerCase()

const check = lowerCasedUser.includes(lowerCasedSearched)
// console.log(check)

//same thing using indexOf (old method)

const user = "Have a good day"

const search = "good"
if (user.indexOf(search)!== -1 ){ /* if indexOf something is -1 it doesnt exist in the string. so we can say if its not equal to -1 it exists! */
    // console.log("it exist")
}
else{
    // console.log("doesnt exist")
}

//? split string in lines,words or even characters!!

const lyric = "Dear god. the only thing i ask. is to hold her hand when im not around"

const lyricLines = lyric.split(".") /* every line will be an array element */
const lyricWords = lyric.split(" ")     /* every word will be an array element */
const lyricCharacters = lyric.split("") /* every character will be an array element */

// console.log(lyricLines) 
// console.log(lyricWords) 
// console.log(lyricCharacters) 

 //? Sum of an array

 let myNumbers = [12, 78, 99, 66, 11, 45, 53];

function getSumOfArray(numbers) {
    let sum = 0; /* we need to declare a variable to zero before addition inside loop */
    for (let i = 0; i < numbers.length; i++) {
      let index = i; /* declared index/position inside index variable */
      let element = numbers[index] /* called that array item with index position and declared a variable for it */
      sum = sum + element;
    }
    return sum;
  }
  let sum = getSumOfArray(myNumbers)
  // console.log(sum);
  

//? how to get only the odd numbers from an array

function getOddNumber(number) {
    let oddNumbers = []; /* to see output as an array we have to declare a blank array so pushed odd elements can be added */
    for (let i = 0; i < myNumbers.length; i++) {
      const index = i;
      const element = number[index];
      if (element % 2 !== 0) {
        // console.log(index, element);
        oddNumbers.push(element);
      }
    }
    return oddNumbers;
  }
  let myNumbers = [12, 78, 99, 66, 11, 45, 53];
  
  let oddNumbers = getOddNumber(myNumbers);
  // console.log(oddNumbers);

  //? Find the max number in an array

  function maxInArray(number) {
    let largest = number[0]; /* let index 0 item (50) be the largest */
    for (i = 0; i < number.length; i++) { /* created loop to check every item inside array */
      const index = i; /* declared a variable named index to store index/position */
      const element = number[index]; /* declared another variable named element and stored the item respective to that index/position */
      if (element > largest) {/* if the element isnt larger it wont enter this condition*/
        largest = element; 
      }
    }
    return largest;
  }
  const heights = [50, 50, 130, 78, 30, 99, 36];
  const tallest = maxInArray(heights);
  
  // console.log("tallest height is :", tallest);
  
    //? Rearrange lowest to highest number in an array

    let numbers = [8, 7, 4, 1, 99, 10, 30, 22];

    numbers.sort(function (a, b) {
    return a - b;
    });
    // console.log(numbers);

    /* When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

              If the result is negative, a is sorted before b.

              If the result is positive, b is sorted before a.

              If the result is 0, no changes are done with the sort order of the two values. */
  
//? making unique array by removing the duplicates

const table = ["book", "pen", "pencil", "lighter", "marker", "book", "lighter"];

function removeDuplicate(items) {
  const uniqueList = []; /* first we have to declare a blank array so pushed elements can be added */
  for (i = 0; i < items.length; i++) {
    item = items[i];
    if(uniqueList.includes(item)===false){ /* it checks if new item already exist in the array, if not it pushes it to the array*/
        uniqueList.push(item)
    }
  }
  return uniqueList /* most of the cases return is used after the loop ends */
}

const removedList = removeDuplicate(table);
// console.log(removedList);

   //? String reverse with loop (character reverse)

   function reverseString(text) {
    let reversed = ""; /* first declaring an empty string ("") to start with */
    for (let i = text.length - 1; i >= 0; i--) { /* length - 1 because if there are 4 characters in a string last ones position/index is 3 (not 4!!!) */
      const element = text[i];
      reversed = reversed + element;
    }
    return reversed;
  }
  const myString = "Have a nice day!";
  const reversed = reverseString(myString);
  // console.log(reversed)

  //? Word reverse 

  function reversedWord(text) {
    const words = text.split(" "); /* first splitting the string to words.it will generate an array of words */
    let result = []; /* declaring an empty array */
    for (let i = words.length - 1; i >= 0; i--) {
      const element = words[i];
      result.push(element);
    }
    const reversed = result.join(" ");
    return reversed;
  }

  const myString = "Have a nice day!";
  const reversed = reversedWord(myString);
  // console.log(reversed);

  //? Fibonacci series

const fibo = [0, 1];
for (let i = 2 ; i <= 15; i++){ /* starts from 2nd index */
    fibo[i] = fibo[i-1] + fibo[i-2] /* 2nd index item value = 0th item value + 1st item value */
}
console.log(fibo)

//? for 1-50 show  foo, bar, foobar respectively when divisible by 3,5 and both 3 and 5 together

for (i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) { /* && means both conditions must be fulfilled */
      console.log("foobar");
    } else if (i % 3 === 0) {
      console.log("foo");
    } else if (i % 5 === 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
  
 //? Find lowest property value from an object (find the cheapest phone)

 const phones = [
    { brand: "Samsung", camera: "11mp", price: 320 },
    { brand: "Mi", camera: "12mp", price: 110 },
    { brand: "Iphone", camera: "13mp", price: 880 },
    { brand: "Nokia", camera: "14mp", price: 440 },
    { brand: "Vivo", camera: "15mp", price: 550 },
    { brand: "Walton", camera: "16mp", price: 660 },
    { brand: "Nuvia", camera: "17mp", price: 760 },
  ];
  
  function findCheap(phones){
    let cheapest = phones[0]; /* suppose first item (price: 320) is the cheapest  */
    for (let index = 0; index < phones.length; index++) {
      const phone = phones[index];
      if(phone.price < cheapest.price){
        cheapest = phone;
      }
    }
    return cheapest;
  }
  myselection = findCheap(phones);
  // console.log(myselection);


  //?shopping cart total price with quantity

  const shoppingCart = [
    { name: "shirt", price: 2200, quantity : 3 },
    { name: "pant", price: 1200, quantity : 5 },
    { name: "belt", price: 200, quantity : 2 },
    { name: "shoe", price: 3200, quantity : 4 },
    { name: "hat", price: 3000, quantity : 1 },
  ];
  
  function totalCost(shoppingTotal) {
    let total = 0;
    for (let index = 0; index < shoppingTotal.length; index++) {
      const product = shoppingTotal[index];
      total = total + product.price * product.quantity;
      console.log(product);
    }
    return total;
  }
  let priceTotal = totalCost(shoppingCart);
  // console.log("Total price is :", priceTotal);
  
  //?ticket price cost calculation
  //first 100 ---> 100$ per ticket
  //next 101-200 ----> 90$ per ticket
  //rest 200+ -----------> 70$ per ticket

function ticketPrice(number) {
  const first100Price = 100;
  const next100Price = 90;
  const lastRestPrice = 70;

  if (number <= 100) {
    total = number * first100Price;
    return total;
  } else if (number <= 200) {
    total = 100 * first100Price + (number - 100) * next100Price;
    return total;
  } else {
    total = 100 * first100Price + 100 * next100Price + (number - 200) * lastRestPrice;
    return total;
  }
}

let totalAmmount = ticketPrice(300);
console.log(totalAmmount);

//? find the largest of two names in reverse order

function reverseName(nameOne, nameTwo) {
  let nameOneLength = nameOne.length;
  let nameTwoLength = nameTwo.length;
  let largeName = "";
  if (nameOneLength > nameTwoLength) {
    largeName = nameOne;
  } else {
    largeName = nameTwo;
  }
  let reversedString = ""; /* created an empty string to add reversed characters */
  for (let i = largeName.length - 1; i >= 0; i--) {
    const element = largeName[i];
    reversedString = reversedString + element; /* it wont create any whitespace */
  }
  return reversedString;
}

let result = reverseName("VenoGopalAiaaal", "Alexis");
console.log(result);


//? Radian to degree converter

function radianToDegree(radian) {
if (typeof radian != "number") { /* if data type isnt number this condition will activate */
  return "Provide valid input";
}
const PI = 3.14159265359;
const degree = (radian * (180 / PI)).toFixed(2); /* used tofixed() to get 2 decimal value */
return degree;
}
let output = radianToDegree(10);
console.log(output);

//? checking file format/extension

function isJavaScriptFile(fileName){
  if(typeof fileName != 'string' || fileName.length == 0){
      return "Provide valid input" ;
  }
 if(fileName.endsWith('.js')){/* use .endsWith() to check from the end of an string */
  return true;
 }else{
 return false;
 }
}
let output = isJavaScriptFile("randomJavaScriptFile.js")
console.log(output)

//? Count numbers greater than 5 inside an array

function greaterThanFive(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
        count = count + 1
    }

  }
  return count;
}

let result = greaterThanFive([-1, 9, -3, 4, 5, 6, -7, 8, -9, 10]);
// console.log(result);

//?Name the function oilPrice. This function takes three parameters.

// If price of diesel per liter  –-> 9$
// if Price of petrol per liter –-> 13$
// if price of octane per liter  –-> 15$

// Now if he orders different liters of diesel, petrol, octane, then the total cost will be returned.

function oilPrice(d, p, o) {
  let disselPrice = 9 * d;
  let petrolPrice = 13 * p;
  let octanePrice = 15 * o;
  return disselPrice + petrolPrice + octanePrice;
}
result = oilPrice(5,3,1);
// console.log(result);

//? Problem: Bus ticket price calculation

// A large number of people (50 or more) will go on a picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. Each bus has a capacity of 50 people and each microbus has a capacity of 11 people and each public bus ticket costs 25$. If there are less than 11 people in the microbus, the microbus cannot go. Now you have to write a function called publicBusFare which will take a number (how many passengers) as a parameter. It will return you the total amount of public bus fare.

//case 1 : If 117 people go for picnic then we need 2 buses and 1 microbus. The rest of the people will go by public bus. The total public bus fare for these few people should be returned.

function publicBusFare(participants){
  if (participants !== "number" && participants <50){
      return "Provide valid participants number..."
  }
  let remaining = participants % 50;
  remaining = remaining % 11; /* initial value of remaining will change */
  return remaining*250 ;
}
result = publicBusFare(365);
// console.log(result);



//? Problem:  isBestFriend
// You need to write a function isBestFriend that takes two objects as parameters. You have to see if these two are each other's best friend. If they are best friend then it will return true, otherwise it will return false.

// case 1 :
let obj1 = { name: "Bruce", friend: "Conor" };
let obj2 = { name: "Conor", friend: "Bruce" };

// case 2 :
// let obj1 = { name: "Bruce", friend: "Cris" };
// let obj2 = { name: "Cris", friend: "Tony" };


function isBestFriend(obj1, obj2) {
if (obj1.name == obj2.friend && obj2.name == obj1.friend) { /* crosschecking between object 1 and object 2 */
  return true;
} else {
  return false;
}
}

let result = isBestFriend(obj1, obj2);
// console.log(result);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?                                                                                              Raihan : 06_02_23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
