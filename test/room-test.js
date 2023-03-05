import {assert} from 'chai';
import roomsData from '../src/data/roomsData';
import Room from '../src/classes/room';

describe('Room', () => {
  let room1, room2, room3;

  beforeEach(() => {
    room1 = new Room(roomsData[0]);
    room2 = new Room(roomsData[1]);
    room3 = new Room(roomsData[2]);
  });

  it('should be an new instance of Room', () => {
    assert.instanceOf(room1, Room);
    assert.instanceOf(room2, Room);
    assert.instanceOf(room3, Room);
  });

  it('should have a room number', () => {
    assert.equal(room1.number, 1);
    assert.equal(room3.number, 3);
  });

  it('should have a type that can be different', () => {
    assert.equal(room1.type, "residential suite");
    assert.equal(room3.type, "single room");
  });

  it('should should a possible bidet depending on type', () => {
    assert.equal(room1.bidet, true);
    assert.equal(room2.bidet, false);
  });

  it('should have a bed size', () => {
    assert.equal(room2.bedSize, "full");
    assert.equal(room3.bedSize, "king")
  });

  it('should have a set number of beds depending on roomType', () => {
    assert.equal(room2.beds, "2");
    assert.equal(room3.beds, "1");
  });
  
  it('should have a cost per night', () => {
    assert.equal(room1.cost, 358.4);
    assert.equal(room2.cost, 477.38);
  });
});