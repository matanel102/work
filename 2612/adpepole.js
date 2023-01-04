import { pepole } from "./pepole.js";
import { pepoleStorge } from "./pestorge.js";
import { LocalStorage } from "./deletp.js";



let pepoleEdd = document.getElementById('btn');
pepoleEdd.addEventListener('click', () => {
  let namaPepole = document.getElementById('namepepole').value;
  let email = document.getElementById('email').value;
  let IPonhe = document.getElementById('iphone').value;
  let newpepole = new pepole(namaPepole, email, IPonhe);
  let newStorage = new pepoleStorge();
  newStorage.archive.push(newpepole);
  newStorage.updateArchive();
  console.log(newStorage.archive);
});





let form = document.getElementById('form-container');
let outputi = document.getElementById('output');
 form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
      let element = formElements[i];
      let p = document.createElement('p');
      p.innerHTML = `${element.name} ${element.value}`;
    outputi.style.backgroundColor="red";
      // location.reload();
      outputi.appendChild(p);
    }
  });

 
 
 let output = document.getElementById('outputlocal');
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let p = document.createElement('p');
    p.innerHTML = `${key}: ${value}`;
    output.appendChild(p);
  }


  // Create a button element
var editButton = document.createElement("button");

// Set the button text
editButton.innerHTML = "Edit Customer Details";

// Append the button to the page
document.body.appendChild(editButton);

// Add an event listener to the button
editButton.addEventListener("click", function() {
  // Change the customer details
  // For example, you might get the customer details from a form or from an API call

  // Then, you can use the DOM API to update the customer details in the page
  document.getElementById("namepepole").innerHTML = namepepole;
  document.getElementById("email").innerHTML = email;
  document.getElementById("iphone").innerHTML = iphone;
});
