/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?                             javaScript basic problems with documented solution


//TODO                   install better comment extension in vs code for better experience
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//? Different types of variable

var bottleColor = "blue"; /* string type */
var sunglassPrice =200; /* number type */
var isExpensive = true; /* boolean */
var tableArray = ['bottle', 'pen', 'sunglass', 'paper']; /* array type */
var myPhone = { /* object type  */
    ram : '12gb', 
    rom : '64gb',
    price : 20000,
}

//? Array basics (things i wanna do to an array!!!) 

var tableArray = ['bottle', 'pen', 'sunglass', 'paper'];
var item3 = tableArray[3];   /* declared variable for item 3 (paper) of tableArray */
// console.log(item3) 

tableArray[3] = 'book';     /* replaced array index 3 item "paper" with "book" */
// console.log(tableArray); /* now the array output will show ['bottle', 'pen', 'sunglass', 'book']; */

var sunglassPosition = tableArray.indexOf('sunglass') /* using indexOf to get position of "sunglass" in tableArray */
console.log(sunglassPosition)

//? push usage to add element at the end (to add something to the start of an array use roll.unshift(55); )

var roll = [41, 42, 43, 44, 45, 47];
roll.push(55);
// console.log(roll);

//? pop usage to get rid of the last element (to delete something from the start of an array use arrayName.shift() )

var roll = [41, 42, 43, 44, 45, 47];
roll.pop();
// console.log(roll);

//? how to concat arrays

const table = ["book", "pen", "pencil"];
const drawer = ["lighter", "marker"];
const newArray = drawer.concat(table); 
// console.log(newArray);

//? how to delete items from any position of an array

const ages = [12, 30, 77, 55, 88, 22, 99, 56, 13];

const splicedArray = ages.splice(2, 4); /* this will make a new array consisting index 2 to 5 (not index 4 !!!) of og array */
// console.log(splicedArray); 
// console.log(ages); /* note : splice changes the original array */

//?how to add items inside array with splice

const ages = [12, 30, 77, 55, 88, 22, 99, 56, 13];

const splicedArray = ages.splice(1, 3, 69, 44); /* after doing splice it will add the rest items as new items in the array*/
/* note : here 2nd number (3) is the remove count, 69 and 44 are new items to be added  */
// console.log(ages); /* display output will be  12, 69, 44, 88, 22, 99, 56, 13 */

//? While loop why???

// displaying a line of string 7 time

var displayTimes = 0; /* when counting inside loop we must first declare a variable and set it to zero (0) */
while (displayTimes < 7) {
  console.log("Have a nice day"); 
  console.log(displayTimes);
  displayTimes++; /* will increment displayTimes by 1 per loop */
// note : u can also use displayTimes = displayTimes + 1; or displayTimes += 1;
}
//  while loop consist of 4 parts >>>>>>
        // 1.loop variable declaration
        // 2.condition inside while
        // 3.loop body
        // 4.change the loop variable  /* note : otherwise loop will run infinite times*/

//? for supremacy!!!

// printing "Have a nice day" 9 times

//if u wanna use while loop
i=1;
while(i<10){
    console.log("Have a nice day")
    i++;
}

//if u wanna use for loop (recommended in most of the cases)

for(i=1; i<10;i++){
    console.log("Have a nice day")
}

//? if else condition example

// if you have more than 800$ you will buy macbook, if more than 600$ you will buy acer gaming laptop, if more than 400$ you will buy lenovo yoga, Otherwise you will work with the old laptop.

var myBudget = 700 ; /* enter your budget here */

if(myBudget > 800){ /* if you have more than 800$ the if condition will activate and display 'I will buy macbook' */
    console.log('I will buy macbook')
}
else if(myBudget > 600){ 
    console.log('I will buy mac acer gaming laptop')
}
else if(myBudget > 400){
    console.log('I will buy mac lenevo gaming')
}
else{ /* note : when a condition is activated, conditions bellow will not run */
    console.log('I will use the old laptop')
}

//? Usage of break

// run a for loop from 30 to 86. loop will break/stop when it reaches 44

for(i=30; i<=86; i++){
    if (i == 44) { 
        break; 
    }
    console.log(i)
}

//? Usage of continue

// suppose you have an array of books with different prices.make a for loop that shows output of an array with prices equal or bellow 200$.

let books = [50, 600, 300, 250, 180, 400, 200, 201, 199]

for(i = 0; i < books.length; i++){ /* array.lenght means the total number of items in an array. here books.length = 9  */
    book = books[i]
    if ( book > 200){
        continue;
    }
    console.log(book)
}

//? How to show array items serially


let courses = ['html', 'css', 'python', 'javaScript']
for(i=0; i < courses.length; i++){
    courseItem = courses[i] /* declared the value of index i in courseItem variable */
    console.log(courseItem)
}

//? function Basics

function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
    return num1;
    /* note :  after first return bellow code wont run cz it will quit the function, somewhat like break */
  }

  var total = add(11,20)
  console.log('total', total)
  
  
//? more function example

function avgMark(ass1, ass2, ass3) { /* declared avgMark function and 3 variables ass1, ass2, ass3 */
    const total = ass1 + ass2 + ass3;
    const avg = total / 3;
    return avg; /* whatever happens inside function only return value will go outside of function */
  }
  
  let averageMark = avgMark(30, 60, 90); /* called the avgMark function and entered argument 30, 60, 90 the output will be stored in averageMark variable */
  //! note : function will remain inactive if not called
  
  console.log("here is your avg :", averageMark);

  //? Object basics

  var myPhone = { /* myPhone is an object  */
    ram : '12gb', /* here ram is property name and "12gb" is the value*/
    rom : '64gb',
    price : 200,
}
// console.log(myPhone.ram) /* if i want to display the value of ram property inside myPhone object*/

//alternative way

var phoneRom = myPhone["rom"]
// console.log(phoneRom)

//? changing property value

    myPhone.price = 600; /* changing the property value of price */
// console.log(myPhone) /*now it will dsiplay ram : '12gb', rom : '64gb', price : 600 */


var propertiesName = Object.keys(myPhone);
// console.log(propertiesName) /* displaying all property names*/
//! note : keys = object property names 

var propertiesValue = Object.values(myPhone);
// console.log(propertiesValue) /* displaying all property values */

//? using for loop to display object property serially

var myPhone = {
    brand: "mi",
    ram: "12gb",
    rom: "64gb",
    camera: "50mp",
    price: 20000,
  };

const myPhoneKeys = Object.keys(myPhone); /* displaying all property names*/
// console.log(myPhoneKeys);

const myPhoneValues = Object.values(myPhone); /* displaying all property values */
// console.log(myPhoneValues);

for (var i = 0; i < myPhoneKeys.length; i++) {
  console.log(myPhoneKeys[i], "is =", myPhoneValues[i])
}

//? slice usage (cut arrays)

var book = ["math", "phy", "chem", "bio"];

console.log(book.slice(1, 3)); /* it will only display item of index 1 to index 2 (not 3!!!) (phy, chem) */

//? substring usage

var myStr = "Have a nice day";
console.log(myStr.substring(0, 7)); /* only index 0 to 7 characters will be shown (Have a) */
//! note : white space will be counted as a character

//? includes usage

var myStr = "Have a nice day";
console.log(myStr.includes("day")); /* display output will be true which means "day" exist in myStr variable */
 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//?                                                                                              Raihan : 05_02_23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
