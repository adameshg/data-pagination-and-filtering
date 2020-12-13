// Declare variables
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

// Creates and displays search bar
document.querySelector('header').innerHTML += `
<label for="search" class="student-search">
   <input type="search" id="search" placeholder="Search by name...">
   <button type="button" onkeyup="searchBar()"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`;

// Declare variable to store search bar
const filter = document.getElementById('search');

let searchTerm = '';

filter.addEventListener('input', event => {
   searchTerm = event.target.value;
   (showPage(data, 1));
});

// Creates and displays items on a page; creates search filter functionality
function showPage(list, page) {
   
   // First list item to be displayed
   const startIndex = (page * 9) - 9;
   
   // Last list item to be displayed
   const endIndex = page * 9;
   
   // Generates HTML for student cards
   studentList.innerHTML = '';

   // Loops through student data at multiples of 9, per page limit
   list
   .filter(student =>
      student.name.first.toUpperCase().includes(searchTerm.toUpperCase())
   )
   .forEach((student, i) => {
      if (i >= startIndex && i < endIndex) {
         studentList.innerHTML += `
         <li class="student-item">
            <div class="student-details">
               <img class="avatar" src="${student.picture.large}" alt="${student.name.first} ${student.name.last}">
               <h3>${student.name.first} ${student.name.last}</h3>
               <p class="email">${student.email}</p>
            </div>
            <div>
               <p class="date">Joined ${student.registered.date}</p>
            </div>
         </li>
      `;
      }
   });
}

/* Creates and displays pagination buttons by dividing
number of data points by number of items per page */
function addPagination(list) {
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