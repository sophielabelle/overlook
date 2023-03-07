import {assert} from 'chai';
import bookingsData from '../src/data/bookingsData';
import customersData from '../src/data/customersData';
import roomsData from '../src/data/roomsData';
import Hotel from '../src/classes/Hotel';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/customer';
import Room from '../src/classes/Room';

describe('Hotel', () => {
  let hotel, customer, findBooking, bData, cData, rData, sepRooms;

  beforeEach(() => {
    bData = bookingsData.map(b => new Booking(b));
    cData = customersData.map(c => new Customer(c));
    rData = roomsData.map(r => new Room(r));
    hotel = new Hotel(bData, cData, rData);
    customer = hotel.allCustomers[2];
    findBooking = hotel.retrieveCustomerBookings(customer);
    sepRooms = findBooking.map(b =>  b.roomNum);
  });

  it('should be a new instance of Hotel', () => {
    assert.instanceOf(hotel, Hotel); 
  });

  it('should have a list of all the bookings', () => {
    assert.equal(hotel.allBookings, bData);
  });

  it('should have a list of all the customers', () => {
    assert.equal(hotel.allCustomers, cData);
  });
  
  it('should have a list of all rooms', () => {
    assert.deepEqual(hotel.allRooms, rData);
  });

  it('should have be able to retrieve open rooms', () => {
    hotel.retrieveOpenRoomData("2022/01/24")
    const rooms = [2,1];
    assert.deepEqual(hotel.bookedRoomsOnDate, rooms);
    const availRooms = [rData[2], rData[3]];
    assert.deepEqual(hotel.openRooms, availRooms);
  });

  it('should be able to retrieve all a customers rooms', () => {
    assert.deepEqual(sepRooms, [rData[0]]);
  });

  it('should be able to retrieve a single customer from an ID', () => {
    assert.deepEqual(hotel.getCustomer(2), hotel.allCustomers[1]);
  });

  it('should be able to retrieve the total spent on all rooms for a customer', () => {
    const total = hotel.getTotalSpent(sepRooms);
    assert.deepEqual(total, '358.40');
  });

  it('should filter rooms based on their type', () => {
    hotel.retrieveOpenRoomData("2022/03/22");
    const filterRooms = hotel.filterRoomType('single room');
    const rooms = [hotel.allRooms[2], hotel.allRooms[3]];
    assert.deepEqual(filterRooms, rooms);
  });

  it('should be able to make a new booking object', () => {
    const exObj = { "userID": 2, "date": '2023/03/23', "roomNumber": 13};
    const roomObj = hotel.bookNewRoom(2, '2023/03/23', 13);
    assert.deepEqual(roomObj, exObj);
  });
});