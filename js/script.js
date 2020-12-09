/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
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

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const pages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
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