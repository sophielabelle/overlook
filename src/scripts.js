// IMPORTS -------------------------------------------------------|
import './css/styles.css';
import {fetchData, resolveData, postData} from './apiCalls';
import './images/junior-suite.png'
import './images/single.png'
import './images/residential.png'
import './images/suite.png'


// QUERRY SELECTORS ----------------------------------------------|
const loginPageDisplay  = document.getElementById('loginPage');
const userDashboardDisplay = document.getElementById('userDashboard');
const userBookings = document.getElementById('userBookings');
const bookingPageDisplay = document.getElementById('bookingDashboard');


// buttons
const homeBtn = document.getElementById('homeBtn');
const bookingsBtn = document.getElementById('bookingsBtn');
const dashboardBtn = document.getElementById('dashboardBtn');


// GLOBAL VARIABLES ----------------------------------------------|
let hotel, customer, customers, rooms, bookings;

// EVENT LISTENERS -----------------------------------------------|
window.addEventListener('load', () => {
  resolveData().then(
    data => {
      customers = data[0].customers.forEach(customer  =>  );
    }
  )
})


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
const show = (array) => array.map(elem => elem.classlist.remove('hidden'));
const hide = (array) => array.map(elem => elem.classlist.add('hidden'));