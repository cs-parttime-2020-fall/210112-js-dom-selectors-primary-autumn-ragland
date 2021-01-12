console.log("21 01 12 JS DOM Selectors Primary"); // sanity check

let userList = []; // defined empty array for user prompt response
let userItem = prompt("Enter an item to add to the list.\nAdd up tp 5 items or enter q to quit."); // prompted user to enter items
// if the user did not enter q and the list has under five items
while(userItem != "q" && userList.length < 5){
    // add the user entered item to the list
    userList.push(userItem);
    // check to get rid of additional prompt
    if(userList.length != 5){
        // update the value of user item
        userItem = prompt("Enter an item to add to the list.\nAdd up tp 5 items or enter q to quit.");
    }
}
// userList.forEach(item => console.log(item)); // check to make sure that items are added to user list

// selected the unordered list from thew second card
let itemList = document.querySelector(".list-group"); 
// console.log(itemList); // check to make sure selected correct element

// if items in array
if(userList.length > 0){
    // append li to ul using a for each
    userList.forEach(item => itemList.innerHTML += `<li class="list-group-item">${item}</li>`);
} else { // if no items
    // add one li to ul with message
    itemList.innerHTML = `<li class="list-group-item">The user did not enter any items</li>`
}