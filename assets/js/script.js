'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});


// document.addEventListener('DOMContentLoaded', function() {
//   // Fetch meal details from TheMealDB API
//   fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771')
//       .then(response => response.json())
//       .then(data => {
//           const meal = data.meals[0];
//           renderMeal(meal);
//       })
//       .catch(error => {
//           console.error('Error fetching meal details:', error);
//       });

//   // Function to render meal details
//   function renderMeal(meal) {
//       const mealContainer = document.getElementById('mealDetails');

//       // Create HTML structure for meal details
//       const html = `
//           <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
//           <h2 class="meal-title">${meal.strMeal}</h2>

//           <div class="meal-ingredients">
//               <h3>Ingredients:</h3>
//               <ul>
//                   ${renderIngredients(meal)}
//               </ul>
//           </div>

//           <div class="meal-instructions">
//               <h3>Instructions:</h3>
//               <p>${meal.strInstructions}</p>
//           </div>

//           <div class="source-link">
//               <a href="${meal.strYoutube}" target="_blank">Watch the recipe video</a>
//           </div>
//       `;

//       // Insert the HTML into the container
//       mealContainer.innerHTML = html;
//   }

//   // Function to render ingredients list
//   function renderIngredients(meal) {
//       let ingredients = '';
//       // Loop through ingredients from strIngredient1 to strIngredient20
//       for (let i = 1; i <= 20; i++) {
//           const ingredient = meal[`strIngredient${i}`];
//           const measure = meal[`strMeasure${i}`];

//           if (ingredient && ingredient.trim() !== '') {
//               ingredients += `<li>${measure} ${ingredient}</li>`;
//           }
//       }
//       return ingredients;
//   }
// });