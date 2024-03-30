"use strict";
// 16. More Guests: 
// You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list
let invite = ["Ali ", "Hammad", "Kabir"];
console.log("I found a bigger table for dinner ");
//Adding new guest in biggning of arry
invite.unshift("Rehman");
//adding new guest in middle of array 
invite.splice(Math.floor(invite.length / 2), 0, "Nouman");
//adding new guest end of array 
invite.push("Adeel");
// For each 
invite.forEach(guest1 => {
    console.log(`Hello ${guest1} you are invited for dinner at my home !`);
});
