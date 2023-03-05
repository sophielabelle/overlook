// IMPORTS -------------------------------------------------------|
import './css/styles.css';
import {resolveData, postData} from './apiCalls';
import './images/junior-suite.png'
import './images/single-room.png'
import './images/residential-suite.png'
import './images/suite.png'
import Customer from './classes/customer';
import Room from './classes/Room';
import Booking from './classes/Booking';
import Hotel from './classes/Hotel';
import MicroModal from 'micromodal';

// QUERRY SELECTORS ----------------------------------------------|
const loginPageDisplay  = document.getElementById('loginPage');
const userDashboardDisplay = document.getElementById('userDashboard');
const userBookingDisplay = document.getElementById('userBookings');
const bookingPageDisplay = document.getElementById('bookingDashboard');
const userDetials = document.getElementById('userDetails');
const roomDisplay = document.getElementById('roomDisp')

// buttons
const navBtnContainer = document.getElementById('navBtnConatiner');
const homeBtn = document.getElementById('homeBtn');
const dashBtn = document.getElementById('dashboardBtn');
const showRooms = document.getElementById('showAvail');


// GLOBAL VARIABLES ----------------------------------------------|
let hotel, customers, customer, rooms, bookings;
MicroModal.init();

// EVENT LISTENERS -----------------------------------------------|
window.addEventListener('load', () => {
  MicroModal.show('modal-1');
  resolveData().then(
    data => {
      customers = data[0].customers.map(c => new Customer(c))
      customer = customers[0];
      rooms = data[1].rooms.map(r => new Room(r));
      bookings = data[2].bookings.map(b => new Booking(b));
      hotel = new Hotel(bookings, customers, rooms);
    }
  )
})

navBtnContainer.addEventListener('click', (e) => {
  console.log(e.target.id)
  if (e.target.id === 'bookingsBtn') {
    const findBookings = hotel.retrieveCustomerBookings(customer);
    displayCustomerDetails(findBookings, userBookingDisplay, customer);
  } else {
    console.log('inside 2nd if')
    displayBookingDashboard();
  }
})

showRooms.addEventListener('click', () => {
  showOpenRooms()
})

// EVENT HANDLERS ------------------------------------------------| 



// FUNCTIONS -----------------------------------------------------| 
const displayCustomerDetails = (a, element, cust) => {
  show([userDashboardDisplay])
  userDetials.innerHTML = `<h2>${cust.name}'s Bookings</h2><p>Total Spent $<span>${hotel.getTotalSpent(a)}</span></p>`

  for(let i = 0; i < a.length; i++) {
    element.innerHTML += 
    `<figure class="single-booking" tabindex="${i+=1}">
      <img src="./images/${a[i].insertImagePath()}" alt="Image of ${a[i].type}">
      <h3>Room ${a[i].number} - ${a[i].type}</h3>
      <p>$${a[i].cost}</p>
      <div>
        <p>Bidet? ${a[i].bidet}, ${a[i].beds} ${a[i].bedSize}</p>
      </div>
      <figcaption class="booked-date">
        <p> Booked On:</p>
      </figcaption>
    </figure>`;
  }
}

const displayBookingDashboard = () => {
  show([bookingPageDisplay]);
  hide([userDashboardDisplay]);
}

const showOpenRooms = () => {
  show([roomDisplay])
  hotel.retrieveOpenRoomData();
  const rooms = hotel.openRooms;
  console.log(rooms)
  rooms.forEach(room => {
    roomDisplay.innerHTML += 
    `<div class="room">
      <p id="${room.id}">A ${room.type} with ${room.beds} ${room.bedSize} bed. Cost: $${room.cost}</p>
      <button class="book-btn nav-btns nav-btn" id="bookNow${room.id}">Book Now</button>
    </div>`; 
  });
}

// HELPER FUNCTIONS ----------------------------------------------| 
const show = (arr) => arr.map(elem => elem.classList.remove('hidden'));
const hide = (arr) => arr.map(elem => elem.classList.add('hidden'));