// IMPORTS -------------------------------------------------------|
import './css/styles.css';
import './images/junior-suite.png';
import './images/single-room.png';
import './images/residential-suite.png';
import './images/suite.png';
import {resolveData, postData} from './apiCalls';
import MicroModal from 'micromodal';
import Customer from './classes/customer';
import Room from './classes/Room';
import Booking from './classes/Booking';
import Hotel from './classes/Hotel';

// QUERRY SELECTORS ----------------------------------------------|
const loginPageDisplay  = document.getElementById('loginPage');
const userDashboardDisplay = document.getElementById('userDashboard');
const userBookingDisplay = document.getElementById('userBookings');
const bookingPageDisplay = document.getElementById('bookingDashboard');
const userDetials = document.getElementById('userDetails');
const roomDisplay = document.getElementById('roomDisp');
const dateSelect = document.getElementById('date');
const roomTypesDropdown = document.getElementById('roomTypes');

// buttons -------------------------------------------------------|
const navBtnContainer = document.getElementById('navBtnConatiner');
const showRoomsBtn = document.getElementById('showAvail');
const filterRoomBtn = document.getElementById('filterBtn');

// GLOBAL VARIABLES ----------------------------------------------|
let hotel, customers, customer, rooms, bookings, dateInput;

// EVENT LISTENERS -----------------------------------------------|
window.addEventListener('load', () => {
  MicroModal.show('modal-1');
  resolve();
})

navBtnContainer.addEventListener('click', (e) => {
  if (e.target.id === 'bookingsBtn') {
    const findBookings = hotel.retrieveCustomerBookings(customer);
    displayCustomerDetails(findBookings, userBookingDisplay, customer);
  } else {
    displayBookingDashboard();
  }
})

showRoomsBtn.addEventListener('click', () => {
  dateInput = dateSelect.value.replaceAll('-', '/');
  showAllOpenRooms();
})

filterRoomBtn.addEventListener('click', () => {
  dateInput = dateSelect.value.replaceAll('-', '/');
  filterRooms();
})

roomDisplay.addEventListener('click', (e) => {
  if(e.target.classList.contains('book-btn')) {
    bookRoom(e);
  }
})

// FUNCTIONS -----------------------------------------------------|
const resolve = () => {
  resolveData().then(
    data => {
      customers = data[0].customers.map(c => new Customer(c));
      customer = customers[0];
      rooms = data[1].rooms.map(r => new Room(r));
      bookings = data[2].bookings.map(b => new Booking(b));
      hotel = new Hotel(bookings, customers, rooms);
    }
  )
}

const displayCustomerDetails = (arr, element, cust) => {
  show([userDashboardDisplay]);
  let getRooms = arr.map(a => a.roomNum);
  let c = 0;
  userDetials.innerHTML = `<h2>${cust.name}'s Bookings</h2><p>Total Spent $<span>${hotel.getTotalSpent(getRooms)}</span></p>`;
  arr.forEach(a => {
    element.innerHTML += 
    `<figure class="single-booking" tabindex="${c++}">
      <img src="./images/${a.roomNum.insertImagePath()}" alt="Image of ${a.roomNum.type}">
      <div class="single-details">
        <h3>Room ${a.roomNum.number} - ${a.roomNum.type}</h3>
        <p>$${a.roomNum.cost}</p>
        <p>Bidet? ${a.roomNum.bidet}, ${a.roomNum.beds} ${a.roomNum.bedSize}</p>
      </div>
      <figcaption class="booked-date">
        <p> Booked On: ${a.date}</p>
      </figcaption>
    </figure>`;
  });
}

const displayBookingDashboard = () => {
  show([bookingPageDisplay, ]);
  hide([userDashboardDisplay]);
}

const showAllOpenRooms = (event) => {
  hotel.retrieveOpenRoomData(dateInput);
  const rooms = hotel.openRooms;
  roomDisplay.innerHTML = '';
  if(!dateInput) {
    roomDisplay.innerHTML = `<h3 class="no-rooms-msg">It looks like no date was Selected! Please Select a date and try again.</h3>`;
  } else {
    displayRooms(roomDisplay, rooms);
  }
}

const filterRooms = () => {
  hotel.retrieveOpenRoomData(dateInput);
  const filterType = roomTypesDropdown.value.replace('-', ' ');
  const filteredRooms = hotel.filterRoomType(filterType);
  roomDisplay.innerHTML = '';
  if (filterType === 'Select Room') {
    roomDisplay.innerHTML = `<h3 class="no-rooms-msg">Please Select a Room Type to Filter!</h3>`;
  } else {
    displayRooms(roomDisplay, filteredRooms);
  }
}

const displayRooms = (elem, arr) => {
  if (arr.length < 1) {
    elem.innerHTML = `<h3 class="no-rooms-msg">Sorry there are no avaible rooms for this Date! Please Select another.</h3>`;
  } else {
    arr.forEach(room => {
      elem.innerHTML += 
      `<div class="room">
        <p id="${room.id}">A ${room.type} with ${room.beds} ${room.bedSize} bed. Cost: $${room.cost} - Room Number: ${room.number}</p>
        <button class="book-btn nav-btns nav-btn" id="bookNow${room.number}">Book Now!</button>
      </div>`; 
    });
  }
}

const bookRoom = (e) => {
  const id = parseInt(e.target.id.split('bookNow',)[1]);
  const newPosting = hotel.bookNewRoom(customer.id, dateInput, id);
  postData(newPosting);
  const bookBtn = document.getElementById(`${e.target.id}`);
  bookBtn.classList.add('unclickable');
  bookBtn.innerText = `Room Booked on ${dateInput}!`;
}


// HELPER FUNCTIONS ----------------------------------------------| 
const show = (arr) => arr.forEach(elem => elem.classList.remove('hidden'));
const hide = (arr) => arr.forEach(elem => elem.classList.add('hidden'));

export default resolve;