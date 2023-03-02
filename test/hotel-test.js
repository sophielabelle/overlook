import {assert} from 'chai';
import bookingsData from '../src/data/bookingsData';
import customersData from '../src/data/customersData';
import roomsData from '../src/data/roomsData';
import Hotel from '../src/classes/Hotel';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(bookingsData, customersData, roomsData);
  })

  it('should be a new instance of Hotel', () => {
    assert.instanceOf(hotel, Hotel); 
  })

  it('should have a list of all the bookings', () => {
    assert.equal(hotel.allBookings, bookingsData);
  })

  it('should have a list of all the customers', () => {
    assert.equal(hotel.allCustomers, customersData);
  })
  
  it('should have a list of all rooms', () => {
    assert.deepEqual(hotel.allRooms, roomsData);
  })

  it.skip('should have be able to retrieve open rooms', () => {
    assert.deepEqual(hotel.openRooms, availRooms);
  })

  it.skip('should be able to add a room to booked rooms', () => {
  })

  it.skip('should be able to retrieve the total spent on all rooms for a customer', () => {
  })
})