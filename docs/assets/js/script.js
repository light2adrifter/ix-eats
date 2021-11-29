// googleSearchApiKey = AIzaSyBVpEkmXFRFPLuNtirar23cbSNCcOD-2gg

// googlesearch terminal Copy the following code, and paste it into a <div> element in your site's <body> section, where you want both of the search box and the search results to render.
{/* <script async src="https://cse.google.com/cse.js?cx=6f50efadbd4e8bad7"></script> */}
{/* <div class="gcse-search"></div> */}


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.5384, lng: 81.3789 },
      zoom: 8,
    });
  }
