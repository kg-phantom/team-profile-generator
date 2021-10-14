const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Dave', 456, 'dave@gmail.com', 1);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(456);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toEqual(1);
});