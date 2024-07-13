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


document.addEventListener('DOMContentLoaded', function() {
  var searchBtn = document.querySelector('[data-search-btn]');
  var searchResults = document.getElementById('searchResults');

  searchBtn.addEventListener('click', function() {
      var searchTerm = ''; // Initialize search term

      // Get the input value or use some other way to get the search term
      // For simplicity, let's assume there's an input field with id 'searchInput'
      var inputField = document.getElementById('searchInput');
      if (inputField) {
          searchTerm = inputField.value.trim();
      }

      if (searchTerm !== '') {
          searchMealByName(searchTerm);
      } else {
          displayErrorMessage('Please enter a food name to search.');
      }
  });

  function searchMealByName(name) {
      //var apiKey = 'YOUR_API_KEY'; // Replace with your TheMealDB API key
      var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

      fetch(url)
          .then(function(response) {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(function(data) {
              if (data.meals) {
                  displaySearchResults(data.meals);
              } else {
                  displayErrorMessage('No meals found. Please try again.');
              }
          })
          .catch(function(error) {
              console.error('Error fetching data:', error);
              displayErrorMessage('Error fetching data. Please try again later.');
          });
  }

  function displaySearchResults(meals) {
      searchResults.innerHTML = ''; // Clear previous results

      meals.forEach(function(meal) {
          var mealName = meal.strMeal;
          var mealImage = meal.strMealThumb;
          var mealId = meal.idMeal;

          var mealElement = `
              <div class="meal">
                  <h3>${mealName}</h3>
                  <img src="${mealImage}" alt="${mealName}">
                  <p>Meal ID: ${mealId}</p>
              </div>
          `;

          searchResults.innerHTML += mealElement;
      });
  }

  function displayErrorMessage(message) {
      searchResults.innerHTML = `<p class="error">${message}</p>`;
  }
});
