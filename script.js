// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

let arr = [
    ["Ayesha", "Khan"],
    ["Faraz", "Khan"]
  ];

  for(let i = 0; i < arr.length; i++){
      document.write(arr[i].join(' ')  + "<br>");
    }
    
    document.write("<hr>");

//   2. Declare and initialize a multidimensional array representing the following matrix:

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(' ') + '<br>');
}

document.write("<hr>");

// 3. Write a program to print numeric counting from 1 to 10.

let numericNumber = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numericNumber.length; i++) {
    document.write(numericNumber[i] + "</br>")
}
document.write("<hr>");

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

let userTable = +prompt("Enter a number to show its multiplication table.");
let lengthTable = +prompt("Enter length multiplication table.");

for(let i = 1; i <= lengthTable; i++) {
    document.write(`${userTable} x ${i} = ${userTable*i} <br>`);
}

// 5. Write a program to print items of the following array using 
// for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i = 0; i < fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

document.write("<hr>");


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20kF

document.write(`Counting :  <br>`);
for(i = 1;  i <= 15; i++){
    document.write(i + ",");
}
document.write("<br>");
document.write("<br>");

document.write(`Reverse Counting :  <br>`);
for(i = 10;  i >= 1; i--){
    document.write(i + ",");
}
document.write("<br>");
document.write("<br>");

document.write(`Odd :  <br>`);
for(i = 0;  i <= 20; i += 2){
    document.write(i + ",");
}
document.write("<br>");
document.write("<br>");

document.write(`Even :  <br>`);
for(i = 1;  i <= 20; i += 2){
    document.write(i + ",");
}
document.write("<br>");
document.write("<br>");

document.write(`Series :  <br>`);
for(i = 2;  i <= 20; i += 2){
    document.write(i + "k" + ",");
}
document.write("<br>");
document.write("<br>");

document.write("<hr>");


// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. Example:


let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let user = prompt("Welcome to Ayesha Khan Bakery. What do you want to order sir/ma'am?");
let found = false;

for(let i = 0; i < bakeryItems.length; i++){
    if(user.toLowerCase() === bakeryItems[i].toLowerCase()) {
     alert(`${user} is available at index ${i} in our bakery`);
     found = true;
     break;
    }
}
if (!found){
    alert(`We are sorry. ${user} is not available in our bakery.`);
}

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

let item = [24, 53, 78, 91, 12];
document.write(`Arrays items: ${item} <br>`);

let largestNumber = Math.max(...item);
document.write(`The largest number is ${largestNumber}`);

document.write("<hr>");



// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

let item1 = [24, 53, 78, 91, 12];
document.write(`Arrays items: ${item} <br>`);

let smalleststNumber1 = Math.min(...item);
document.write(`The smallest number is ${smalleststNumber1}`);

document.write("<hr>");


// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("");
for (i = 5; i <= 100; i++){
if(i % 5 === 0){
    document.write(i + " ")
}
}