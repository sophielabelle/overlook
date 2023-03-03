import {assert} from 'chai';
import bookingsData from '../src/data/bookingsData';
import customersData from '../src/data/customersData';
import roomsData from '../src/data/roomsData';
import Customer from '../src/classes/Customer';
import Hotel from '../src/classes/Hotel';

describe('Customer', () => {
  let customer1, customer2, customer3, hotel;

  beforeEach(() => {
    hotel = new Hotel(bookingsData, customersData, roomsData)
    customer1 = new Customer(customersData[0], hotel);
    customer2 = new Customer(customersData[1], hotel);
    customer3 = new Customer(customersData[2], hotel);
  })

  it('should be a new instance of customer', () => {
    assert.instanceOf(customer1, Customer);
    assert.instanceOf(customer2, Customer);
    assert.instanceOf(customer3, Customer);
  })

  it('should have an id', () => {
    assert.equal(customer1.id, 1);
    assert.equal(customer2.id, 2);
  })

  it('should have a name', () => {
    assert.equal(customer2.name, "Rocio Schuster");
  })

  it('should have a hotel', () => {
    assert.equal(customer1.hotel, hotel);
  })

  it('should start with no booked rooms as default', () => {
    assert.deepEqual(customer2.bookedRooms, []);
  })

  it('should start with no money spent on rooms', () => {
    assert.equal(customer3.totalSpent, 0);
  })
})