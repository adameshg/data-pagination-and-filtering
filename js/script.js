// Declare variables
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
const filter = document.getElementById('search');

// Creates and displays items on a page
function showPage(list, page) {
   // First list item to be displayed
   const startIndex = (page * 9) - 9;
   // Last list item to be displayed
   const endIndex = page * 9;
   // Generates HTML for student cards
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.innerHTML += `
         <li class="student-item">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="${list[i].name.first} ${list[i].name.last}">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <p class="email">${list[i].email}</p>
            </div>
            <div>
               <p class="date">Joined ${list[i].registered.date}</p>
            </div>
         </li>
      `;
      }
   }
}

// Creates and displays pagination buttons
function addPagination(list) {
   /* Determines number of pagination buttons by dividing number of data 
   points by number of items per page */
   const pages = Math.ceil(list.length / 9);
   
   // Generates HTML for pagination buttons
   linkList.innerHTML = '';
   for (let i = 1; i <= pages; i++) {
      linkList.innerHTML += `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
   }
}

// Call functions
showPage(data, 1);
addPagination(data);

// Sets class of first page button to 'active'
document.querySelector('button').className = 'active';

// Sets button class to 'active' when clicked
function setActive(event) {
   // Clears 'active' class from any previously active button
   for (let i = 0; i < document.querySelectorAll('.link-list button').length; i++) {
      document.querySelectorAll('.link-list button')[i].classList.remove('active');
   }
   // Attaches 'active' class only to event target
   const click = event.target;
   click.classList.add('active');
}

// Updates page content when button is clicked
linkList.addEventListener('click', event => {
   /* Tests if target is a button within '.link-list' ul;
   If truthy, changes items listed to corresponding page number and sets
   clicked button class to 'active' */
   if (event.target.nodeName === 'BUTTON') {
      showPage(data, `${event.target.innerHTML}`);
      setActive(event);
   }
})

// Creates and displays search bar
document.querySelector('header').innerHTML += `
<label for="search" class="student-search">
   <input type="search" id="search" placeholder="Search by name...">
   <button type="button" onkeyup="searchBar()"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`;

// Filters results from search bar input
function searchBar() {
   const li = document.getElementById('student-list').getElementsByTagName('li');
   const filterName = filter.value.toUpperCase();

   for (let i = 0; i < li.length; i++) {
      let name = li[i].children[0].children[1].innerHTML;
      if (name.toUpperCase().includes(filterName)) {
         li[i].style.display = '';
      } else {
         li[i].style.display = 'none';
      }
   }
}

filter.addEventListener('keyup', searchBar);