import {assert} from 'chai';
import bookingsData from '../src/data/bookingsData';
import Booking from '../src/classes/booking';

describe('Booking', () => {
  let booking1, booking2, booking3;

  beforeEach(() => {
    booking1 = new Booking(bookingsData[0]);
    booking2 = new Booking(bookingsData[1]);
    booking3 = new Booking(bookingsData[2]);
  })

  it('should be a new instance of Booking', () => {
    assert.instanceOf(booking1, Booking);
    assert.instanceOf(booking2, Booking);
    assert.instanceOf(booking3, Booking);
  })

  it('should have an id', () => {
    console.log
    assert.equal(booking1.id, "5fwrgu4i7k55hl6sz");
    assert.equal(booking2.id, "5fwrgu4i7k55hl6t5");
  })

  it('should have a User ID', () => {
    assert.equal(booking2.userID, 1);
  })
  
  it('should have a booking date', () => {
    assert.deepEqual(booking2.date, "2022/01/24");
  })

  it('should have a room number', () => {
    assert.deepEqual(booking1.roomNumber, 3);
  })
})