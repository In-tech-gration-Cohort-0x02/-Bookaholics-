function searchBooks (queryString) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=10&q=${queryString}`)
        .then((res)=>res.json()) 
        .then((res)=>res.json()) 

 
}

document.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("#form"); 
    $form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const queryInput = document.querySelector('#query');
        console.log(queryInput.value);
        const queryString = queryInput.value;
    });
})

let menu = document.querySelector('#menu-icon');
      let navbar = document.querySelector('.navbar');

      function toggleWithDelay() {
        setTimeout(() => {
          menu.classList.toggle('bx-x');
        }, 200);
      }
      
      menu.onclick = () => {
        toggleWithDelay();
        navbar.classList.toggle('open');
      }


