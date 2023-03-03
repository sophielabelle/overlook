// IMPORTS -------------------------------------------------------|
import './css/styles.css';
import './images/junior-suite.png'
import './images/single.png'
import './images/residential.png'
import './images/suite.png'

// QUERRY SELECTORS ----------------------------------------------|
// userDashboard 
const userDashboard = document.querySelector('#userDashboard');
const userBookings = document.querySelector('#userBookings');

// 

// EVENT LISTENERS -----------------------------------------------|

// EVENT HANDLERS ------------------------------------------------| 



// FUNCTIONS -----------------------------------------------------| 
function displayCustomerBookings(array, element) {
  for(let i = 0; i < array.length; i++) {
    element.innerHTML += 
    `<div class="single-booking">
      <img src="" alt="">
      <h3>Room number - Room Type</h3>
      <p>Cost per Night</p>
      <div>
        <p>numBeds</p>
        <p>bedSize</p>
        <p>bidet??</p>
      </div>
    </div>`;
  }
}

// HELPER FUNCTIONS ----------------------------------------------| 
const show = (array) => {
  return array.map(elem => elem.classlist.remove('hidden'));
}

const hide = (array) => {
  return array.map(elem => elem.classlist.add('hidden'));
}