const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Bella', 789, 'bella@gmail.com', 'bellahub');

    expect(engineer.name).toBe('Bella');
    expect(engineer.id).toEqual(789);
    expect(engineer.email).toBe('bella@gmail.com');
    expect(engineer.github).toBe('bellahub');
});

test("gets engineer's GitHub username", () => {
    const engineer = new Engineer('Bella', 789, 'bella@gmail.com', 'bellahub');

    expect(engineer.getGithub()).toBe('bellahub');
});

test("get engineer's role", () => {
    const engineer = new Engineer('Bella', 789, 'bella@gmail.com', 'bellahub');

    expect(engineer.getRole()).toBe('Engineer');
});