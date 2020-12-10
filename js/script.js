
// Creates and displays items on a page
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

// Creates and displays pagination buttons
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

// Sets class of first page button to 'active'
document.querySelector('button').className = 'active';

// Sets button class to 'active' when clicked
function setActive(event) {
   for (let i = 0; i < document.querySelectorAll('.link-list button').length; i++) {
      document.querySelectorAll('.link-list button')[i].classList.remove('active');
   }
   const click = event.target;
   click.classList.add('active');
}

// Update page content when button is clicked
document.querySelector('.link-list').addEventListener('click', event => {
   if (event.target.nodeName === 'BUTTON') {
      showPage(data, `${event.target.innerHTML}`);
      setActive(event);
   }
})