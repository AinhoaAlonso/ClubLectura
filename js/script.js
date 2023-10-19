console.log("ok enlazado")
"use strict";

const addName = document.querySelector("#name");
const addSurname = document.querySelector("#surname");
//const addage = document.querySelector("#age");
//const addoccupation  = document.querySelector("#occupation");
//const adddateStart = document.querySelector("#startdate");
//const validityDate = document.querySelector("#validity-date");
//const preferred = document.querySelector ("#preferred");
const addCard= document.querySelector("#addcard");

const mainCarnets = document.querySelector("#main-carnets");
const titleContainer = document.querySelector("#title-container");
const cardForm = document.querySelector("#cardform");



// Creo un array que va a almacenar los datos de mis carnets generados//
let cardArray = [];

// Obtener los datos del Local Storage al cargar la página
window.addEventListener("load", () => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      cardArray = JSON.parse(storedCards);
      cardArray.forEach((cardData) => {
        createCardElement(cardData);
      });
    }
  });

// crear elementos en el DOM
const createCardElement = (cardData) =>{

    const dataContainer = document.createElement('div');
    dataContainer.classList.add("data-container");


    const nameDescription = document.createElement('div');
    nameDescription.classList.add("name-description");
    nameDescription.textContent = cardData.value;

    const surnameDescription = document.createElement('div');
    surnameDescription.classList.add("surname-description");
    surnameDescription.textContent = cardData.description;



    mainCarnets.appendChild(dataContainer);
    dataContainer.appendChild(nameDescription);
    dataContainer.appendChild(surnameDescription);

    
} 

// Añadir nuevo carnet desde campo de texto

addCard.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = addName.value;
    const surnamevalue = addSurname.value;

    if (!value) return; 
   
    const cardData = {
        id: cardArray.length,
        name: name,
        surname: surname,
      };
      
      cardArray.push(cardData);

     
      localStorage.setItem("cards", JSON.stringify(cardArray));

      createCardElement(cardData);

      cardForm.reset();


})