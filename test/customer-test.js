import {assert} from 'chai';
import customersData from '../src/data/customersData';
import Customer from '../src/classes/Customer';

describe('Customer', () => {
  let customer1, customer2, customer3;

  beforeEach(() => {
    customer1 = new Customer(customersData[0]);
    customer2 = new Customer(customersData[1]);
    customer3 = new Customer(customersData[2]);
  });

  it('should be a new instance of customer', () => {
    assert.instanceOf(customer1, Customer);
    assert.instanceOf(customer2, Customer);
    assert.instanceOf(customer3, Customer);
  });

  it('should have an id', () => {
    assert.equal(customer1.id, 1);
    assert.equal(customer2.id, 2);
  });

  it('should have a name', () => {
    assert.equal(customer2.name, "Rocio Schuster");
  });
});