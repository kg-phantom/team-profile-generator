const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Steve', 321, 'steve@gmail.com', 'UCLA Extension');

    expect(intern.name).toBe('Steve');
    expect(intern.id).toEqual(321);
    expect(intern.email).toBe('steve@gmail.com');
    expect(intern.school).toBe('UCLA Extension');
});

test("gets intern's school", () => {
    const intern = new Intern('Steve', 321, 'steve@gmail.com', 'UCLA Extension');

    expect(intern.getSchool()).toBe('UCLA Extension');
});

test("gets intern's role", () => {
    const intern = new Intern('Steve', 321, 'steve@gmail.com', 'UCLA Extension');

    expect(intern.getRole()).toBe('Intern');
});